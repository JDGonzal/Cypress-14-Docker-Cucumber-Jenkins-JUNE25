class LandingPage {
  // Getters for locators
  getLoginText() {
    return ".oxd-text.oxd-text--h5.orangehrm-login-title"; // locator for the Login text
  }
  getURL() {
    return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"; // URL for the login page
  }

  // Methods to use the locators
  shouldLoginText() {
    cy.get(this.getLoginText()).should("be.visible")
  }
  visitLoginPage() {
    cy.visit(this.getURL());
    this.shouldLoginText();
  }
}

export default LandingPage;
