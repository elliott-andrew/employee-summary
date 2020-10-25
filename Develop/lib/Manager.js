// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// require the employee
const Employee = require("./Employee");
// create manager
function Manager(name, id, email, officeNumber) {
    // import employee variables
    Employee.call(this, name, id, email);
    // assign the office number
    this.officeNumber = officeNumber;
    // function to return the office number
    this.getOfficeNumber = function () {
        return this.officeNumber;
    }
    // function to return employee role
    this.getRole = function () {
        return "Manager";
    }
}
// Assigns the employee methods to the manager methods
Manager.prototype = Object.create(Employee.prototype);
// redefines the employee methods to the manager
Object.defineProperty(Manager.prototype, 'constructor', {
    value: Manager,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});
// export manager
module.exports = Manager;