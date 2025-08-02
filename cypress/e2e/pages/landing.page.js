import BasePage from "./base.page";

class LandingPage extends BasePage {
  // Getters for locators
  getLoginText() {
    return ".oxd-text.oxd-text--h5.orangehrm-login-title"; // locator for the Login text
  }
  getURL() {
    return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"; // URL for the login page
  }

  // Methods to use the locators
  shouldLoginText() {
    // cy.get(this.getLoginText()).should("be.visible");
    this.isElementVisible(this.getLoginText());
  }
  visitLoginPage() {
    // cy.visit(this.getURL());
    this.navigateTo(this.getURL());
    this.shouldLoginText();
  }
}

export default LandingPage;
