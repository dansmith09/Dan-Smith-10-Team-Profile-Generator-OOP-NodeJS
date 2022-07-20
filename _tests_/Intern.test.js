const Intern = require('../lib/Intern');

describe('Intern class', () => {
    // Test if class is created as expected
    it('Creates new intern with correct values', () => {
        const internName = 'intern';
        const internID = 3;
        const internEmail = 'intern@team.com';
        const internSchool = 'school'
        const intern = new Intern(internName, internID, internEmail, internSchool);
        expect(intern.name).toEqual('intern');
        expect(intern.id).toEqual(3);
        expect(intern.email).toEqual('intern@team.com');
        expect(intern.school).toEqual('school');
    });
    // Test if getSchool returns correct school
    describe("Intern", () => {
        const intern = new Intern();
        const getSchoolSpy = jest.spyOn(intern, "getSchool")
        describe(".getSchool", () => {
            test("Returns correct school with getSchool()", () => {
                expect(intern.getSchool()).toBe(intern.school)
            })
        })
    })
    // Test if getRole returns correct role
    describe("Intern", () => {
        const intern = new Intern();
        const getRoleSpy = jest.spyOn(intern, "getRole")
        describe(".getRole", () => {
            test("Returns correct role with getRole()", () => {
                expect(intern.getRole()).toBe('Intern')
            })
        })
    })
});