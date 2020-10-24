// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Engineer(idNumber, email, gitHub) {
    Employee.call(this, idNumber, email);
    this.gitHub = gitHub;
}

Engineer.prototype = Object.create(Employee.prototype);

Object.defineProperty(Engineer.prototype, 'constructor', {
    value: Engineer,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// let bob = new Engineer(2, "bob@company", "bobgit")
// console.log(bob)

module.exports = Engineer;