/// <reference types="cypress" />

describe("Radio Button functionality", () => {
  it("Handling different radio buttons", () => {
    // Visit the page with radio buttons
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");
    
    /* Basic Radio Button */
    // Verify the first button is not checked, to check
    cy.get("#radio-choice-0a").should("not.be.checked").check({force: true});
    // Verify the second button is not checked, to check
    cy.get("#radio-choice-0b").should("not.be.checked").check({force: true});
    // Verify the second button is checked
    cy.get("#radio-choice-0b").should("be.checked");
    // Verify the first button is not checked
    cy.get("#radio-choice-0a").should("not.be.checked");

    /*Horizontal group */
    // Verify the second button is not checked, to check
    cy.get("#radio-choice-h-2b").should("not.be.checked").check({force: true});
    // Verify the third button is not checked, to check
    cy.get("#radio-choice-h-2c").should("not.be.checked").check({force: true});
    // Verify the third button is checked
    cy.get("#radio-choice-h-2c").should("be.checked");
    // Verify the first button is not checked
    cy.get("#radio-choice-h-2a").should("not.be.checked");
  });
});
