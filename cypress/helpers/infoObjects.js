/**
 * @description This is a helper module that contains objects of specific items in the
 * product pages
 */

const productsObject = {
  productBackPack: {
    productName: 'Sauce Labs Backpack',
    productDesc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    productPrice: '$29.99',
    productAddToCart: 'Add to cart'
  },
  productBikeLight: {
    productName: 'Sauce Labs Bike Light',
    productDesc: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
    productPrice: '$9.99',
    productAddToCart: 'Add to cart'
  },
  productBoltShirt: {
    productName: 'Sauce Labs Bolt T-Shirt',
    productDesc: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
    productPrice: '$15.99',
    productAddToCart: 'Add to cart'
  },
  productFleece: {
    productName: 'Sauce Labs Fleece Jacket',
    productDesc: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.',
    productPrice: '$49.99',
    productAddToCart: 'Add to cart'
  },
  productOnsie: {
    productName: 'Sauce Labs Onesie',
    productDesc: 'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
    productPrice: '$7.99',
    productAddToCart: 'Add to cart'
  },
  productRedShirt: {
    productName: 'Test.allTheThings() T-Shirt (Red)',
    productDesc: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
    productPrice: '$15.99',
    productAddToCart: 'Add to cart'
  }
}

const sortList = {
  options: [
    'Name (A to Z)',
    'Name (Z to A)',
    'Price (low to high)',
    'Price (high to low)'
  ]
}

export {
  productsObject,
  sortList
}
