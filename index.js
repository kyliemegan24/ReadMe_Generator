const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const { promisify } = require("util");

const questions = require("./Q&T/questions");

const generateReadMe = require("./Q&T/template");

const writeFileAsync = promisify(writeFile);


console.log("Let's Generate a professional README!");


function promptUser() {
    return prompt(questions);
}

async function init() {
    //try ... catch block
      try {
      const answers = await promptUser();
      
      console.log(JSON.stringify(answers, null, '\t'));
  
          const readme = generateReadMe(answers);
  
      await writeFileAsync('SampleREADME.md', readme);
  
          console.log('Successfully wrote to README.md');
      } catch (err) {
          console.log(err);
      }
  }

  init();