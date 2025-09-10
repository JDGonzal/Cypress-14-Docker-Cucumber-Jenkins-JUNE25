import BasePage from "./base.page";
import homePage from "./home.page";

class LoginPage extends BasePage {
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

  // Methods to use the locators
  enterUsername(userName) {
    this.fillText(this.getUsernameField(), userName);
    return this;
  }
  enterPassword(password) {
    this.fillText(this.getPasswordField(), password);
    return this;
  }
  clickLoginButton() {
    this.clickElement(this.getLoginButton());
    return this;
  }
  login(userName, password) {
    console.log("Logging in with:", userName, password);
    this.enterUsername(userName);
    this.enterPassword(password);
    this.clickLoginButton();
    return homePage;
  }

  _login(){
    return homePage;
  }

}

const loginPage = new LoginPage();
export default loginPage;
