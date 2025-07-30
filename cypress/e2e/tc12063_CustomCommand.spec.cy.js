/// <reference types="cypress" />

describe("Custom Command Implementation", () => {
  let data = {};
  let itCanLogout = true;

  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  });

  beforeEach(() => {
    // Fixture: Load the fixture before each test
    // cy.fixture("orange-rhm").as("data"); // Not work
    cy.fixture("orange-rhm").then((orange) => {
      data = orange;
    });

    // It does't work with the command
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
  });

  it("Just Login correctly", () => {
    itCanLogout = true;
    // Login before the test
    cy.orangehrmlogin(data?.userName, data?.password);
    // Navigate to Admin tab and search for a user
    cy.get(".oxd-sidepanel-body").contains("Admin").click();
  });

  it("Just Login wrong", () => {
    itCanLogout = false;
    // Login with wrong credentials
    cy.orangehrmlogin(data?.userName, data?.wrongPassword);
    // Get the error message
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });

  afterEach(async () => {
    if (!itCanLogout) {
      cy.log("Skipping logout due to failed login");
      return; // Skip logout if login was unsuccessful
    } else {
      // Log out after each test if isGood is true
      cy.get(".oxd-userdropdown-name").should("be.visible").click();
      cy.xpath("//a[normalize-space()='Logout']").should("be.visible").click();
    }
  });

  after(() => {
    cy.clearCookies();
  });
});
