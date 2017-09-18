// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Internals
import './styles.css';

const Checkout = (props) => {
  return (
    <div className="checkout center">
      <div className="checkout-header">
        <h2>Thank you for shopping with us.</h2>
      </div>
      <p>Pay for {props.cartProducts.length} items.</p>
      <h3>Please select your preferred payment method.</h3>
      <img alt="payment-methods" src="https://forum.opencart.com/download/file.php?id=28877" />
      <p>Note: this is a test app that does not process payments.</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};

export default connect(mapStateToProps, null)(Checkout);
