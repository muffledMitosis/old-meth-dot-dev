const inquirer = require('inquirer');

let toBeExported = {};

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
            name: 'imgURL', message: 'Image URL?'
        }
    ]);
    return options;
}

module.exports = toBeExported;