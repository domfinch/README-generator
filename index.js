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
    type:'list',
    name:"license",
    choices: ['Academic Free License v3.0',"MIT","Open Software License 3.0","Other", "None"],
    message: 'license message'
    },
  {
      type: "input",
      message: "Enter your GitHub username:",
      name: "githubname"
      
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "email"
  },
  ])
}

questions()
.then(function(promptResponse) {
  console.log(promptResponse);
  
   var content = generateMarkdown(promptResponse);
   console.log(content);
    fs.writeFile("./ReadMe.md", content, function(err){
        if (err) throw err
        console.log("ReadMe Generated!");
    });
} ); 