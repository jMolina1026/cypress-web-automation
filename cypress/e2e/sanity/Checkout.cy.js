import LoginPage from '../../page-objects/LoginPage.js'
import HeaderPage from '../../page-objects/HeaderPage.js'
import ProductsPage from '../../page-objects/ProductsPage.js'
import CheckoutPage from '../../page-objects/CheckoutPage.js'
import * as lmUtility from '../../helpers/utilities.js'

const { randomNumber } = lmUtility
const loginPage = new LoginPage()
const headerPage = new HeaderPage()
const productsPage = new ProductsPage()
const checkoutPage = new CheckoutPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
  beforeEach(() => {
    loginPage.login()
  })

  it('Verify that the checkout page contains the selected items that were added to the cart', () => {
    productsPage.getAddToCartBtnsLength().then((addToCartBtnsLength) => {
      let randomIndex = randomNumber(0, addToCartBtnsLength)
      let productElementArray = [
        productsPage.productNames,
        productsPage.productDescriptions,
        productsPage.productPrices
      ]
      let productInfoTextArray = []
      let count = 0
      productElementArray.forEach((element) => {
        productsPage.getProductInfoText(element, randomIndex).then((text) => {
          productInfoTextArray.push(text)
          cy.log(`The value is = ${productInfoTextArray}`)
          if (count === productElementArray.length - 1) {
            productsPage.clickTheAddToCartButton(randomIndex)
            headerPage.clickTheShoppingCartBtn()
            for (let i = 0; i < 10; i++) {
              cy.get(checkoutPage.getCheckoutElementOrText(i, productInfoTextArray[0], productInfoTextArray[1], productInfoTextArray[2]).element)
                .should('exist').and('be.visible')
                .and('have.text', checkoutPage.getCheckoutElementOrText(i, productInfoTextArray[0],  productInfoTextArray[1],  productInfoTextArray[2]).text)
            }
          }
          count += 1
        })
      })

    })
  })
})
