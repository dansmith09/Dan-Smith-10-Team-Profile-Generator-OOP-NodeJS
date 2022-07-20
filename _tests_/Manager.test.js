const Manager = require('../lib/Manager');

describe('manager class', () => {
    it('Creates new manager with correct values', () => {
        const managerName = 'manager';
        const managerID = 1;
        const managerEmail = 'manager@team.com';
        const officeNumber = 1;
        const manager = new Manager(managerName, managerID, managerEmail, officeNumber);
        expect(manager.name).toEqual('manager');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('manager@team.com');
        expect(manager.officeNumber).toEqual(1);
    });
    // Test if getOfficeNumber returns correct school
    describe("Manager", () => {
        const manager = new Manager();
        const getOfficeNumberSpy = jest.spyOn(manager, "getOfficeNumber")
        describe(".getOfficeNumber", () => {
            test("Returns correct school with getOfficeNumber()", () => {
                expect(manager.getOfficeNumber()).toBe(manager.officeNumber)
            })
        })
    })
    // Test if getRole returns correct role
    describe("Manager", () => {
        const manager = new Manager();
        const getRoleSpy = jest.spyOn(manager, "getRole")
        describe(".getRole", () => {
            test("Returns correct role with getRole()", () => {
                expect(manager.getRole()).toBe('Manager')
            })
        })
    })
});