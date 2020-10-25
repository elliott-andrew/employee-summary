// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Require the employee
const Employee = require("./Employee");
// create intern
function Intern(name, id, email, school) {
    // import the employee variables
    Employee.call(this, name, id, email);
    // assign the school
    this.school = school;
    // function to return the school
    this.getSchool = function () {
        return this.school;
    }
    // function to return the role
    this.getRole = function () {
        return "Intern"
    }
}
// assign the employee methods to the intern
Intern.prototype = Object.create(Employee.prototype);
// redefines the employee methods to the intern
Object.defineProperty(Intern.prototype, 'constructor', {
    value: Intern,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});
// export intern
module.exports = Intern;