const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress"; // It not work

module.exports = defineConfig({
  projectId: "ci89hj",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "./cypress/reports/mocha",
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins/index.js")(on, config);
    },
    video: true, // Enable video recording
    videosFolder: "cypress/e2e/videos", // Specify the folder for videos
    baseUrl: null, // Set base URL to null
    // baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", // Set base URL to null
  },
});
