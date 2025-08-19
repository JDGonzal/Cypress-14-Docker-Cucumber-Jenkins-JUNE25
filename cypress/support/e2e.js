// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
// Import mochawesome Context
import addContext from "mochawesome/addContext";
// Importing cypress-xpath for XPath support
import "cypress-xpath";

// Call Cypress.on with parameters 'test:after:run' and a callback function
Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotFilePath = `assets/${Cypress.spec.name}/${screenshotFileName}`;
    addContext({ test }, screenshotFilePath);
  }
});
