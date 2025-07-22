/// <reference types="cypress" />

describe("Handling Different Alerts", () => {
  beforeEach(() => {
    // Visit the page with alerts
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });

  it("Simple Alert", () => {
    // Click on the button to trigger the simple alert
    cy.get("button[onclick='jsAlert()']").click();
    // cy.contains("Click for JS Alert").click(); // Instructor
    // Verify the alert text
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am a JS Alert");
    });
    // Accept the alert
    cy.on("window:confirm", () => true);
    // Verify the result text after accepting the alert
    cy.get("#result").should(
      "contain.text",
      "You successfully clicked an alert"
    );
  });

  it("Confirm Alert - OK Button", () => {
    // Click on the button to trigger the confirm alert
    cy.get("button[onclick='jsConfirm()']").click();
    // cy.contains("Click for JS Confirm").click(); // Instructor
    // Verify the alert text
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am a JS Confirm");
    });
    // Accept the confirm alert
    cy.on("window:confirm", () => true);
    // Verify the result text after accepting the confirm alert
    cy.get("#result").should("contain.text", "You clicked: Ok");
  });

  it("Confirm Alert - Cancel Button", () => {
    // Click on the button to trigger the confirm alert
    cy.get("button[onclick='jsConfirm()']").click();
    // cy.contains("Click for JS Confirm").click(); // Instructor
    // Verify the alert text
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am a JS Confirm");
    });
    // Cancel the confirm alert
    cy.on("window:confirm", () => false);
    // Verify the result text after canceling the confirm alert
    cy.get("#result").should("contain.text", "You clicked: Cancel");
  });

  it("Prompt Alert", () => {
    // Type a message in the prompt and accept it
    cy.window().then((win) => {
      // ! Este se debe poner antes de hacer click
      cy.stub(win, "prompt").returns("Hello, Cypress!");
      // Click on the button to trigger the prompt alert
      cy.get("button[onclick='jsPrompt()']").click();
      
    });
    // Verify the result text after accepting the prompt alert
    cy.get("#result").should("contain.text", "You entered: Hello, Cypress!");
  });

  /* 
  * Este es la propuesta inicial, pero el detalle es el orden
  * de las acciones y la forma en que se manejan los eventos de alerta.
  it("Prompt Alert - Text", () => {
    // Click on the button to trigger the prompt alert
    cy.get("button[onclick='jsPrompt()']").click();
    // Verify the alert text
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am a JS prompt");
    });
    // Type a message in the prompt and accept it
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Hello, Cypress!");
    });
    // Accept the prompt alert
    cy.on("window:confirm", () => true);
    // Verify the result text after accepting the prompt alert
    cy.get("#result").should("contain.text", "You entered: Hello, Cypress!");
  });
  */
});
