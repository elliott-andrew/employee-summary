const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let allEmployees = [];

const questions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's work email address?",
            name: "email"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employeeType",
        }
    ]).then(function (data) {
        if (data.employeeType === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the managers's office number?",
                    name: "officeNumber"
                }
            ]).then(function (managerData) {
                let newManager = new Manager(data.name, data.id, data.email, managerData.officeNumber);
                allEmployees.push(newManager);
                nextEmployee();
            })
        }
        if (data.employeeType === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "github"
                }
            ]).then(function (engineerData) {
                let newEngineer = new Engineer(data.name, data.id, data.email, engineerData.github);
                allEmployees.push(newEngineer);
                nextEmployee();
            });
        }
        if (data.employeeType === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Which school is the intern attending?",
                    name: "school"
                }
            ]).then(function (internData) {
                let newIntern = new Intern(data.name, data.id, data.email, internData.school);
                allEmployees.push(newIntern);
                nextEmployee();
            })
        }
    })

}

const nextEmployee = () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "add"
        }
    ]).then(function (data) {
        if (data.add === true) {
            questions();
        } else {
            fs.writeFile("team.html", render(allEmployees), function (err) {
                if (err) {
                    return console.log("Please try again.")
                }
            });
            console.log("HTML file successfully created. Thank you!")
        }
    })
}

questions();