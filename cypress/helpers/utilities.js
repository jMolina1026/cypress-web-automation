/**
 * @description This is a helper module that contains global variables
 * and aux functions used across this Layout Manager Project.
 */

import TestDelays from '../helpers/testDelays.js'

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
 * @param {String} element - the element on the page in focus
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
 * @param {String} element - the element on the page in focus
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

// To make any method or variable private, just remove it from the list of exported items
export {
  baseUrl,
  navigateToApp,
  randomNumber,
  clickTheElementButton,
  clickTheElementButtonByIndex,
  loginValidations
}
