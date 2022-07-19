// Import Classes
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');


const HTMLArray = [];

const concatenateHTMLArray = (data) => {
    let employeeClass;
    let employeeClassType;
    if (data.officeNumber) {
        employeeClassType = 'Manager';
        employeeClass = new Manager(data.name, data.id, data.email, data.officeNumber);   
    } else if (data.github) {
        employeeClassType = 'Engineer';
        employeeClass = new Engineer(data.name, data.id, data.email, data.github); 
    } else {
        employeeClassType = 'Intern';
        employeeClass = new Intern(data.name, data.id, data.email, data.school); 
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
            <div class="changeDependingOnType">
            </div>
        </div>
    </div>`;
}


module.exports = concatenateHTMLArray;