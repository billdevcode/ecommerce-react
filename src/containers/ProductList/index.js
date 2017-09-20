// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
// Externals
import PRODUCTS from '../../assets/data/products';
import '../../globalStyles.css'
// Internals
import Options from './components/Options';
import './styles.css';

const DRESSES = filter(PRODUCTS, ['type', 'dress']);
const TOPS = filter(PRODUCTS, ['type', 'top']);
const BOTTOMS = filter(PRODUCTS, ['type', 'bottom']);


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBottoms: false,
      showDresses: false,
      showTops: false,
      showLarge: false,
      showMedium: false,
      showSmall: false,
    };
  }

  toggleFilter = (key) => {
    const toggledValue = !this.state[key];
    this.setState({ [key]: toggledValue });
  }

  filterProducts = () => {
    const { showBottoms, showDresses, showTops } = this.state;
    let productsByCategory = [];

    if (showBottoms) {
      productsByCategory = productsByCategory.concat(BOTTOMS);
    }
    if (showDresses) {
      productsByCategory = productsByCategory.concat(DRESSES);
    }
    if (showTops) {
      productsByCategory = productsByCategory.concat(TOPS);
    }
    if (isEmpty(productsByCategory)) {
      productsByCategory = PRODUCTS;
    }

    return this.filterBySize(productsByCategory);
  }

  filterBySize = (productsByCategory) => {
    const { showLarge, showMedium, showSmall } = this.state;
    let productsBySize = [];

    if (showSmall) {
      const smallProductsByCategory = filter(productsByCategory, ['size', 'small']);
      productsBySize = productsBySize.concat(smallProductsByCategory);
    }
    if (showMedium) {
      const mediumProductsByCategory = filter(productsByCategory, ['size', 'medium']);
      productsBySize = productsBySize.concat(mediumProductsByCategory);
    }
    if (showLarge) {
      const largeProductsByCategory = filter(productsByCategory, ['size', 'large']);
      productsBySize = productsBySize.concat(largeProductsByCategory);
    }
    if (!showSmall && !showMedium && !showLarge) {
      productsBySize = productsByCategory;
    }

    return productsBySize;
  }

  render() {
    const { filterProducts, state, toggleFilter } = this;

    return (
      <div className="row">
        <Options
          toggleFilter={toggleFilter}
          options={state}
        />
        <div className="col product-item">
          {map(filterProducts(), (product)=> (
            <Link
              key={product.id}
              to={`/products/${product.type}/${product.id}`}
            >
              <div className="col s12 col m6 col l4">
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

export default ProductList;
