import LoginPage from '../../page-objects/LoginPage.js'
import HeaderPage from '../../page-objects/HeaderPage.js'

const loginPage = new LoginPage()
const headerPage = new HeaderPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
  context('Verify that all available items are visible', { testIsolation: false }, () => {
    before(() => {
      loginPage.login()
    })

    ;[headerPage.headerLogo, 
      headerPage.burgerMenuButton, 
      headerPage.shoppingCartButton, 
      headerPage.headerSecondTitle, 
      headerPage.headerSecondaryFilter].forEach((element) => {
        it('and add the icon visible is -> ' + element, () => {
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
            cy.get(element).should('exist').and('be.visible')
        })
    })
  })
})
