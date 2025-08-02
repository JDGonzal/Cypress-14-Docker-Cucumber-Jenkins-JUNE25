/// <reference types="cypress" />

class BasePage {
  // Common method to navigate
  navigateTo(url) {
    cy.visit(url);
  }

  // Common method for element clicking
  clickElement(locator, getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        cy.contains(locator).click();
        break;
      case "x":
        cy.xpath(locator).click();
        break;
      default:
        cy.get(locator).click();
        break;
    }
  }

  // Common method for entering text
  fillText(locator, value = "", getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        cy.contains(locator).type(value, { delay: 0 });
        break;
      case "x":
        cy.xpath(locator).type(value, { delay: 0 });
        break;
      default:
        cy.get(locator).type(value, { delay: 0 });
        break;
    }
  }

  // Common method to retrieve text from an element
  getElementText(locator, getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        return cy.contains(locator).getElementText("text");
        break;
      case "x":
        return cy.xpath(locator).getElementText("text");
        break;
      default:
        return cy.get(locator).getElementText("text");
        break;
    }
  }

  // Common method to wait for an element to be visible
  waitForElementVisible(locator, getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        cy.contains(locator).should("be.visible");
        break;
      case "x":
        cy.xpath(locator).should("be.visible");
        break;
      default:
        cy.get(locator).should("be.visible");
        break;
    }
  }

  // Common method to assert if an element to be visible
  isElementVisible(locator, getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        return cy.contains(locator).should("be.visible");
        break;
      case "x":
        return cy.xpath(locator).should("be.visible");
        break;
      default:
        return cy.get(locator).should("be.visible");
        break;
    }
  }

  // Common method to assert if an element to be visible and expected text
  isElementVisibleAndExpected(locator, expectedText, getTheDOM = "g") {
    switch (getTheDOM) {
      case "c":
        return cy
          .contains(locator)
          .should("be.visible")
          .and("contain.text", expectedText);
        break;
      case "x":
        return cy
          .xpath(locator)
          .should("be.visible")
          .and("contain.text", expectedText);
        break;
      default:
        return cy
          .get(locator)
          .should("be.visible")
          .and("contain.text", expectedText);
        break;
    }
  }
}

export default BasePage;
