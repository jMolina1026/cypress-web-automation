import * as utility from '../helpers/utilities.js'
const { items, itemDetails, arrayLength, clickTheElementButtonByIndex, cyArrayLength } = utility

export default class ProductsPage {
  constructor () {
    /**
     * CSS selectors
     */
    this.productItemContainers = 'div.inventory_item'
    this.productNames = 'div.inventory_item_name'
    this.productDescriptions = 'div.inventory_item_desc'
    this.productPrices = 'div.inventory_item_price'
    this.productAddToCartButtons = 'button.btn_primary'
    this.productImages = 'div.inventory_item_img'
    this.shoppingCartBadge = 'span.shopping_cart_badge'
    this.productRemoveButtons = 'button.btn_secondary'
    this.activeSortOption = 'span.active_option'
    this.sortContainer = 'select.product_sort_container'
    this.sortOptions = 'select.product_sort_container > option'
    this.productPageTitle = 'span.title'
  }

  /**
   * @description Helps in creating the correct object path for text validation between
   * the product detail elements and the source of truth ('infoObject.js')
   * @param {Number} index1 - the position/index of the product from the 'items' array
   * @param {Number} index2 - the position/index of the product details from the 'itemDetails' array
   * @returns {String} - specific product detail text
   */
  itemsDetails (index1, index2) {
    return items[index1][itemDetails[index2 - 1]]
  }

  /**
   * The length of the 'itemDetails' array
   * @returns {Number} - length of given array
   */
  itemsDetailsLength () {
    return arrayLength(itemDetails)
  }

  /**
   * @description Clicks the add to cart button
   * @param {Number} index - chooses which button to click
   */
  clickTheAddToCartButton (index) {
    clickTheElementButtonByIndex(this.productAddToCartButtons, index)
  }

  /**
   * @description Clicks the remove from cart button
   * @param {Number} index - chooses which button to click
   */
  clickTheRemoveFromCartButton (index) {
    clickTheElementButtonByIndex(this.productRemoveButtons, index)
  }

  /**
   * @description The length of a list of Add to cart elements
   * @returns - count of how many Add to cart elements are found
   */
  getRemoveButtonsLength () {
    return cyArrayLength(this.productRemoveButtons)
  }

  /**
   * @description The length of a list of Remove from cart elements
   * @returns - count of how many Remove from cart elements are found
   */
  getAddToCartBtnsLength () {
    return cyArrayLength(this.productAddToCartButtons)
  }
}
