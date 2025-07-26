/// <reference types="cypress" />

// Importing the neat-csv library to read CSV files
import neatCSV from "neat-csv";

describe("CSV Implementation", () => {
  let isGood = true;
  let table = {};

  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
    console.log("Running before all tests");
  });

  beforeEach(() => {
    // Read the CSV file using neatCsv using a fixture
    cy.fixture("orange-rhm.csv")
      .then(neatCSV)
      .then((data) => {
        table = data;
        console.log("CSV Data:", table);
      });
    
    // Visit the OrangeHRM login page before each test
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  const login = (isGood) => {
    // Login again before the next test
    cy.get("input[placeholder='Username']").type(table[0]?.username, {
      delay: 0,
    });
    if (isGood) {
      cy.get("input[placeholder='Password']").type(table[0]?.password, {
        delay: 0,
      });
    } else {
      cy.get("input[placeholder='Password']").type(table[1]?.password, {
        delay: 0,
      });
    }
    cy.get("button[type='submit']").click();
  };

  it("Just Login correctly", () => {
    isGood = true;
    // Login before the test
    login(isGood);
    // Navigate to Admin tab and search for a user
    cy.get(".oxd-sidepanel-body").contains("Admin").click();
  });

  it("Just Login wrong", () => {
    isGood = false;
    // Login with wrong credentials
    login(isGood);
    // Get the error message
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });

  afterEach(() => {
    if (isGood) {
      // Log out after each test if isGood is true
      cy.get(".oxd-userdropdown-name").click();
      cy.xpath("//a[normalize-space()='Logout']").click();
    }
  });

  after(() => {
    cy.clearCookies();
  });
});
