// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import PropTypes from 'prop-types';
// Externals
import '../../globalStyles.css'
// Internals
import Options from './components/Options';
import './index.css';


class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    dresses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    tops: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    bottoms: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

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

  filterProducts = (productsByCategory = []) => {
    const { showBottoms, showDresses, showTops } = this.state;
    const { bottoms, dresses, tops, products: allProducts } = this.props;

    if (showBottoms) {
      productsByCategory = productsByCategory.concat(bottoms);
    }
    if (showDresses) {
      productsByCategory = productsByCategory.concat(dresses);
    }
    if (showTops) {
      productsByCategory = productsByCategory.concat(tops);
    }
    if (isEmpty(productsByCategory)) {
      productsByCategory = allProducts;
    }

    return filterBySize(productsByCategory);
  }

  filterBySize = (productsByCategory) => {
    const { showLarge, showMedium, showSmall } = this.state;
    let productsBySize = [];

    if (showSmall) {
      productsBySize = productsBySize.concat(filter(productsByCategory, ['size', 'small']));
    }
    if (showMedium) {
      productsBySize = productsBySize.concat(filter(productsByCategory, ['size', 'medium']));
    }
    if (showLarge) {
      productsBySize = productsBySize.concat(filter(productsByCategory, ['size', 'large']));
    }
    if (isEmpty(productsBySize)) {
      productsBySize = productsByCategory;
    }

    return productsBySize;
  }

  render() {
    return (
      <div className="row">
        <Options
          toggleFilter={this.toggleFilter}
          options={this.state}
        />
        <div className="col product-item">
          {map(this.filterProducts(), (product)=> (
            <Link
              key={product.id}
              to={`/products/${product.type}/${product.id}`}
            >
              <div className="col s12 col m6 col l3">
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

const mapStateToProps = ({ app }) => {
  return {
    products: app.products,
    dresses: app.dresses,
    tops: app.tops,
    bottoms: app.bottoms,
  };
}

export default connect(mapStateToProps, null)(ProductList);
