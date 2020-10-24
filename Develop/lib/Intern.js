// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.getSchool = function () {
        return this.school;
    }
    this.getRole = function () {
        return "Intern"
    }
}

Intern.prototype = Object.create(Employee.prototype);

Object.defineProperty(Intern.prototype, 'constructor', {
    value: Intern,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// let bob = new Intern(2, "bob@company", "columbia")
// console.log(bob);

module.exports = Intern;