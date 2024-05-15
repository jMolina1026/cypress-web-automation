/**
 * @description This is a helper module that contains global variables
 * and aux functions used across this Layout Manager Project.
 */

import TestDelays from '../helpers/testDelays.js'
import * as infoObjects from '../helpers/infoObjects.js'
const { productsObject } = infoObjects

/**
 * ============================================================
 *  ARRAYS, MAPS, CONSTANTS, VARIABLES, OBJECTS...
 * ===========================================================
 */

const baseUrl = Cypress.env('baseUrl')

const loginValidations = {
  wrongUsername: 'WrongUsername',
  wrongPassword: 'WrongPassword',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  requiredUsername: 'Epic sadface: Username is required',
  requriedPassword: 'Epic sadface: Password is required'
}

const items = [
  productsObject.productBackPack,
  productsObject.productBikeLight,
  productsObject.productBoltShirt,
  productsObject.productFleece,
  productsObject.productOnsie,
  productsObject.productRedShirt
]

const itemDetails = [
  'productName',
  'productDesc',
  'productPrice',
  'productAddToCart'
]

/**
* ============================================================
*  FUNCTIONS
* ===========================================================
*/

/**
 * @description Navigate to the test web app
 * @param {String} url - url string
 */
function navigateToApp (url = baseUrl) {
  Cypress.config('pageLoadTimeout', 10000)
  cy.visit(url)
}

/**
 * @desc Random Number Generator
 * @param {Number} min - the lower end of the range
 * @param {Number} max - the higher end of the range
 * @returns {Number} random number
 */
function randomNumber (min, max) {
  return Math.floor((Math.random() * (max - min) + min))
}

/**
 * @desc This will interact with an element by clicking
 * the associated feature and revealing more elements.
 * Repeats in various other components.
 * @param {String} element - locator used to identify the element
 */
function clickTheElementButton (element) {
  cy.get(element)
    .should('exist')
    .and('be.visible')
    .click()
}

/**
 * @desc This will interact with an element by clicking
 * the associated feature and revealing more elements.
 * Repeats in various other components.
 * @param {String} element - locator used to identify the element
 */
function clickTheElementButtonByIndex (element, index) {
  cy.get(element)
    .should('exist')
    .and('be.visible')
    .eq(index)
    .should('exist')
    .and('be.visible')
    .click()
}

/**
 * @description The length of any given array
 * @param {Array} array - expected array
 * @returns - length of given array
 */
function arrayLength (array = []) {
  return array.length
}

/**
 * @description The length of a list of elements
 * @param {String} element - locator used to identify the element
 * @returns - count of how many elements are found
 */
function cyArrayLength (element) {
  return cy.get(element)
    .its('length')
    .then((elementCount) => {
      return elementCount
    })
}

function test () {
  return cy.get('body').then($body => {
    return $body.find(productsPage.productRemoveButtons).length
  })
}

// To make any method or variable private, just remove it from the list of exported items
export {
  baseUrl,
  items,
  itemDetails,
  navigateToApp,
  randomNumber,
  clickTheElementButton,
  clickTheElementButtonByIndex,
  arrayLength,
  cyArrayLength,
  loginValidations
}
