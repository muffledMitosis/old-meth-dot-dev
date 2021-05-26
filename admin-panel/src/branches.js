const utils = require('./utils');
const fb = require('./fb-admin');
const fs = require('fs-extra');

const branches = {};
const workPath = './work';

async function update(){
	let toBeUploaded = await utils.getUpdateInfo();
	let ans = await utils.confirmation(`Do you want to update ${toBeUploaded}`);

	if(ans=="no"){
		console.log("exiting");
		return;
	}

	console.log("Updating...");
	await utils.uploadFile(`./work/${toBeUploaded}/content.md`, `${toBeUploaded}/content.md`).catch(console.error);

	let [type, id] = toBeUploaded.split('/');
	id = btoa(id);

	await fb.db.collection(type).doc(id).update({
		"contentBlobLocation": fb.bucket.file(`${toBeUploaded}/content.md`).publicUrl()
	});
}

async function creationFunction(){
	let options = await utils.getBaseInfo();

	const typeFlag = (options["type"] == 'blog') ? 'blog' : 'proj';
	const docPath = `${typeFlag}/${options['mainHeader']}/content.md`;
	const fPath = `${workPath}/${docPath}`;
	fs.outputFileSync(fPath, '');
	
	console.log(`Ready to edit \"${fPath}\"`);

	const id = btoa(options['mainHeader']);

	const docCreation = await fb.db.collection(typeFlag).doc(id).set({
		'clapCount' : 0,
		'contentBlobLocation': "",
		'imgUrl': options["imgURL"],
		'introText': options['introText'],
		'mainHeader': options['mainHeader'],
		'id': id,
		'timestamp': fb.admin.firestore.FieldValue.serverTimestamp()
	});
	
}

async function editFunction(){
	// Show a selectable list of blog posts or projects
	// ask for edit specifics => title, main image, content
}

branches.editFunction = editFunction;
branches.creationFunction = creationFunction;
branches.updateFunction = update;

module.exports = branches;