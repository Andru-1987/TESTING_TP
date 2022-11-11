const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  
  e2e: {
    // baseUrl: "http://localhost:9000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
