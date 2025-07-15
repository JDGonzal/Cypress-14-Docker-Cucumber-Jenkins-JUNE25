const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true, // Enable video recording
    videosFolder: "cypress/e2e/videos", // Specify the folder for videos
  },
});
