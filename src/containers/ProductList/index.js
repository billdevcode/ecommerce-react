// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import filter from 'lodash/filter';
import map from 'lodash/map';
import remove from 'lodash/remove';
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
    small: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    medium: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    large: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: ['dresses'],
      sizes: [],
    };
  }

  addFilter = (key, event) => {
    const filterTypes = this.state[key];
    // ie. Do we already have 'dresses' in our 'categories' key-value pair? Remove it.
    if (includes(filterTypes, event.target.value)) {
      remove(filterTypes, (filterType) => filterType === event.target.value);
      this.setState({ [key]: filterTypes });
      return;
    }
    // ie. We do not have 'dresses' in our 'categories' key-value pair. Add it.
    filterTypes.push(event.target.value);
    this.setState({ [key]: filterTypes });
  }

  render() {
    return (
      <div className="row">
        <Options
          addFilter={this.addFilter}
          options={this.state}
        />
        <div className="col product-item">
          {map(this.createProducts(), (product)=> (
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
    small: app.small,
    medium: app.medium,
    large: app.large,
  };
}

export default connect(mapStateToProps, null)(ProductList);
