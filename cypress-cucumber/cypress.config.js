const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber()); // Integrate Cucumber preprocessor
    },
    video: true, // Enable video recording
    videosFolder: 'cypress/e2e/videos', // Specify the folder for videos
    specPattern: 'cypress/e2e/**/*.feature', // Use .feature files for specs
    // specPattern: "cypress/e2e/cucumber/feature/*.feature", // Alternative pattern
  },
});
