const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}

// const danEngineer = new Engineer('Dan', 1, 'dansmith@email.com', 'dansmith09');

// console.log(danEngineer.getName());
// console.log(danEngineer.getId());
// console.log(danEngineer.getEmail());
// console.log(danEngineer.getGitHub());
// console.log(danEngineer.getRole());

module.exports = Engineer;