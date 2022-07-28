// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to call your READ.me file?',
        name: 'title',
      },
      {
          type: 'input',
          message: 'How would you describe your project?',
          name: 'Description',
        },
        {
          type: 'input',
          message: 'Would you like a section of a table of contents?',
          name: 'Tcontents',
        },
        {
          type: 'input',
          message: 'Would you like a section for instalation?',
          name: 'Installation',
        },
        {
          type: 'input',
          message: 'Would you like a section for Usage?',
          name: 'Usage',
        },
        {
            type: 'input',
            message: 'Would you like a section for Licensing?',
            name: 'License',
          },
          {
            type: 'input',
            message: 'Would you like a section for contributions?',
            name: 'Contributions',
          },
          {
            type: 'input',
            message: 'Would you like a section for tests?',
            name: 'Tests',
          },
          {
            type: 'input',
            message: 'Would you like a section for questions?',
            name: 'Questions',
          },

];
then((response) =>
console.log(response)
);
then(answers => generateMarkdown(answers))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
