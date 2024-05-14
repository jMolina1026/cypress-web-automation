import * as utility from '../helpers/utilities.js'
const { items, itemDetails, arrayLength } = utility

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
}
