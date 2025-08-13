import BasePage from "./base.page";
import loginPage from "./login.page";

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
    this.isElementVisible(this.getLoginText());
  }
  visitLoginPage() {
    this.navigateTo(this.getURL());
    this.shouldLoginText();
    return loginPage;
  }

  _landing(){
    return loginPage;
  }
}

const landingPage = new LandingPage();
export default landingPage;
