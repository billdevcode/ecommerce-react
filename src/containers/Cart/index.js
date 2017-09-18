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

  render () {
    return (
      <div className='Cart row'>
      <div className="cart-products col s12 m8">
        <h1 className="center">Your Cart</h1>
        <Link to="/">
          <button
            className="button back-button"
            type="button"
          >
            Back to All Products
          </button>
        </Link>
        {map(this.props.cartProducts, (product) => (
          <div key={product.id}>
            <div className="col s12 m6">
              <div className="cart-product-image">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="cart-product-details">
                <h2 id="cart-product-name">{product.name}</h2>
                <h4 id="cart-product-description">{product.description}. Size {product.size}.</h4>
              </div>
              <div className="price">
                <h5 id="cart-product-price">${product.price}</h5>
                <h5>Quantity: {product.quantity}</h5>
              </div>
              <button
                className="button cart-button"
                type="button"
                onClick={() => {
                  const cart = localStorage.getItem('cart');
                  const { products } = JSON.parse(localStorage.getItem('cart'));

                  if (product.quantity > 1) {
                    product.quantity -= 1;
                    console.log("product quantity" + product.quantity)
                    localStorage.setItem('cart', JSON.stringify({ products }));
                    return;
                  }

                  products.map((product) => {
                    localStorage.removeItem(product);
                  })
                  this.props.removeProductFromCart(product);

                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-sidebar col s12 m4 center">
        <h1>Ready to look amazing?</h1>
        <p>Total: ${this.computeTotalAmount()}</p>
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
