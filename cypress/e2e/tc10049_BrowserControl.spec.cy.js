/// <reference types="cypress" />

describe("Handling Browser Controls", () => {
  it("Handling Browser Controls", async () => {
    // Visit the Conduit application
    await cy.visit("https://react-redux.realworld.io/");
    // Verify it contains `Sign in`
    cy.contains("Sign in").should("be.visible").click();
    // Back to previous page
    cy.go("back");
    // Go forward to the next page
    cy.go("forward");
    // Go back with numbers
    cy.go(-1);
    // Go forward with numbers
    cy.go(1);
    // Verify the URL
    cy.url().should("include", "login");
    // Verify the title
    cy.title().should("include", "Conduit");
    // Reload the page
    cy.reload();
  });
});
