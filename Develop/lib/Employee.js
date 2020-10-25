// TODO: Write code to define and export the Employee class
// Create Employee 
function Employee(name, id, email) {
    // assign name
    this.name = name;
    // assign id number
    this.id = id;
    // assign email
    this.email = email;
    // function to return name
    this.getName = function () {
        return this.name
    }
    // function to return id number
    this.getId = function () {
        return this.id;
    }
    // function to return email address
    this.getEmail = function () {
        return this.email;
    }
    // function to return role
    this.getRole = function () {
        return "Employee"
    }
}

// export Employee
module.exports = Employee;