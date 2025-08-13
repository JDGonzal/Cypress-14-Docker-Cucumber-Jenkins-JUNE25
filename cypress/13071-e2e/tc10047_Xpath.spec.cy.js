/// <reference types="cypress" />

describe("xPath functionality", () => {
  it("Login Test using Conduit site by Xpath locators", async() => {
    await cy.visit("https://react-redux.realworld.io/");
    // cy.get("#email").should("be.visible");
    // cy.get("a[href='#login']").click();
    await cy.xpath("//a[normalize-space()='Sign in']").click(); 
    // Next page should have the login form
    await cy.url().should("include", "/login");

    // Fill in the email
    // cy.get("input[placeholder='Email']").type("cypressdemo@gmail.com", {
    //   delay: 0,
    // });
    await cy.xpath("//input[@placeholder='Email']").type("cypressdemo@gmail.com", {
      delay: 0,
    });
    // Fill in the password
    // cy.get("input[placeholder='Password']").type("cypressdemo", {
    //   delay: 0,
    // });
    await cy.xpath("//input[@placeholder='Password']").type("cypressdemo", {
      delay: 0,
    });
    // Submit the form
    // cy.get("button[type='submit']").click();
    await cy.xpath("//button[normalize-space()='Sign in']").click();
    // Check for error message
    // cy.get("button[type='submit']").should("be.disabled");
    await cy.xpath("//button[normalize-space()='Sign in']").should("be.disabled");
  });
});
