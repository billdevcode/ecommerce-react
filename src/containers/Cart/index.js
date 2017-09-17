// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import styles from './styles.css';


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
                <div className="price-add">
                  <h5 id="cart-product-price">${product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-sidebar col s12 m4">
          Total: ${this.computeTotalAmount()}USD
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

export default connect(mapStateToProps, null)(Cart);
