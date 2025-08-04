/// <reference types="cypress" />

import landingPage from "./pages/landing.page";

describe("POM with Method Chaining", () => {
  let data = {};
  let itCanLogout = true;

  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  });

  beforeEach(() => {
    cy.log("Running Before each test");
    // Load the fixture before all test
    cy.fixture("orange-rhm").then((orange) => {
      data = orange;
    });
  });

  it("Login and navigate to Admin tab", () => {
    itCanLogout = true;
    // Login using POM
    landingPage
      .visitLoginPage()
      .login(data?.userName, data?.password)
      // Navigate to Admin tab using POM
      .navigateToAdmin();
  });

  it("Login with wrong credentials", () => {
    itCanLogout = false;
    // Login with wrong credentials using POM
    landingPage
      .visitLoginPage()
      .login(data?.userName, data?.wrongPassword)
      // Verify error message using POM
      .navigateToAdmin("Invalid credentials");
  });

  afterEach(async () => {
    if (await !itCanLogout) {
      cy.log("Skipping logout due to failed login");
      return; // Skip logout if login was unsuccessful
    } else {
      // Log out using POM
      await landingPage._landing()._login()._home().logout();
    }
  });

  after(() => {
    cy.clearCookies();
  });
});
