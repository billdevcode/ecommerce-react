import {
  ADD_PRODUCT_TO_CART,
} from './constants';

export function addProductToCartAction(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}
