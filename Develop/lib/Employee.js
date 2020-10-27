// TODO: Write code to define and export the Employee class
// Create Employee 
class Employee {
    constructor(name, id, email) {
        // assign name
        this.name = name;
        // assign id number
        this.id = id;
        // assign email
        this.email = email;
    }
    // function to return name
    getName() {
        return this.name
    }
    // function to return id number
    getId() {
        return this.id;
    }
    // function to return email address
    getEmail() {
        return this.email;
    }
    // function to return role
    getRole() {
        return "Employee"
    }
}

// export Employee
module.exports = Employee;