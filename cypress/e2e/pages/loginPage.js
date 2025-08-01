class LoginPage {
  // Getters for locators
  getUsernameField() {
    return "input[placeholder='Username']";
  }
  getPasswordField() {
    return "input[placeholder='Password']";
  }
  getLoginButton() {
    return "button[type='submit']";
  }
  getErrorMessage() {
    return ".oxd-text.oxd-text--p.oxd-alert-content-text";
  }

  // Methods to use the locators
  enterUsername(userName) {
    cy.get(this.getUsernameField()).type(userName, {
      delay: 0,
    });
  }
  enterPassword(password) {
    cy.get(this.getPasswordField()).type(password, {
      delay: 0,
    });
  }
  clickLoginButton() {
    cy.get(this.getLoginButton()).click();
  }

  // Method to perform login
  login(userName, password) {
    console.log("Logging in with:", userName, password);
    this.enterUsername(userName);
    this.enterPassword(password);
    this.clickLoginButton();
  }
  // Method to verify error message
  verifyErrorMessage(expectedMessage) {
    cy.get(this.getErrorMessage())
      .should("be.visible")
      .and("contain.text", expectedMessage);
  }
}

export default LoginPage;
