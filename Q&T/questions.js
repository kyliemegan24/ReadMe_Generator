const questions = [
    {
        //Project Title
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        //Project Description

        type: "input",
        message: "Please write a description of your project:",
        name: "description",

    },
    {
        //Installation Instructions
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",

    },
    {
        //Usage Instructions
        type: "input",
        message: "What are the usage instructions?",
        name: "usage",

    },

    {
        //Contributors and Credit
        type: "input",
        message: "Who contributed to this project?",
        name: "contributors",
    }, 
    {
        //Testing Procedures
        type: "input",
        message: "Please elaborate on all testing procedures.",
        name: "testing",
    },
    {
        //Github Username
        type: "input",
        message: "Please enter your github username.",
        name: "githubUsername",
    },
    {
        //Email
        type: "input",
        message: "Please enter your email address",
        name: "email",

    },
    {
        //Licenses

        type: "list",
        name: "license",
        message: "Please choose a license.",
        choices: ["L1", "L2", "L3"],
        



    }


]

module.exports = questions