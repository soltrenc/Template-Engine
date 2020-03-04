const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const memberArray = [];

const questionsMan = [{
    type: "input",
    name: "name",
    message: "Enter manager's name."
},
{
    type: "input",
    name: "id",
    message: "Enter manager's id."
},
{
    type: "input",
    name: "email",
    message: "Enter manager's email."
},
{
    type: "input",
    name: "officeNumber",
    message: "Enter's manager's office number"
}];

const questionsEmp = [{
    type: "input",
    name: "name",
    message: "Enter employee's name."
},
{
    type: "input",
    name: "id",
    message: "Enter employee's id."
},
{
    type: "input",
    name: "email",
    message: "Enter employee's email."
},
{
    type: "list",
    name: "role",
    message: "Choose employee's role.",
    choices: ["Engineer", "Intern"]
}];

// inquirer.prompt(questionsMan);
async function init() {

    let managerInfo;

    await inquirer.prompt(questionsMan)
        .then(function (answers) {
            const managerEmail = answers.email;
            const managerName = answers.name;
            const managerId = answers.id;
            const managerOffice = answers.officeNumber;
            managerInfo = new Manager(managerName, managerId, managerEmail, managerOffice)
        });

    let employeeInfo;

    console.log(managerInfo);
    await inquirer.prompt(questionsEmp)
        .then(function (answers) {
            const employeeName = answers.name;
            const employeeId = answers.id;
            const employeeEmail = answers.email;
            const employeeRole = answers.role;
            employeeInfo = new Employee(employeeName, employeeId, employeeEmail, employeeRole)
        });
}

init()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// USE INQUIRER PROMPT TO PROMPT THE USER TO GET EACH TEAM MEMBERS INFO

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
