import BasePage from "./base.page";
import settingsPage from "./settings.page";

class HomePage extends BasePage {
  // Getters for locators
  getAdminTab() {
    return "Admin";
  }

  getErrorMessage() { // from login.page.js
    return ".oxd-text.oxd-text--p.oxd-alert-content-text";
  }

  // Methods to use the locators
  shouldSeeAdminTab() {
    console.log("See ", this.getAdminTab());
    this.isElementVisible(this.getAdminTab, "c");
    return this;
  }
  verifyErrorMessage(expectedMessage) { // from login.page.js
    this.isElementVisibleAndExpected(this.getErrorMessage(), expectedMessage);
    return this;
  }
  navigateToAdmin(expectedMessage) {
    if (expectedMessage) {
      this.verifyErrorMessage(expectedMessage);
    } else {
      this.shouldSeeAdminTab;
    }
    return settingsPage;
  }
  _home(){
    return settingsPage;
  }
}

const homePage = new HomePage();
export default homePage;
