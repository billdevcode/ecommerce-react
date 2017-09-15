import {
  FILTER_PRODUCTS
} from './constants';

export function filterProductsAction(products) {
  return {
    type: FILTER_PRODUCTS,
    products,
  }
}
