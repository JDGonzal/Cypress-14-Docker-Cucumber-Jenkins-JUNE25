/// <reference types="cypress" />

// import AdminPage from "../pageObjects/adminPage"; // Sugested import
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import SettingsPage from "./pages/settingsPage";

describe("POM Implementation", () => {
  let data = {};
  let itCanLogout = true;

  const landingPage = new LandingPage();
  const homePage = new HomePage();
  const settingsPage = new SettingsPage();
  const loginPage = new LoginPage();

  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  
  });

  beforeEach(() => {
    cy.log("Running Before each test")
    // Load the fixture before all test
    cy.fixture("orange-rhm").then((orange) => {
      data = orange;
    });
    
  });

  it("Login and navigate to Admin tab", () => {
    itCanLogout = true;
    // Login using POM
    landingPage.visitLoginPage();
    loginPage.login(data?.userName, data?.password);
    // Navigate to Admin tab using POM
    homePage.navigateToAdmin();
  });

  it("Login with wrong credentials", () => {
    itCanLogout = false;
    // Login with wrong credentials using POM
    landingPage.visitLoginPage()
    loginPage.login(data?.userName, data?.wrongPassword);
    // Verify error message using POM
    loginPage.verifyErrorMessage("Invalid credentials");
  });

  afterEach(async () => {
    if (await !itCanLogout) {
      cy.log("Skipping logout due to failed login");
      return; // Skip logout if login was unsuccessful
    } else {
      // Log out using POM
      await settingsPage.clickLogoutSelector();
      await settingsPage.clickLogoutLink();
    }
  });

  after(() => {
    cy.clearCookies();
  });
});
