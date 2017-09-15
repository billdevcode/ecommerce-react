import PRODUCTS from './assets/data/products.js';

import {
  FILTER_PRODUCTS,
} from './constants';

const initialState = {
  small: false,
  medium: false,
  large: false,
  dress: false,
  top: false,
  bottom: false,
  products: PRODUCTS,

};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_PRODUCTS: {
      return {
        ...state,
        products: state.products
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
