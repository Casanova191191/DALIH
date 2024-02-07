const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j8gum3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
