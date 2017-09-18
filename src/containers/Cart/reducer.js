import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCTS_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './constants';

const initialState = {
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartProducts: state.cartProducts.concat([action.product]),
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return state.filter(({ id }) => id !== action.product);
    }
    case ADD_PRODUCTS_TO_CART: {
      return {
        ...state,
        cartProducts: state.cartProducts.concat(action.products),
      };
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
