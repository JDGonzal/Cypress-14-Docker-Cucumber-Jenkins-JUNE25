import BasePage from "./base.page";

class HomePage extends BasePage {
  // Getters for locators
  getAdminTab() {
    return "Admin";
  }

  // Methods to use the locators
  shouldSeeAdminTab() {
    console.log("See ", this.getAdminTab());
    // cy.contains(this.getAdminTab).should("be.visible");
    this.isElementVisible(this.getAdminTab, "c");
  }

  // Method to navigate to Admin tab
  navigateToAdmin() {
    this.shouldSeeAdminTab;
  }
}

export default HomePage;
