import * as commonSelectors from '../helpers/CommonSelectors.js'
const { commonHeaderElements } = commonSelectors

export default class CheckoutPage {
  constructor () {
    /**
     * CSS selectors
     */
    this.checkoutTitle = commonHeaderElements.secondaryTitle
    this.quantityLabel = 'div.cart_quantity_label'
    this.description = 'div.cart_desc_label'
    this.productName = 'div.inventory_item_name'
    this.productDescription = 'div.inventory_item_desc'
    this.productPrice = 'div.inventory_item_price'
    this.productRemoveFromCart = 'button.btn_secondary:not(button.back)'
    this.productQuantity = 'div.cart_quantity'
    this.continueShoppingBtn = 'button.btn_secondary.back'
    this.checkoutButton = 'button#checkout'
  }

  /**
   * @description The length of a list of Add to cart elements
   * @returns - count of how many Add to cart elements are found
   */
  getRemoveButtonsLength () {
    return cyArrayLength(this.productRemoveButtons)
  }

  /**
   * @description Used to choose which element and text to use
   * @param {Number} number - position of item in array
   * @param {String} nameText - text of product name
   * @param {String} descText - text of product description
   * @param {String} priceText - text of product price 
   * @returns - element locator or text of a specific element
   */
  getCheckoutElementOrText(number, nameText, descText, priceText){
    let elementOrText;
    switch (number){
      case 0: elementOrText  = {element : this.checkoutTitle, text : "Your Cart"}; break
      case 1: elementOrText  = {element : this.quantityLabel, text : "QTY"}; break
      case 2: elementOrText  = {element : this.description, text : "Description"}; break
      case 3: elementOrText  = {element : this.productQuantity, text : "1"}; break
      case 4: elementOrText  = {element : this.productName, text : nameText}; break
      case 5: elementOrText  = {element : this.productDescription, text : descText}; break
      case 6: elementOrText  = {element : this.productPrice, text : priceText}; break
      case 7: elementOrText  = {element : this.productRemoveFromCart, text : "Remove"}; break
      case 8: elementOrText  = {element : this.continueShoppingBtn, text : "Continue Shopping"}; break
      case 9: elementOrText  = {element : this.checkoutButton, text : "Checkout"}; break
      default: throw new Error('Wrong value entered')
    }
    return elementOrText
  }

}
