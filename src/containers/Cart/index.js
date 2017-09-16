import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render () {
    console.log(this.props.cartProducts);
    const products = this.props.cartProducts.map((product) => {
      return (
        <li key={product.id}>
          {product.name}
        </li>
      )
    })
    return (
      <div className='Cart'>
        <p>This is my cart</p>
        { products }
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
