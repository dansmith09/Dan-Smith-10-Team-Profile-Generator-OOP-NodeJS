// Import Classes
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');


const HTMLArray = [];

const concatenateHTMLArray = (data) => {
    let employeeClass;
    let extraInfo;
    if (data.officeNumber) {
        employeeClass = new Manager(data.name, data.id, data.email, data.officeNumber);   
    } else if (data.github) {
        employeeClass = new Engineer(data.name, data.id, data.email, data.github); 
    } else {
        employeeClass = new Intern(data.name, data.id, data.email, data.school); 
        employeeClassType = 'Intern';
    }

    return `
    <div class="employeeContainer">
        <div class="employeeHeader">
            <h2>${employeeClass.name}</h2>
            <h3>${employeeClass.getRole()}</h3>
        </div>
        <div class="employeeBody">
            <div class="employeeID">
                <p>ID: ${employeeClass.id}</p>
            </div>
            <div class="employeeEmail">
                <p>Email: <a href="${employeeClass.email}">${employeeClass.email}</a></p>
            </div>
            <div class="">
            </div>
        </div>
    </div>`;
}


module.exports = concatenateHTMLArray;