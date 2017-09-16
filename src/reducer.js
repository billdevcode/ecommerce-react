import filter from 'lodash/filter';
import PRODUCTS from './assets/data/products.js';

const initialState = {
  products: PRODUCTS,
  dresses: filter(PRODUCTS, ['type', 'dress']),
  tops: filter(PRODUCTS, ['type', 'top']),
  bottoms: filter(PRODUCTS, ['type', 'bottom']),
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default appReducer;
