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
	utils.uploadFile(`./work/${toBeUploaded}/content.md`, `${toBeUploaded}/content.md`);
	utils.uploadFile().catch(console.error);

	// TODO: Find equivalent file in storage, delete it, upload current one
	// TODO: Update appropriate Firestore document
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