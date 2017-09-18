import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCTS_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
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

export function removeProductFromCartAction(product) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    product,
  }
}
