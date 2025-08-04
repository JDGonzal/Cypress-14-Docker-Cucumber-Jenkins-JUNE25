import BasePage from "./base.page";
import landingPage from "./landing.page";

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
    this.clickElement(this.getLogoutSelector());
    return this;
  }
  clickLogoutLink() {
    this.clickElement(this.getLogoutLink(), "x");
    return this;
  }

  logout() {
    this.clickLogoutSelector().clickLogoutLink();
    return landingPage;
  }
}

const settingsPage = new SettingsPage();
export default settingsPage;
