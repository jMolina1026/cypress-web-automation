import LoginPage from '../../page-objects/LoginPage.js'
import ProductsPage from '../../page-objects/ProductsPage.js'
import * as infoObjects from '../../helpers/infoObjects.js'
// import * as utility from '../helpers/utilities.js'

// const { itemDetails } = utility
const { sortList } = infoObjects
const loginPage = new LoginPage()
const productsPage = new ProductsPage()

describe('Given the user is logged into the Sauce Demo site', { retries: { runMode: 2, openMode: 0 } }, () => {
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

  context('Verify that the product page contains the ability to sort', () =>{
    it('and have the ability to sort alphanumerically', () => {
      productsPage.getSortOptionsLength().then((optionsLength) => {
        for (let i = 0; i < optionsLength; i++) {
          cy.get(productsPage.sortContainer).as('sortOptions').select(i)
          cy.get('@sortOptions')
            .find(':selected')
            .invoke('text').then((sortOptions) => {
            cy.log("sortOptions = " + sortOptions)
            cy.get(productsPage.activeSortOption).should('have.text', sortOptions)
          })
          productsPage.getProductNamesLength().then((count) => {
            if (i === 0 || i === 1) {
              for (let j = 0; j < count; j++) {
                let sortedArray = productsPage.sortStringArrayList(i, count)
                cy.wrap("[test] = " + sortedArray[j])
                cy.get(productsPage.productNames).eq(j).should('have.text', sortedArray[j])
              }
            } else if (i === 2 || i === 3) {
              for (let j = 0; j < count; j++) {
                let sortedArray = productsPage.sortStringArrayList(i, count)
                cy.wrap("[test] = " + sortedArray[j])
                cy.get(productsPage.productPrices).eq(j).should('have.text', "$" + sortedArray[j])
              }
            }
          })
        }
      })
    })
  })

  context('Verify that the product page contains the ability to sort - V2', () =>{
    it.only('and have the ability to sort alphanumerically', () => {
      productsPage.getSortOptionsLength().then((optionsLength) => {
          for (let i = 0; i < optionsLength; i++) {
            let element = ""
            if (i === 0 || i === 1) {
              element = productsPage.productNames
            } else if (i === 2 || i === 3) {
              element = productsPage.productPrices
            } 
            const namelist = []
              cy.get(element).each((products) => namelist.push(products.text())).then(() => {
              cy.get(productsPage.sortContainer).as('sortOptions').select(i)
              cy.get('@sortOptions')
                .find(':selected')
                .invoke('text').then((sortOptions) => {
                cy.log("sortOptions = " + sortOptions)
                cy.get(productsPage.activeSortOption).should('have.text', sortOptions)
              })
              if (i === 0 || i === 1) {
                cy.get(element).should('have.text', productsPage.sortArray(i, namelist).join(''))
              } else if (i === 2 || i === 3) {
                cy.get(element).should('have.text', "$" + productsPage.sortArray(i, namelist).join('$'))
              } 
            }) 
          } 
      })
    })
  })
})
