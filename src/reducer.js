import filter from 'lodash/filter';
import PRODUCTS from './assets/data/products.js';

const initialState = {
  products: PRODUCTS,
  dresses: filter(PRODUCTS, ['type', 'dress']),
  tops: filter(PRODUCTS, ['type', 'top']),
  bottoms: filter(PRODUCTS, ['type', 'bottom']),
  small: filter(PRODUCTS, ['size', 'small']),
  medium: filter(PRODUCTS, ['size', 'medium']),
  large: filter(PRODUCTS, ['size', 'large']),
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default appReducer;
