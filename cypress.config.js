const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  pageLoadTimeout: 10000,
  viewportWidth: 1536,
  viewportHeight: 960,
  env: {
    baseUrl: 'https://www.saucedemo.com/'
  },
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})
