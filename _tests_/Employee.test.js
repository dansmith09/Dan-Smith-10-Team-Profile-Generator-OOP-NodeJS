const Employee = require('../lib/Employee');

describe('Employee class', () => {
    // Test if class is created as expected
    it('Creates new employee with correct values', () => {
        const employeeName = 'Employee';
        const employeeID = 1;
        const employeeEmail = 'employee@team.com';
        const employee = new Employee(employeeName, employeeID, employeeEmail);
        expect(employee.name).toEqual('Employee');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('employee@team.com');
    });
    // Test if getName returns correct role
    describe("Employee", () => {
        const employeeName = 'Employee';
        const employeeID = 1;
        const employeeEmail = 'employee@team.com';
        const employee = new Employee(employeeName, employeeID, employeeEmail);
        const getNameSpy = jest.spyOn(employee, "getName")
        describe(".getName", () => {
            test("Returns correct name with getName()", () => {
                expect(employee.getName()).toBe(employee.name)
            })
        })
    })
    // Test if getId returns correct role
    describe("Employee", () => {
        const employeeName = 'Employee';
        const employeeID = 1;
        const employeeEmail = 'employee@team.com';
        const employee = new Employee(employeeName, employeeID, employeeEmail);
        const getIdSpy = jest.spyOn(employee, "getId")
        describe(".getId", () => {
            test("Returns correct ID with getId()", () => {
                expect(employee.getId()).toBe(employee.id)
            })
        })
    })
    // Test if getEmail returns correct role
    describe("Employee", () => {
        const employeeName = 'Employee';
        const employeeID = 1;
        const employeeEmail = 'employee@team.com';
        const employee = new Employee(employeeName, employeeID, employeeEmail);
        const getEmailSpy = jest.spyOn(employee, "getEmail")
        describe(".getEmail", () => {
            test("Returns correct email with getEmail()", () => {
                expect(employee.getEmail()).toBe(employee.email)
            })
        })
    })
    // Test if getRole returns correct role
    describe("Employee", () => {
        const employee = new Employee();
        const getRoleSpy = jest.spyOn(employee, "getRole")
        describe(".getRole", () => {
            test("Returns correct role with getRole()", () => {
                expect(employee.getRole()).toBe('Employee')
            })
        })
    })
});
  