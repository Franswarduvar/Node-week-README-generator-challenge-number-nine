// TODO: Include packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { ifError } = require('assert');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
          type: 'input',
          message: 'Please provide a short description of your project?',
          name: 'Description',
        },
        {
          type: 'input',
          message: 'What are the installation steps for your project?',
          name: 'Installation',
        },
        {
          type: 'input',
          message: 'How does the user most effectivly use your repo?',
          name: 'Usage',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
          {
            type: 'input',
            message: 'How can you contribute to this project?',
            name: 'Contributions',
          },
          {
            type: 'input',
            message: 'Whats the best way for the user to test the project?',
            name: 'Tests',
          },
          {
            type: 'input',
            message: 'Please provide an emails for further contact?',
            name: 'Email',
          },
          {
            type: 'input',
            message: 'What is your github?',
            name: 'github',
          },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),'/dist',fileName),data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers,err)=>{
    if(err) console.log(err);
    writeToFile('README.md',generateMarkdown(answers))
  })
}

// Function call to initialize app
init();
