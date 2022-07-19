const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

// const danIntern = new Intern('Dan', 1, 'dansmith@email.com', 'harvard');

// console.log(danIntern.getName());
// console.log(danIntern.getId());
// console.log(danIntern.getEmail());
// console.log(danIntern.getSchool());
// console.log(danIntern.getRole());

module.exports = Intern;