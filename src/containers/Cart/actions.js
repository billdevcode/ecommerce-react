import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCTS_TO_CART,
} from './constants';

export function addProductToCartAction(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export function addProductsToCartAction(products) {
  return {
    type: ADD_PRODUCTS_TO_CART,
    products,
  }
}
