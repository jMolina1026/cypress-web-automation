import * as commonSelectors from '../helpers/CommonSelectors.js'
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
