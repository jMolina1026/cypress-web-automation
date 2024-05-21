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
    this.loginLogo = commonLoginPageElements.loginLogo
    this.shoppingCartBadge = commonProductsElements.shoppingCartBadge
    this.productAddToCartButtons = commonProductsElements.productAddToCartButtons
  }

  /**
   * @description Grabs the text of one of the options in the menu
   * @param {String} element - locator used to identify the element
   * @param {Number} index - position of element in list
   * @returns - element text
   */
  getMenuOptionsText (element = this.burgerMenuItemsList, index = 0) {
    getElementText(element, index)
  }

  clickTheMenuButton (element) {
    clickTheElementButton(element)
  }
}
