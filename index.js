const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const promptUser = () => {[

    {
        type: "input",
          message: "Project Name?",
          name: "projectName", 
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter valid response.');
              return false;
            }
          }
        },
        { 
          type: "input",
          message: "Please provide a breif description of your project.",
          name: "description",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter valid response.');
              return false;
            }
          }
        },
     {
      type: "input",
      message: "If needed, explain your installation process.",
      name: "installation",
   },
     {
        type: "input",
        message: "How is the installation used?",
        name: "usage",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
    },
  },
      {
          type: "input",
          message: "Who are the contributors of the project?",
          name: "contributing",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter valid response.');
              return false;
            }
          }
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
          message: "Please enter your GitHub username:",
          name: "userNameGitHub",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter valid response.');
              return false;
            }
          }
        },
      {
          type: "input",
          message: "What is your email address?",
          name: "userEmail",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter valid response.');
              return false;
            }
          }
        },
    ]
    

    // Readme Function
    inquirer.prompt(promptUser).then(function(promptResponse) {
        console.log(promptResponse);
        
         const content = generateMarkdown(promptResponse);
         console.log(content);
          fs.writeFile("./ReadMe.md", content, function(err){
              if (err) throw err
              console.log("Enjoy your ReadMe!");
          });
     } )};