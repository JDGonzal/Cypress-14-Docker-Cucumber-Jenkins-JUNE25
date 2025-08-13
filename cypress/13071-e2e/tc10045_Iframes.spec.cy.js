/// <reference types="cypress" />

describe("Handling Iframes", () => {
  beforeEach(() => {
    // Visit the page with tables
    cy.visit("https://the-internet.herokuapp.com/iframe");
  });

  it("Iframes", () => {
    // Close the tox-notification, using button with class 'tox-notification__dismiss'
    cy.get(".tox-notification__dismiss").click();
    // Get the iframe body
    // cy.get("#mce_0_ifr").within(($iframe) => {
    //   // Get the contents
    //   const element = $iframe.contents().find("#tinymce");
    //   // Clear the content of the iframe
    //   cy.wrap(element).clear();
    //   // Type text into the iframe
    //   cy.wrap(element).type("You content goes here");
    // });
    // Verify the element exists in the iframe
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      console.log("element: ", $body);
      // Verify it is empty
      cy.wrap($body).should("be.exist");
    });
  });
});
