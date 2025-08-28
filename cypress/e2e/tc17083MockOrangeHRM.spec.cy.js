/// <reference types="cypress" />

describe("Mock OrangeHRM Testing", () => {
  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  });

  beforeEach(() => {
    // Visit the OrangeHRM login page before each test
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/" // auth/login
    );
    cy.get("input[name='username']").should("be.visible");
    // Login again before the next test
    cy.get("input[name='username']").type("Admin", { delay: 0 });
    cy.get("input[name='password']").type("admin123", { delay: 0 });
    cy.get("button[type='submit']").click();
  });

  it("locations Mock", () => {
    // const url = "api/v2/dashboard/employees/locations";
    const url =
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations";
    cy.log(url);
    // Intercept instead a request, for a _Mock_ values
    cy.intercept(
      {
        method: "GET",
        url: url,
      },
      { fixture: "mock-locations.json" }
    );
    cy.wait(2500);
    cy.contains("Employee Distribution by Location").should("be.visible");
    // El siguiente proceso lo debo hacer porque existen muchos elementos con la misma clase 
    cy.get(".orangehrm-dashboard-widget-body").then(($elements) => {
      // $elements is a jQuery object containing all elements with the class 'my-class'
      // You can treat it like an array and iterate over it or access elements by index.

      // Example: Log the text of each element
      $elements.each((index, element) => {
        cy.log(`Element ${index + 1}: ${Cypress.$(element).text()}`);
      });

      // Example: Assert the number of elements
      expect($elements).to.have.length(6);

      // Necesito el quinto elemento que es el de `locations`
      cy.wrap($elements.eq(5))
        .should("contain", "Texas R&D")
        .and("contain", "New York Sales Office")
        .and("contain", "Medellin");
    });
  });

  afterEach(() => {
    // cy.delay(2500);
    // // Log out after each test
    // cy.get(".oxd-userdropdown-name").click();
    // cy.xpath("//a[normalize-space()='Logout']").click();
  });
});
