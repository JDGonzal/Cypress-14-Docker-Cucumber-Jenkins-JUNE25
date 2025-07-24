/// <reference types="cypress" />

describe("Hooks Implementation", () => {
  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  });

  beforeEach(() => {
    // Visit the OrangeHRM login page before each test
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // Login again before the next test
    cy.get("input[placeholder='Username']").type("Admin", { delay: 0 });
    cy.get("input[placeholder='Password']").type("admin123", { delay: 0 });
    cy.get("button[type='submit']").click();
  });

  it("Search in Admin Tab with Username", () => {
    // Navigate to Admin tab and search for a user
    cy.get(".oxd-sidepanel-body").contains("Admin").click();
    // cy.contains("Admin").click();
    // Search for a user
    cy.xpath(
      "//div[@class='oxd-input-group oxd-input-field-bottom-space']" +
        "//div//input[@class='oxd-input oxd-input--active']"
    ).type("Admin", { delay: 0 });
    // Click the search button
    cy.get("button[type='submit']").click();
  });

  it("Search in Admin Tab with Emplyee Name", () => {
    // Navigate to Admin tab and search for a user
    cy.get(".oxd-sidepanel-body").contains("Admin").click();
    // Search for an employee name
    cy.xpath("//input[@placeholder='Type for hints...']").type("Joy Smith", {
      delay: 0,
    });
    // Click the search button
    cy.get("button[type='submit']").click();
  });

  afterEach(() => {
    // Log out after each test
    cy.get(".oxd-userdropdown-name").click();
    cy.xpath("//a[normalize-space()='Logout']").click();
  });

  after(() => {
    cy.clearCookies();
  });
});
