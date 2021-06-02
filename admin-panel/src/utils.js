const fs = require('fs-extra');
const FileType = require('file-type');
const inquirer = require('inquirer');
const fb = require('./fb-admin');

let toBeExported = {};

toBeExported.uploadFile = async (src, dest)=> {
    await fb.bucket.upload(src, {destination: dest});
    await fb.bucket.file(dest).makePublic();
}

toBeExported.getBaseInfo = async ()=>{
    let options = await inquirer.prompt([
        {
            name: 'type',
            type: 'list',
            message: 'Whats it gonna be? Project? Blog post?',
            default: 'blog',
            choices: ['project', 'blog']
        },
        {
            name: 'mainHeader', message: 'Main Header?'
        },
        {
            name: 'introText', message: 'Intro Text?'
        },
        {
            name: 'imgURL', message: 'Image URL?'
        }
    ]);
    return options;
}

toBeExported.getUpdateInfo = async ()=>{
    let type = await inquirer.prompt([
        {
            name: 'type', type: 'list', message: 'Project? Blog?',
            default: 'blog',
            choices: ['proj', 'blog']
        }
    ]);
    let sPath = type.type;
    let files = fs.readdirSync(`./work/${sPath}`);
    let file_select = await inquirer.prompt([
        {
            name: 'file',
            type: 'list', message: 'What file would you like to update?',
            choices: files
        }
    ]);

    return `${sPath}/${file_select.file}`;
}

toBeExported.getPushCategory = async ()=> {
    let ans = await inquirer.prompt([
        {
          type: 'expand',
          name: 'pushCat',
          message: 'What do you want to push?',
          choices: [
            {
              key: 'i',
              value: 'image',
            },
            {
              key: 'c',
              value: 'content',
            },
            {
                key: 'b',
                value: 'both'
            }
          ],
        },
      ]);
    return ans.pushCat;
}

toBeExported.pushContent = async (toBeUploaded) => {
	console.log("Pushing content...");
	await toBeExported.uploadFile(`./work/${toBeUploaded}/content.md`, `${toBeUploaded}/content.md`).catch(console.error);
	let [type, id] = toBeUploaded.split('/');
	id = btoa(id);
	await fb.db.collection(type).doc(id).update({
		"contentBlobLocation": fb.bucket.file(`${toBeUploaded}/content.md`).publicUrl()
	});
    console.log("Done pushing content");
}

toBeExported.pushImage = async (toBeUploaded)=> {
    console.log("Pushing Image...");
    let basePath = `./work/${toBeUploaded}`;
    let files = fs.readdirSync(basePath);
    let imgExists = false;
    let imgFile = "";
    // Loops through all files in dir, grabs the first image detected, ignores others
    for(let i=0; i<files.length; i++){
        let fileType = ""; 
        try {
            fileType = (await FileType.fromFile(`${basePath}/${files[i]}`)).mime;
        } catch (error) {
        }
        if(fileType.includes('image')){
            imgExists=true;
            imgFile = files[i];
            break;
        }
    }

    if(!imgExists){
        console.log("Image Not Found"); 
        return;
    }

    await toBeExported.uploadFile(`${basePath}/${imgFile}`, `${toBeUploaded}/${imgFile}`).catch(console.error);

	let [type, id] = toBeUploaded.split('/');
	id = btoa(id);
	await fb.db.collection(type).doc(id).update({
		"imgUrl": fb.bucket.file(`${toBeUploaded}/${imgFile}`).publicUrl()
	});
    console.log("Done uploading Image");
}

toBeExported.confirmation = async (wut)=>{
    let ans = await inquirer.prompt([
        {
          type: 'expand',
          name: 'yesno',
          message: wut,
          choices: [
            {
              key: 'y',
              value: 'yes',
            },
            {
              key: 'n',
              value: 'no',
            },
          ],
        },
      ]);
    return ans.yesno;
} 

module.exports = toBeExported;