import React from 'react';
import {Link } from 'react-router-dom'
import './index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => (
  <div>
    <nav className="black">
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">Dressy</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart"><span className="cart-items">{props.cartProducts.length}</span></Link></li>
        </ul>
      </div>
   </nav>
   {props.children}
 </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};


export default withRouter(connect(mapStateToProps, null)(NavBar));
