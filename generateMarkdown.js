function generateMarkdown(promptResponse) {
    const content = `# ${promptResponse.projectName}
    
    # License
    ![${promptResponse.license}](https://img.shields.io/badge/license-${promptResponse.license}-red)
  
    ### Table of Contents
    * [Description](#Description)
    * [Usage](#Usage)
    * [Installation](#Installation)
    * [Contributing](#Contributing)
    * [Testing](#Testing)
    
    
    ## Description
    ${promptResponse.description}
  
    # Usage
    ${promptResponse.usage}
  
    # Installation
    ${promptResponse.installation}
  
    # Contributing
    ${promptResponse.contributing}
  
    # Testing
    ${promptResponse.tests}
  
    ### Questions
    If you have any questions you can contact me via: [Github](https://www.github.com/${promptResponse.userNameGithub}) [Email Me](mailto:${promptResponse.userEmail})
    
    `
    return content;
  
  };
  
  module.exports = generateMarkdown;
  