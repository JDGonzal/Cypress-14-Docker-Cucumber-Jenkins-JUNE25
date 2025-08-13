/// <reference types="cypress" />

describe("Login Functionality", () => {
  it("Login Test using Conduit", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.get("a[href='#logins']").click();
    cy.get("input[placeholder='Email']").type("cypressdemo@gmail.com", {
      delay: 0,
    });
    cy.get("input[placeholder='Password']").type("cypressdemo", { delay: 0 });
    cy.get("button[type='submit']").click();
    cy.get("button[type='submit']").should("be.disabled");
    cy.xpath("//a[normalize-space()='Home']").click();
  });
});
