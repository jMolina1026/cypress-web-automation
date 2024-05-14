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

  it('Verify that all required elements are visible on the products page', () => {
    cy.get(productsPage.productItemContainers)
      .its('length')
      .then((length) => {
        for (const elements of productsPageElements) {
          for (let i = 0; i < length; i++) {
            cy.get(elements).eq(i).should('exist').and('be.visible')
          }
        }
      })
  })

  it('Verify that all required elements text correct on the products page', () => {
    cy.get(productsPage.productItemContainers)
      .its('length')
      .then((containersLength) => {
        for (let i = 1; i <= productsPage.itemsDetailsLength(); i++) {
          for (let j = 0; j < containersLength; j++) {
            cy.get(productsPageElements[i]).eq(j).should('have.text', productsPage.itemsDetails(j, i))
          }
        }
      })
  })
})
