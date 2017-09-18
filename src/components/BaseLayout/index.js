import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProductsToCartAction } from '../../containers/Cart/actions'

import './index.css';

class BaseLayout extends Component {
  componentDidMount() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify({ products: [] }));
    }
    const { products } = JSON.parse(localStorage.getItem('cart'));
    this.props.addProductsToCart(products);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductsToCart: (products) => dispatch(addProductsToCartAction(products)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(BaseLayout));
