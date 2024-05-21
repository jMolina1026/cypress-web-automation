import * as utility from '../helpers/utilities.js'
import * as commonSelectors from '../helpers/CommonSelectors.js'
const { items } = utility
const { commonHeaderElements } = commonSelectors

export default class HeaderPage {
  constructor () {
    /**
     * CSS selectors
     */
    this.burgerMenuButton = 'div.bm-burger-button'
    this.shoppingCartButton = commonHeaderElements.shoppingCartButton
    this.headerLogo = 'div.app_logo'
    this.headerSecondTitle = commonHeaderElements.secondaryTitle
    this.headerSecondaryFilter = commonHeaderElements.sortContainer
  }



}
