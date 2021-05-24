const fs = require('fs-extra');
const inquirer = require('inquirer');
const utils = require('./utils');

/*
 The program will download appropriate files when editing, reupload them and change firestore data 
*/

async function creationFunction(){
	// TODO: Get and base info and create data in Firestore
	let options = await utils.getBaseInfo();
	console.log(options);
	// Create local folder structure for temp files
}

async function editFunction(){
	// Show a selectable list of blog posts or projects
	// ask for edit specifics => title, main image, content
}

async function mainPromt(){
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
mainPromt();