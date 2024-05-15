import LoginPage from '../../page-objects/LoginPage.js'
import ProductsPage from '../../page-objects/ProductsPage.js'

const loginPage = new LoginPage()
const productsPage = new ProductsPage()

describe('Given the user is logged into the Sauce Demo site', () => {
  let productsPageElements
  beforeEach(() => {
    loginPage.login()
    productsPageElements = [
      productsPage.productImages,
      productsPage.productNames,
      productsPage.productDescriptions,
      productsPage.productPrices,
      productsPage.productAddToCartButtons
    ]
  })

  context('Verify that a can take actions on the items', () => {
    it('and add items to the cart', () => {
      productsPage.getAddToCartBtnsLength().then((addToCartLength) => {
        for (let i = 0; i < addToCartLength; i++) {
          productsPage.clickTheAddToCartButton(0)
          cy.get(productsPage.shoppingCartBadge).eq(0).should('exist').and('be.visible')
          cy.get(productsPage.shoppingCartBadge).eq(0).should('have.text', i + 1)
        }
      })
    })

    it('and delete items from the cart', () => {
      productsPage.getAddToCartBtnsLength().then((addToCartLength) => {
        for (let i = 0; i < addToCartLength; i++) {
          productsPage.clickTheAddToCartButton(0)
        }
      })
      productsPage.getRemoveButtonsLength().then((removeFromCartLength) => {
        for (let j = removeFromCartLength; j > 0; j--) {
          productsPage.clickTheRemoveFromCartButton(j - 1)
          if ((j - 1) >= 1) {
            cy.get(productsPage.shoppingCartBadge).eq(0).should('exist').and('be.visible')
            cy.get(productsPage.shoppingCartBadge).eq(0).should('have.text', j - 1)
          } else {
            cy.get(productsPage.shoppingCartBadge).should('not.exist')
          }
        }
      })
    })
  })
})
