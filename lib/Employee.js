// Unsure why this is here but going to leave it just in case?
const { test } = require("picomatch");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

// const dan = new Employee('Dan', 1, 'dansmith@email.com');

// console.log(dan.getName());
// console.log(dan.getId());
// console.log(dan.getEmail());
// console.log(dan.getRole());

module.exports = Employee;