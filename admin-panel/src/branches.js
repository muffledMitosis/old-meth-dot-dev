const utils = require('./utils');
const fb = require('./fb-admin');
const fs = require('fs-extra');

const branches = {};
const workPath = './work';

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

module.exports = branches;