import LoginPage from '../../page-objects/LoginPage.js'
import HeaderPage from '../../page-objects/HeaderPage.js'
import HambugerMenuPage from '../../page-objects/HamburgerMenuPage.js'
import * as utility from '../../helpers/utilities.js'

const { burgerMenuText } = utility
const loginPage = new LoginPage()
const headerPage = new HeaderPage()
const hamburgerMenuPage = new HambugerMenuPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
  beforeEach(() => {
    loginPage.login()
  })

  it('Verify that the Hamburger Menu Option \'All Items\' takes the user to the home page', () => {
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.sauceLabsBackpackImg)
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuButton)
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuAllItems)
    cy.get(hamburgerMenuPage.sauceLabsBikeLightImg).should('exist').and('be.visible')
  })

  it('Verify that the Hamburger Menu Option \'About\' takes the about page for the site', { pageLoadTimeout: 10000 }, () => {
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuButton)
    cy.wait(1000)
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuAbout)
    cy.get(hamburgerMenuPage.sauceLabsLogo).should('exist').and('be.visible')
  })

  it('Verify that the Hamburger Menu Option \'Logout\' logs the user out of the site', () => {
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuButton)
    cy.wait(1000)
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuLogout)
    cy.get(hamburgerMenuPage.loginLogo).should('exist').and('be.visible')
  })

  it('Verify that the Hamburger Menu Option \'Reset App State\' resets the site', () => {
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.productAddToCartButtons + '[id="add-to-cart-sauce-labs-backpack"]')
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuButton)
    cy.wait(1000)
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuResetApp)
    cy.get(hamburgerMenuPage.shoppingCartBadge).should('not.exist')
  })
})
