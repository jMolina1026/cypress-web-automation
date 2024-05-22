import LoginPage from '../../page-objects/LoginPage.js'
import HambugerMenuPage from '../../page-objects/HamburgerMenuPage.js'
import * as utility from '../../helpers/utilities.js'

const { burgerMenuText } = utility
const loginPage = new LoginPage()
const hamburgerMenuPage = new HambugerMenuPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
  before(() => {
    loginPage.login()
    hamburgerMenuPage.clickMenuPageButton(hamburgerMenuPage.burgerMenuButton)
  })

  context('Verify that the Hamburger menu works as intended ', { testIsolation: false }, () => {
    const burgerMenuArray = [
      hamburgerMenuPage.burgerMenuCloseBtn,
      hamburgerMenuPage.burgerMenuAllItems,
      hamburgerMenuPage.burgerMenuAbout,
      hamburgerMenuPage.burgerMenuLogout,
      hamburgerMenuPage.burgerMenuResetApp
    ]

    let index = 0
    burgerMenuArray.forEach((element) => {
      it(`and check that the element = ${element} is visible`, () => {
        cy.get(element).should('exist').and('be.visible').and('have.text', burgerMenuText[index])
        index += 1
      })
    })
  })
})
