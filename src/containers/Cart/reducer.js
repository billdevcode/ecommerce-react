import {
  ADD_PRODUCT_TO_CART,
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
    default: {
      return state;
    }
  }
}

export default cartReducer;
