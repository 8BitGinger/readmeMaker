// TODO: Include packages needed for this application

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
