class SettingsPage {
  // Getters for locators
  getLogoutSelector() {
    return ".oxd-userdropdown-name";
  }
  getLogoutLink() {
    return "//a[normalize-space()='Logout']";
  }

  // Methods to use the locators
  clickLogoutSelector() {
    cy.get(this.getLogoutSelector()).click();
  }
  clickLogoutLink() {
    cy.xpath(this.getLogoutLink()).click();
  }
}

export default SettingsPage;
