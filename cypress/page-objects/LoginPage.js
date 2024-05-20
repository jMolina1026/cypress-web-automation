import * as utility from '../helpers/utilities.js'
const { baseUrl, navigateToApp, clickTheElementButton } = utility

export default class LoginPage {
  constructor () {
    this.username = Cypress.env('USERNAME')
    this.password = Cypress.env('PASSWORD')
    /**
     * CSS selectors
     */
    this.usernameField = 'input#user-name'
    this.passwordField = 'input#password'
    this.loginBtn = 'input#login-button'
    this.headerLogo = 'div.app_logo'
    this.errorMessageBox = 'h3[data-test="error"]'
    this.loginLogo = 'div.login_logo'
    this.loginCredential = 'div#login_credentials'
    this.loginPassword = 'div.login_password'
  }

  /**
   * Enters an email into the email field
   * @param {String} username - enter a username
   */
  enterUsername (username = this.username) {
    cy.get(this.usernameField)
      .should('exist')
      .and('be.visible')
      .type(username)
  }

  /**
   * Enteres a password into the passwored field
   * @param {String} password - enter a password
   */
  enterPassword (password = this.password) {
    cy.get(this.passwordField)
      .should('exist')
      .and('be.visible')
      .type(password)
  }

  /**
   * @description Enter the credentials into the login fields
   * @param {String} username - username credential
   * @param {String} password - password credential
   */
  enterCredentials (username = this.username, password = this.password) {
    this.enterUsername(username)
    this.enterPassword(password)
  }

  /**
   * @description Clicks the login button
   */
  clickTheLoginButton () {
    clickTheElementButton(this.loginBtn)
  }

  /**
   * @description Login to the website under test
   * @param {String} url - url string
   * @param {String} username - username credential
   * @param {String} password - password credential
   */
  login (url = baseUrl, username = this.username, password = this.password) {
    navigateToApp(url)
    this.enterCredentials(username, password)
    this.clickTheLoginButton()
  }
}
