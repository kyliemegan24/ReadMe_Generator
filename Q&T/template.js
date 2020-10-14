function generateReadMe(answers) {

return `

# ${answers.title}

## License
${answers.license}

## Table of Contents

* [ Description ](#Description)
* [ Installation ](#Installation)
* [ Usage Information ](#Usage-Information)
* [ Credits / Contributors ](#Credits-/-Contributors)
* [ Testing Procedures ](#Testing-Procedures)
* [ Questions? ](#Questions?)


## Description
${answers.description}

## Installation 
${answers.installation}

## Usage Information

${answers.usage}

## Credits / Contributors

${answers.contributors}

## Testing Procedures

${answers.testing}

## Questions?

Check out my Github Profile at https://github.com/${answers.githubUsername.trim().toLowerCase()}

<br>

You can also email me at ${answers.email}.




`;

}

module.exports = generateReadMe