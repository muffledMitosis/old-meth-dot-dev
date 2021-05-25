const fs = require('fs-extra');
const inquirer = require('inquirer');
const utils = require('./utils');
const fb = require('./fb-admin');

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

async function mainPrompt(){
	let operation = await inquirer.prompt(
		{
			type: 'expand', name: 'opcode', message: 'What would you like to do?',
			choices: [{key:'e', value:'edit'}, {key:'c', value:'create'}]
		}
	);

	if(operation.opcode == 'create'){
		creationFunction();
	}
	else if(operation.opcode == 'edit'){
		editFunction();
	}
}

fs.ensureDirSync('./work/proj');
fs.ensureDirSync('./work/blog');
mainPrompt();