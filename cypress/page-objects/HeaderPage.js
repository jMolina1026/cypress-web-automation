import * as commonSelectors from '../helpers/CommonSelectors.js'
import { clickTheElementButton } from '../helpers/utilities.js'
const { commonHeaderElements } = commonSelectors

export default class HeaderPage {
  constructor () {
    /**
     * CSS selectors
     */
    this.burgerMenuButton = commonHeaderElements.burgerMenuButton
    this.shoppingCartButton = commonHeaderElements.shoppingCartButton
    this.headerLogo = 'div.app_logo'
    this.headerSecondTitle = commonHeaderElements.secondaryTitle
    this.headerSecondaryFilter = commonHeaderElements.sortContainer
  }

  /**
   * @description Clicks the shopping cart button
   */
  clickTheShoppingCartBtn() {
    clickTheElementButton(this.shoppingCartButton)
  }
}
