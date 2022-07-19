// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json           

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// Make employee class DONE
// Create Manager, Engineer and Intern classes that extend the employee class DONE
// Make function that starts the prompting DONE


// Import Classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Import packages
const inquirer = require('inquirer');
const fs = require('fs');
const { data } = require('browserslist');
const concatenateHTMLArray = require('./dist/concatenateHTMLArray');

const initialPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your team\'s name?",
            name: 'name',
        },
    ]).then((data) => {
        fs.writeFileSync(`team.html`,concatenateHTMLArray(data));
        managerPromt();
    })
};


const managerPromt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter Team Information:\nWhat is the team manager\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
    ]).then((data) => {
        fs.writeFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};

const teamMemberPromt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'teamMember',
            choices: ['Engineer', 'Intern', 'I don\'t want to add anymore team members']
        },
    ]).then((data) => {
        if(data.teamMember === 'Engineer') {
            engineerPrompt();
        } else if (data.teamMember === 'Intern') {
            internPrompt();
        } else {
            // generate HTML
            return;
        }
    })
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
        },
    ]).then((data) => {
        fs.appendFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What school did the intern attend?",
            name: 'school',
        },
    ]).then((data) => {
        fs.appendFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};

const init = () => {
    initialPrompt();
};

init();