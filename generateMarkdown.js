// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') { 
    return ''
  }
  return ` ![${license}](https://img.shields.io/badge/license-${license}-red)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') { 
    return ''
  }
  return '* [License](#License)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') { 
    return ''
  }
  return `## License

  this project is covered under ${license}
  `
}


function generateMarkdown(promptResponse) {
    const content = `# ${promptResponse.projectName}
    ${renderLicenseBadge(promptResponse.license)}
    
    ## Description

    ${promptResponse.description}
  
    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    ${renderLicenseLink(promptResponse.license)}
    * [Contributing](#Contributing)
    * [Testing](#Testing)
    
    ## Installation
    ${promptResponse.installation}
  
    ## Usage
    ${promptResponse.usage}
  
    ${renderLicenseSection(promptResponse.license)}
  
    ## Contributing
    ${promptResponse.contributing}
  
    ## Testing
    ${promptResponse.tests}
  
    ## Questions
    If you have any questions you can contact me via: [Github](https://www.github.com/${promptResponse.userNameGithub}) [Email Me](mailto:${promptResponse.userEmail})
    
    `
    return content;
  
  };
  
  module.exports = generateMarkdown;
  