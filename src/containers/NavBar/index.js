import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {

  getNumberOfProducts = (products) => {
    if (products.length >= 1) {
       return products.reduce((sum, product) => {
        sum += product.quantity
        return sum;
      }, 0);
    }
    return 0;
  }


  render() {
    return(
      <div>
        <nav className="black">
          <div className="nav-wrapper">
            <Link className="brand-logo left" to="/">Dressy</Link>
            <ul id="nav-mobile" className="right">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart"><span className="cart-items">{this.getNumberOfProducts(this.props.cartProducts)}</span></Link></li>
            </ul>
          </div>
       </nav>
       {this.props.children}
     </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};


export default withRouter(connect(mapStateToProps, null)(NavBar));
