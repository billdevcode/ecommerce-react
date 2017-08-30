import React, { Component } from 'react';
import PRODUCTS from '../../assets/data/products.js';
import './index.css';
import '../../globalStyles.css';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { Link } from 'react-router-dom';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsInCart: [],
    }

    this.filterBySize = this.filterBySize.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  filterBySize(e) {
    let filteredProducts = filter(PRODUCTS, { 'size': e.target.value });
    this.setState = ({
      products: filteredProducts
    })
  }

  addToCart() {
    let product =
    this.state.productsInCart.push(product)
  }

  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s2 m4 offset-m4 center">
          <h4 id="product-list-title">All Dresses</h4>
        </div>

        <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
          <p>Pick your size</p>
          <input onClick={this.filterBySize()} type="checkbox" id="size_small" value="small"/><label htmlFor="size_small">Small</label>
          <input onClick={this.filterBySize()} type="checkbox" id="size_medium" value="medium"/><label htmlFor="size_medium">Medium</label>
          <input onClick={this.filterBySize()} type="checkbox" id="size_large" value="large"/><label htmlFor="size_large">Large</label>
        </div>

       <div className="col row product-item">
         {map(PRODUCTS, (product)=> (
           <Link to={`/dresses/${product.id}`}>
             <div key={product.id} className="col s12 col m4 col l3">
               <div className="product-image">
                 <img alt={product.name} src={product.img} />
               </div>
               <div className="product-details">
                 <h1 id="product-name">{product.name}</h1>
                 <h4 id="product-description">{product.description}</h4>
                 <div className="price-add">
                   <h5 id="product-price">${product.price}</h5>
                 </div>
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
