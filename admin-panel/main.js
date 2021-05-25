const fs = require('fs-extra');
const inquirer = require('inquirer');
const branches = require('./src/branches');

async function mainPrompt(){
	let operation = await inquirer.prompt(
		{
			type: 'expand', name: 'opcode', message: 'What would you like to do?',
			choices: [{key:'e', value:'edit'}, {key:'c', value:'create'}, {key: 'u', value: 'upload'}]
		}
	);

	if(operation.opcode == 'create'){
		branches.creationFunction();
	}
	else if(operation.opcode == 'edit'){
		branches.editFunction();
	}
}

fs.ensureDirSync('./work/proj');
fs.ensureDirSync('./work/blog');
mainPrompt();