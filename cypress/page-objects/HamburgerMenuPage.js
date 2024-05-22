import * as commonSelectors from '../helpers/CommonSelectors.js'
import * as utility from '../helpers/utilities.js'

const { getElementText, clickTheElementButton } = utility
const { commonHeaderElements, commonLoginPageElements, commonProductsElements } = commonSelectors

export default class HamburgerMenu {
  constructor () {
    /**
     * CSS selectors
     */
    this.burgerMenuButton = commonHeaderElements.burgerMenuButton
    this.burgerMenuCloseBtn = 'button#react-burger-cross-btn'
    this.burgerMenuAllItems = 'a#inventory_sidebar_link'
    this.burgerMenuAbout = 'a#about_sidebar_link'
    this.burgerMenuLogout = 'a#logout_sidebar_link'
    this.burgerMenuResetApp = 'a#reset_sidebar_link'
    this.burgerMenuItemsList = 'nav.bm-item-list > a'
    this.loginLogo = commonLoginPageElements.loginLogo
    this.shoppingCartBadge = commonProductsElements.shoppingCartBadge
    this.productAddToCartButtons = commonProductsElements.productAddToCartButtons
    this.sauceLabsBackpackImg = 'img[alt=\'Sauce Labs Backpack\']'
    this.sauceLabsBikeLightImg = 'img[alt=\'Sauce Labs Bike Light\']'
    this.sauceLabsLogo = 'img[src=\'/images/logo.svg\']'
  }

  /**
   * @description Grabs the text of one of the options in the menu
   * @param {String} element - locator used to identify the element
   * @param {Number} index - position of element in list
   * @returns - element text
   */
  getMenuOptionsText (element = this.burgerMenuItemsList, index = 0) {
    return getElementText(element, index)
  }

  clickMenuPageButton (element) {
    clickTheElementButton(element)
  }
}
