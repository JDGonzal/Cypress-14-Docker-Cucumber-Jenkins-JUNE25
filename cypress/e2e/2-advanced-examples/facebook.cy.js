/// <reference types="cypress" />

context("Actions", () => {
  // beforeEach(() => {
  //   cy.visit('https://example.cypress.io/commands/actions')
  // })

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    cy.visit("https://facebook.com");
    cy.get("#email");
  });
});
