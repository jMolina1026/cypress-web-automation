import LoginPage from '../../page-objects/LoginPage.js'
import * as utility from '../../helpers/utilities.js'

const { navigateToApp, loginValidations } = utility
const loginPage = new LoginPage()

describe('Given the user visits Sauce Demo', { retries: { runMode: 2, openMode: 2 } }, () => {
  context('The user logs into the site with valid credentials', () => {
    it('and verfies landing on the homepage', () => {
      loginPage.login()
      cy.get(loginPage.headerLogo).should('exist').and('be.visible')
    })
  })

  context('The user checks the login validation messages', () => {
    beforeEach(() => {
      navigateToApp()
    })

    it('and attempts to login with an invalid username', () => {
      loginPage.enterCredentials(loginValidations.wrongUsername)
      loginPage.clickTheLoginButton()
      cy.get(loginPage.errorMessageBox)
        .should('have.text', loginValidations.invalidCredentials)
    })

    it('and attempts to login with an invalid password', () => {
      loginPage.enterCredentials(loginPage.username, loginValidations.wrongPassword)
      loginPage.clickTheLoginButton()
      cy.get(loginPage.errorMessageBox)
        .should('have.text', loginValidations.invalidCredentials)
    })

    it('and verifies if a username has been added to the email field', () => {
      loginPage.clickTheLoginButton()
      cy.get(loginPage.errorMessageBox)
        .should('have.text', loginValidations.requiredUsername)
    })

    it('and verifies if a password has been added to the password field', () => {
      loginPage.enterUsername(loginValidations.wrongUsername)
      loginPage.clickTheLoginButton()
      cy.get(loginPage.errorMessageBox)
        .should('have.text', loginValidations.requriedPassword)
    })
  })
})
