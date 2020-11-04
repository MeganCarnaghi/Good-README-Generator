// Creating the variables
const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown");
const readMe = "README.md";


// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },

    {
        type: "input",
        message:"Please provide a description of your project.",
        name: "description",
    },

    {
        type: "input",
        message: "Please provide installation instructions for your project.",
        name: "installation",
    },

    {
        type: "input",
        message: "Please provide usage information for your project.",
        name: "usage",
    
    },

    {
        type: "input",
        message: "Please provide contribution guidelines for your project.",
        name: "contributing",
    },

    {
        type: "input",
        message: "Please provide testing instructions for your project.",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license should your project have?",
        name: "license",
        choices: [
            "GPL",
            "ISC",
            "MIT"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(readMe, data) {
    const userData = generateMD(data);
    fs.writeFile(readMe, userData, function(err) {
        if(err) {
            throw err
        } else {
            console.log("You have successfully created a new README.md file.")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => writeToFile(readMe, response));

}

// function call to initialize program
init();
