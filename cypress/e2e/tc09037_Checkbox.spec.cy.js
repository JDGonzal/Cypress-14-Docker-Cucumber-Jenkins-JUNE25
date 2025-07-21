/// <reference types="cypress" />

describe("Checkbox functionality", () => {
  it("Handling different check boxes", () => {
        // Visit the page with checkbox
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/");
  
    // Basic Checkbox
    cy.get("#checkbox-v-2a").should("not.be.checked").check({force: true}).should("be.checked");
    cy.get("#checkbox-v-2c").should("not.be.checked").check({force: true}).should("be.checked");
  });
});
