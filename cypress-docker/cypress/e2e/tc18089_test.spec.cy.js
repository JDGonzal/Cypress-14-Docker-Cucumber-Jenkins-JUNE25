/// <reference types="cypress" />


describe("Login functionality", () => {
  it("Login Test using Conduit site", () => {
    cy.visit("https://react-redux.realworld.io/");

    cy.get("a[href='#login']").click();
    // Next page should have the login form
    cy.url().should("include", "/login");

    // Fill in the login form
    cy.get("input[placeholder='Email']").type("cypressdemo@gmail.com", {
      delay: 0,
    });
    cy.get("input[placeholder='Password']").type("cypressdemo", {
      delay: 0,
    });
    // Submit the form
    cy.get("button[type='submit']").click();
    // Check for error message
    cy.get("button[type='submit']").should("be.disabled");
  });
});
