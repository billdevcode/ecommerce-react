import React, { Component } from 'react';
import Product from './components/Product';
import PRODUCTS from '../../assets/data/products.js';

class ShowProduct extends Component {
  render () {

    let shownProduct = PRODUCTS.filter((product) => (
      product.id === this.props.match.params)
    )

    return (
       <Product key={product.id} product={shownProduct} />
    )

  }
}

    return (
      <div>Hello</div>
    )
  }

}

export default ShowProduct;
