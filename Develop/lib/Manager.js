// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// require the employee
const Employee = require("./Employee");
// create manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    // function to return the office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // function to return employee role
    getRole() {
        return "Manager";
    }
}

// export manager
module.exports = Manager;