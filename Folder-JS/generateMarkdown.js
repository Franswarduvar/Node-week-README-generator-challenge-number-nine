// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license) `;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
return `## License \nThis project is licensed under the ${license} License.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
 
## Description 

${data.Description}

## Table of Contense

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Contributing

${data.Contributing}

## Tests

${data.Tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about my repo please contact me at ${data.Email}
You can find more fo my work at [${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
