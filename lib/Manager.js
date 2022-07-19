const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

// const danManager = new Manager('Dan', 1, 'dansmith@email.com', 1);

// console.log(danManager.getName());
// console.log(danManager.getId());
// console.log(danManager.getEmail());
// console.log(danManager.getOfficeNumber());
// console.log(danManager.getRole());

module.exports = Manager;