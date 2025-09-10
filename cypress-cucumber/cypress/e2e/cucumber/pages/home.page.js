import BasePage from './base.page';
import settingsPage from './settings.page';

class HomePage extends BasePage {
  // Getters for locators
  getAdmin() {
    return 'Admin';
  }

  getErrorMessage() {
    // from login.page.js
    return '.oxd-text.oxd-text--p.oxd-alert-content-text';
  }

  getDashboardUrl(){
    return '/dashboard';
  }

  getLoginUrl() {
    return '/auth/login';
  }

  getDashboard(){
    return 'Dashboard';
  }

  getLogin() {
    return 'Login';
  }

  getSidePanelBody() {
    return '.oxd-sidepanel-body';
  }

  // Methods to use the locators
  shouldSeeAdminTab() {
    console.log('See ', this.getAdmin());
    this.isElementVisible(this.getAdmin(), 'c');
    return this;
  }

  verifyErrorMessage(expectedMessage) {
    // from login.page.js
    this.isElementVisibleAndExpected(this.getErrorMessage(), expectedMessage);
    return this;
  }

  verifyDashboardUrl() {
    this.verifyUrl(this.getDashboardUrl());
    return this;
  }

  verfifiyLoginUrl() {
    this.verifyUrl(this.getLoginUrl());
    return this;
  }

  verifyDashboardText() {
    this.isElementVisible(this.getDashboard(), 'c');
    return this;
  }

  verifyLoginText() {
    this.isElementVisible(this.getLogin(), 'c');
    return this;
  }

  clickAdminTab() {
    this.isElementVisible(this.getSidePanelBody(), 'g').contains(this.getAdmin()).click();
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

  _home() {
    return settingsPage;
  }
}

const homePage = new HomePage();
export default homePage;
