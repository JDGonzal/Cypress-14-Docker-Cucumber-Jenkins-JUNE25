import BasePage from "./base.page";

class SettingsPage extends BasePage {
  // Getters for locators
  getLogoutSelector() {
    return ".oxd-userdropdown-name";
  }
  getLogoutLink() {
    return "//a[normalize-space()='Logout']";
  }

  // Methods to use the locators
  clickLogoutSelector() {
    // cy.get(this.getLogoutSelector()).click();
    this.clickElement(this.getLogoutSelector());
  }
  clickLogoutLink() {
    // cy.xpath(this.getLogoutLink()).click();
    this.clickElement(this.getLogoutLink(), "x");
  }
}

const settingsPage = new SettingsPage();
export default settingsPage;
