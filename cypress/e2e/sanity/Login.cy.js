import LoginPage from '../../page-objects/LoginPage.js'
import * as utility from '../../helpers/utilities.js'

const { navigateToApp } = utility
const loginPage = new LoginPage()

describe('Given the user visits the Sauce Demo site', { retries: { runMode: 2, openMode: 2 } }, () => {
  before(() => {
    navigateToApp()
  })

  it('Verify that all required elements are on the login page', () => {
    const loginPageElements = [
      loginPage.loginLogo,
      loginPage.usernameField,
      loginPage.passwordField,
      loginPage.loginBtn,
      loginPage.loginCredential,
      loginPage.loginPassword
    ]

    for (const elements of loginPageElements) {
      cy.get(elements).should('exist').and('be.visible')
    }
  })
})
