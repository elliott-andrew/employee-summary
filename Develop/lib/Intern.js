// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Require the employee
const Employee = require("./Employee");
// create intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school;
    }
    // function to return the role
    getRole() {
        return "Intern";
    }
}

// export intern
module.exports = Intern;