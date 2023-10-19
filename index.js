// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const badges = require("badge-maker");

const template = require("./utils/template");


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },

    {
    type: "input",
    message: "Enter a description of your project:",
    name: "description",
    },

    {
    type: "input",
    message: "Enter installation Instructions:",
    name: "installation",
    },

    {
    type: "input",
    message: "Enter the URL of your Repo",
    name: "repo",
    },

    {
    type: "input",
    message: "Enter the Link to Clone your Repo",
    name: "clone",
     },

     {
    type: "list",
    name: "license",
    message: "Please select the license you used.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
    ],
   },

   {
    type: "input",
    name: "live",
    message: "What is the URL of the Deployed site?",
    },

    {
    type: "input",
    name: "repo",
    message: "Enter the URL for your Repo:"
    },

    {
        type: "input",
        name: "contributing",
        message: "Who contributed to the Project?",
    },

    {
        type: "input",
        name: "screenshot",
        message: "What is the File Name for the Screenshot?",
    },

    {
        type: "input",
        name: "credits",
        message: "Any Credits you need to list?",
    },

    {
        type: "input",
        name: "tests",
        message: "What are the testing protocols?",
    },

    {
        type: "input",
        name: "email",
        message: "What is a good contact email?",
    },


];

// function generateReadMe(answers) {
//     // Generate the README file
//     const readme = template(answers);
  
//     // Write the README file to disk
//     const fs = require('fs');
//     fs.writeFileSync('README.md', readme);
//   };



// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions).then(answers => {
        readme = template(answers);
       fs.writeFile("readMeTest.md", readme, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log("The written has the following contents:"); 
          console.log(fs.readFileSync("readMeTest.md", "utf8")); 
        } 
    })

    })
};





// TODO: Create a function to initialize app
init();