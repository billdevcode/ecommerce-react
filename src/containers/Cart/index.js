// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import styles from './styles.css';
import { Link } from 'react-router-dom';

import {
  removeProductFromCartAction
} from '../Cart/actions';


class Cart extends Component {
  computeTotalAmount = () => {
    const { cartProducts } = this.props;
    if (isEmpty(cartProducts)) {
      return 0;
    }

    return cartProducts.reduce((sum, product) => {
      sum += product.price;
      return sum;
    }, 0);
  }

  computeQuantity = (product) => {
    let quantity = {};
    const { cartProducts } = this.props;

    return cartProducts.map((product) => {
      return quantity[product] = (quantity[product] || 0) + 1;
    });
  }

  render () {
    return (
      <div className='Cart row'>
      <Link to="/">
        <button
          className="button"
          type="button"
        >
          Back to All Products
        </button>
      </Link>
      <div className="cart-products col s12 m8">
        <h1 className="center">Your Cart</h1>
          {map(this.props.cartProducts, (product) => (
            <div key={product.id}>
              <div className="col s12 m6">
                <div className="cart-product-image">
                  <img alt={product.name} src={product.img} />
                </div>
                <div className="cart-product-details">
                  <h2 id="cart-product-name">{product.name}</h2>
                  <h4 id="cart-product-description">{product.description}</h4>
                </div>
                <div className="price">
                  <h5 id="cart-product-price">${product.price}</h5>
                </div>
                <p>Quantity: {this.computeQuantity(product)} </p>
                <button
                  className="button cart-button"
                  type="button"
                  onClick={() => {
                    const cart = localStorage.getItem('cart');
                    if (!cart) {
                      localStorage.setItem('cart', JSON.stringify({ products: [] }));
                    }
                    const { products } = JSON.parse(localStorage.getItem('cart'));

                    products.filter(({ id }) => id !== product)
                    localStorage.setItem('cart', JSON.stringify({ products }));
                    console.log(localStorage.getItem('cart'))
                    this.props.removeProductFromCart(product);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-sidebar col s12 m4">
          <p>Total: ${this.computeTotalAmount()}USD</p>
          <Link to="/checkout">
            <button
              className="button cart-button"
              type="button"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (product) => dispatch(removeProductFromCartAction(product)),
  };
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
