// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import filter from 'lodash/filter';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import styles from './styles.css';
// Externals
import {
  getCart,
} from '../../services/cart';
import {
  addProductToCartAction,
  removeProductFromCartAction,
} from '../Cart/actions';


class Cart extends Component {
  computeTotalAmount = () => {
    const { cartProducts } = this.props;
    if (isEmpty(cartProducts)) {
      return 0;
    }

    return cartProducts.reduce((sum, product) => {
      sum += product.quantity * product.price;
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
              <Link
                key={product.id}
                to={`/products/${product.type}/${product.id}`}
              >
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
              </Link>
              <button
                className="button cart-button"
                type="button"
                onClick={() => {
                  const { products } = getCart();

                  // Do we have the product in our cart already?
                  const localStorageProduct = find(products, ['id', product.id]);
                  if (localStorageProduct.quantity > 1) {
                    // Just increment the quantity then.
                    this.props.removeProductFromCart(localStorageProduct);
                    localStorageProduct.quantity -= 1;
                    this.props.addProductToCart(localStorageProduct);
                    localStorage.setItem('cart', JSON.stringify({ products }));
                    return;
                  }

                  // We know the quantity is equal to 1 now
                  localStorage.setItem('cart', JSON.stringify({ products: filter(products, ({ id }) => id !== product.id) }));
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
        <p>Total: ${this.computeTotalAmount().toFixed(2)}</p>
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

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCartAction(product)),
    removeProductFromCart: (product) => dispatch(removeProductFromCartAction(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
