import LoginPage from '../../page-objects/LoginPage.js'
import HeaderPage from '../../page-objects/HeaderPage.js'

const loginPage = new LoginPage()
const headerPage = new HeaderPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
  context('Verify that all available items exist in the header', { testIsolation: false }, () => {
    before(() => {
      loginPage.login()
    })

    ;[headerPage.headerLogo,
      headerPage.burgerMenuButton,
      headerPage.shoppingCartButton,
      headerPage.headerSecondTitle,
      headerPage.headerSecondaryFilter].forEach((element) => {
      it('and add the element visible is -> ' + element, () => {
        cy.get(element).should('exist').and('be.visible')
      })
    })
  })

  context('Verify that all available items exists', () => {
    beforeEach(() => {
      loginPage.login()
    })
    it('and the icon is visible', () => {
      [headerPage.headerLogo,
        headerPage.burgerMenuButton,
        headerPage.shoppingCartButton,
        headerPage.headerSecondTitle,
        headerPage.headerSecondaryFilter].forEach((element) => {
        if (element === headerPage.headerLogo) {
          cy.get(element).should('exist').and('be.visible')
            .and('have.text', 'Swag Labs')
        } else {
          cy.get(element).should('exist').and('be.visible')
        }
      })
    })
  })
})
