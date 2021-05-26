const fs = require('fs-extra');
const inquirer = require('inquirer');
const fb = require('./fb-admin');

let toBeExported = {};

toBeExported.uploadFile = async (src, dest)=> {
    await fb.bucket.upload(src, {destination: dest});
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

toBeExported.confirmation = async (wut)=>{
    let ans = inquirer.prompt([
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