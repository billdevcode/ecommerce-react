// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
// Externals
import PRODUCTS from '../../assets/data/products';
import {
  addProductToCartAction
} from '../Cart/actions';
//Internals
import './styles.css';


const ShowProduct = ({ match, addProductToCart }) => {
  const product = find(PRODUCTS, ['id', parseInt(match.params.id, 10)]);

  return (
    <div className="row center product-show">
      <div className="col s12 m4 offset-m2">
        <img className="product-show-image" src={product.img} alt="product" />
      </div>

      <div className="col s12 m6">
        <div className="product-info">
          <h3>{product.name}</h3>
        </div>

        <div className="product-bio">
          <p>{product.description}</p>
          <p>Size: {product.size}</p>
          <p>Price: {product.price}</p>
          <Link to="/cart">
            <button
              className="button cart-button"
              onClick={() => {
                const cart = localStorage.getItem('cart');
                if (!cart) {
                  localStorage.setItem('cart', JSON.stringify({ products: [] }));
                }
                const { products } = JSON.parse(localStorage.getItem('cart'));
                products.push(product);
                localStorage.setItem('cart', JSON.stringify({ products }));
                console.log(localStorage.getItem('cart'))
                addProductToCart(product);
              }}
              type="button"
            >
              Add to cart
            </button>
          </ Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCartAction(product)),
  };
}

export default connect(null, mapDispatchToProps)(ShowProduct);
