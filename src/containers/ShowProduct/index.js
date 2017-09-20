// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
// Externals
import PRODUCTS from '../../assets/data/products';
import {
  getCart,
} from '../../services/cart';
import {
  addProductToCartAction,
  removeProductFromCartAction,
} from '../Cart/actions';
// Internals
import './styles.css';


const ShowProduct = ({ match, addProductToCart, removeProductFromCart }) => {
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
          <p>Price: ${product.price}</p>
          <Link to="/cart">
            <button
              className="button cart-button"
              onClick={() => {
                const { products } = getCart();

                // Do we have the product in our cart already?
                const localStorageProduct = find(products, ['id', product.id]);
                if (localStorageProduct) {
                  // Just increment the quantity then.
                  removeProductFromCart(localStorageProduct);
                  localStorageProduct.quantity += 1;
                  addProductToCart(localStorageProduct);
                  localStorage.setItem('cart', JSON.stringify({ products }));
                  return;
                }

                product.quantity = 1;
                products.push(product);
                localStorage.setItem('cart', JSON.stringify({ products }));
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
    removeProductFromCart: (product) => dispatch(removeProductFromCartAction(product)),
  };
}

export default connect(null, mapDispatchToProps)(ShowProduct);
