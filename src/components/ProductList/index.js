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
      small: { items: filter(PRODUCTS, ["size", "small"]), enabled: false },
      medium: { items: filter(PRODUCTS, ["size", "medium"]), enabled: false },
      large: { items: filter(PRODUCTS, ["size", "large"]), enabled: false },
      dress: { items: filter(PRODUCTS, ["type", "dress"]), enabled: false },
      top: { items: filter(PRODUCTS, ["type", "top"]), enabled: false },
      bottom: { items: filter(PRODUCTS, ["type", "bottom"]), enabled: false },
    };
  }

  filterItems = (event) => {
    // event.target.value will be either 'small', 'medium', or 'large'
    // Toggle this.state.small, medium, and large to either true or false.
    const category = this.state[event.target.value];
    const toggledValue = !category.enabled;
    // Destructuring
    this.setState({ [event.target.value]: {
      ...category,
      enabled: toggledValue,
    }});
  }

  render() {
    const { small, medium, large, dress, top, bottom } = this.state;
    let products = PRODUCTS;

    // Filter products if filters have been selected by user.
    const hasSelectedFilter = small.enabled || medium.enabled || large.enabled || dress.enabled || top.enabled || bottom.enabled;
    if (hasSelectedFilter) {
      products = [];
      if (small.enabled) {
        products = products.concat(small.items)
      }
      if (medium.enabled) {
        products = products.concat(medium.items)
      }
      if (large.enabled) {
        products = products.concat(large.items)
      }
      if (dress.enabled) {
        products = products.concat(dress.items)
      }
      if (top.enabled) {
        products = products.concat(top.items)
      }
      if (bottom.enabled) {
        products = products.concat(bottom.items)
      }
    }

    return (
      <div className="row">
        <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
          <p>Pick your category</p>
          <input
            onClick={this.filterItems}
            type="checkbox"
            id="category_dresses"
            value="dress"
          />
          <label htmlFor="category_dresses">Dresses</label>

          <input
            onClick={this.filterItems}
            type="checkbox"
            id="category_tops"
            value="top"
          />
          <label htmlFor="category_tops">Tops</label>

          <input
            onClick={this.filterItems}
            type="checkbox"
            id="category_bottoms"
            value="bottom"
          />
          <label htmlFor="category_bottoms">Bottoms</label>
        </div>

        <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
          <p>Pick your size</p>
          <input
            onClick={this.filterItems}
            type="checkbox"
            id="size_small"
            value="small"
          />
          <label htmlFor="size_small">Small</label>
          <input
            onClick={this.filterItems}
            type="checkbox"
            id="size_medium"
            value="medium"
          />
          <label htmlFor="size_medium">Medium</label>
          <input
            onClick={this.filterItems}
            type="checkbox"
            id="size_large"
            value="large"
          />
          <label htmlFor="size_large">Large</label>
        </div>

        <div className="col row product-item">
          {map(products, (product)=> (
            <Link
              key={product.id}
              to={`/products/${product.type}/${product.id}`}
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
