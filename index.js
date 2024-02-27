const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const badges = require('badge-maker');

const licenseBadge = require('./utils/license').licenseBadge;
const template = require('./utils/template');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },

  {
    type: 'input',
    message: 'Enter a short description of your project:',
    name: 'description',
  },

  {
    type: 'input',
    message: 'Enter installation Instructions:',
    name: 'installation',
  },

  {
    type: 'input',
    message:
      'List Installation Code (Anything entered here will display in Code Block):',
    name: 'code',
  },

  {
    type: 'input',
    message: 'Enter the URL to Clone your Repo:',
    name: 'clone',
  },

  {
    type: 'input',
    message: 'Enter the URL to your Repo:',
    name: 'repo',
  },

  {
    type: 'input',
    name: 'live',
    message: 'Enter the URL of the Deployed site:',
  },

  {
    type: 'input',
    name: 'gitprofile',
    message: 'Enter URL of GitHub Profile',
  },

  {
    type: 'list',
    name: 'license',
    message: 'Please select the your License.',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla',
      'MIT',
      'Apache',
    ],
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to the Project?',
  },

  {
    type: 'input',
    name: 'screenshot',
    message:
      'What is the File Name for the Screenshot? (file must be nested under assets/images/FILENAME)',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing protocols?',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter Email Address for others to reach you:',
  },

  {
    type: 'input',
    name: 'github',
    message: "Finally let's Enter your Github Username:",
  },
];

function init() {
  console.log(`                 
         ,..........   ..........,
     ,..,'          '.'          ',..,
    ,' ,'   ReadMe   :    Maker   ', ',
   ,' ,'             :             ', ',
  ,' ,'              :              ', ',
 ,' ,'............., : ,.............', ',
,'  '............   '.'   ............'  ',
 '''''''''''''''''';''';''''''''''''''''''
                    '''
              `);

  inquirer.prompt(questions).then((answers) => {
    answers.licenseBadge = licenseBadge(answers.license);
    readme = template(answers);
    fs.writeFile('newREADME.md', readme, (err) => {
      if (err) console.log(err);
      else {
        console.log('File written successfully\n');
        console.log('The written File has the following contents:');
        console.log(fs.readFileSync('newREADME.md', 'utf8'));
      }
    });
  });
}

init();
