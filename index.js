//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//Questions for Read me Prompt 
const questions = () => {
  return inquirer.prompt([

    {
    type: "input",
      message: "What do you want the name of your project to be?",
      name: "projectName"
      
    },
    { 
      type: "input",
      message: "Please describe your project.",
      name: "description"
        
    },
  {
    type: "input",
    message: "Please explain the installation.",
    name: "installation"
 },
 {
    type: "input",
    message: "What is the project used for?",
    name: "usageinfo"
    },
  {
      type: "input",
      message: "Who is contributing to the project?",
      name: "contributing"
      
  },
 {
      type: "input",
      message: "How is your project tested?",
      name: "tests"
  },
  {
    type:'choices',
    choices: ['Academic Free License v3.0',"MIT","Open Software License 3.0","Other", "None"],
    name:"license"
},
  {
      type: "input",
      message: "Enter your GitHub username:",
      name: "userNameGitHub"
      
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "userEmail"
  },
  ])
}
//function for readme
