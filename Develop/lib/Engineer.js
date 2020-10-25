// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Require the employee
const Employee = require("./Employee");
// Create engineer
function Engineer(name, id, email, github) {
    // Import employee variables
    Employee.call(this, name, id, email);
    // assign github username
    this.github = github;
    // function to return github username
    this.getGithub = function () {
        return this.github;
    }
    // function to return employee role
    this.getRole = function () {
        return "Engineer";
    }
}
// Assigns the employee methods to the engineer methods
Engineer.prototype = Object.create(Employee.prototype);

// redefines the employee methods to the engineer
Object.defineProperty(Engineer.prototype, 'constructor', {
    value: Engineer,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// export engineer
module.exports = Engineer;