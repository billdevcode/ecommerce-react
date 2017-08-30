// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import filter from 'lodash/filter';
import map from 'lodash/map';
// Externals
import PRODUCTS from '../../assets/data/products.js';
import '../../globalStyles.css'
// Internals
import './index.css';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsInCart: [],
      small: false,
      medium: false,
      large: false,
    };
  }

  filterBySize = (event) => {
    // event.target.value will be either 'small', 'medium', or 'large'
    // Toggle this.state.small, medium, and large to either true or false.
    const toggledValue = !this.state[event.target.value];
    this.setState({ [event.target.value]: toggledValue });
  }

  render() {
    const { small, medium, large } = this.state;
    let products = PRODUCTS;

    // Filter products if filters have been selected by user.
    const hasSelectedFilter = small || medium || large;
    if (hasSelectedFilter) {
      products = filter(PRODUCTS, (product) => {
        // If user clicks on small checkbox, add the small products.
        if (small && product.size === 'small') { return product; }
        // If user clicks on medium checkbox, add the medium products.
        if (medium && product.size === 'medium') { return product; }
        // If user clicks on large checkbox, add the large products.
        if (large && product.size === 'large') { return product; }
      })
    }

    return (
      <div className="row">
        <div className="col s8 offset-s2 m4 offset-m4 center">
          <h4 id="product-list-title">All Dresses</h4>
        </div>

        <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
          <p>Pick your size</p>
          <input
            onClick={this.filterBySize}
            type="checkbox"
            id="size_small"
            value="small"
          />
          <label htmlFor="size_small">Small</label>
          <input
            onClick={this.filterBySize}
            type="checkbox"
            id="size_medium"
            value="medium"
          />
          <label htmlFor="size_medium">Medium</label>
          <input
            onClick={this.filterBySize}
            type="checkbox"
            id="size_large"
            value="large"
          />
          <label htmlFor="size_large">Large</label>
        </div>

        <div className="col row product-items">
          {map(products, (product)=> (
            <Link
              key={product.id}
              to={`/dresses/${product.id}`}
            >
              <div className="col s12 col m4 col l3">
                <div className="product-image">
                  <img alt={product.name} src={product.img} />
                </div>
                <div className="product-details">
                  <h1 id="product-name">{product.name}</h1>
                  <h4 id="product-description">{product.description}</h4>
                </div>
                <div className="price-add">
                  <h5 id="product-price">${product.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
     </div>
   );
 }
}

export default ProductList
