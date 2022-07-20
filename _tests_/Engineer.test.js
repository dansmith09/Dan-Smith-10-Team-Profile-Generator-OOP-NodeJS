const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    // Test if class is created as expected
    it('Creates new Engineer with correct values', () => {
        const engineerName = 'Engineer';
        const engineerID = 2;
        const engineerGitHub = 'engineer';
        const engineerEmail = 'engineer@team.com';
        const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
        expect(engineer.name).toEqual('Engineer');
        expect(engineer.id).toEqual(2);
        expect(engineer.gitHub).toEqual('engineer');
        expect(engineer.email).toEqual('engineer@team.com');
    });
    // Test if getGitHub returns correct GitHub
    describe("Engineer", () => {
        const engineer = new Engineer();
        const getGitHubSpy = jest.spyOn(engineer, "getGitHub")
        describe(".getGitHub", () => {
            test("Returns correct GitHub with getGitHub()", () => {
                expect(engineer.getGitHub()).toBe(this.gitHub)
            })
        })
    })
    // Test if getRole returns correct role
    describe("Engineer", () => {
        const engineer = new Engineer();
        const getRoleSpy = jest.spyOn(engineer, "getRole")
        describe(".getRole", () => {
            test("Returns correct role with getRole()", () => {
                expect(engineer.getRole()).toBe('Engineer')
            })
        })
    })
});