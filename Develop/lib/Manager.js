// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

function Manager(id, email, officeNumber) {
    Employee.call(this, id, email);
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);

Object.defineProperty(Manager.prototype, 'constructor', {
    value: Manager,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// let bob = new Manager(2, "bob@company", "3")
// console.log(bob);

module.exports = Manager;