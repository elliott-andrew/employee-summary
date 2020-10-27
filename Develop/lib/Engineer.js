// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Require the employee
const Employee = require("./Employee");
// Create engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    // function to return github username
    getGithub() {
        return this.github;
    }
    // function to return employee role
    getRole() {
        return "Engineer";
    }
}


// export engineer
module.exports = Engineer;