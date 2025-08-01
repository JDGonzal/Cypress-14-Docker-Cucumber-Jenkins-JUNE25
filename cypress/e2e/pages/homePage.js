class HomePage {
  // Getters for locators
  getAdminTab() {
    return "Admin";
  }
  getPIMTab() {
    return "//span[normalize-space()='PIM']";
  }
  getLeaveTab() {
    return "Leave";
  }
  getDashboardTab() {
    return "Dashboard";
  }

  // Methods to use the locators
  shouldSeeAdminTab() {
    console.log("See ",this.getAdminTab());
    cy.contains(this.getAdminTab());
  }
  shouldSeePIMTab() {
    console.log("see ", this.getPIMTab());
    cy.xpath(this.getPIMTab()).should("be.visible");
  }
  shouldSeeLeaveTab() {
    console.log("see ",this.getLeaveTab());
    cy.contains(this.getLeaveTab());
  }
  shouldSeeDashboardTab() {
    cy.contains(this.getDashboardTab());
  }

  // Method to navigate to Admin tab
  navigateToAdmin() {
    this.shouldSeeAdminTab;
    // this.shouldSeePIMTab();
    // this.shouldSeeLeaveTab();
    // this.shouldSeeDashboardTab();
  }
}

export default HomePage;
