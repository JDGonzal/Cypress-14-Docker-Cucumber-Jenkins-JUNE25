import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^User open the OrangeHRM login page$/, () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

When(/^User enters valid username and password$/, () => {
  cy.get('input[name="username"]').type("Admin", { delay: 0 });
  cy.get('input[name="password"]').type("admin123", { delay: 0 });
});

When(/^User clicks on the login button$/, () => {
  cy.get('button[type="submit"]').click();
});

Then(/^User should be logged in successfully$/, () => {
  cy.url().should("include", "/dashboard");
  cy.contains("Dashboard").should("be.visible");
  cy.get(".oxd-sidepanel-body").contains("Admin").click();
});

When(/^User clicks on the userdropdown-name link$/, () => {
  cy.get(".oxd-userdropdown-name").click();
});

When(/^User clicks on the logout link$/, () => {
  // cy.xpath("//a[normalize-space()='Logout']").click(); Aquí no funciona el `xpath`
  cy.get('a[href="/web/index.php/auth/logout"]').click();
});

Then(/^User should be logged out successfully$/, () => {
  cy.url().should("include", "/auth/login");
  cy.contains("Login").should("be.visible");
});
