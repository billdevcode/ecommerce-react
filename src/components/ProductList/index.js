import React, { Component } from 'react';
import PRODUCTS from '../../assets/data/products.js';
import './index.css';
import '../../globalStyles.css';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s2 m4 offset-m4 center">
          <h4 id="product-list-title">All Dresses</h4>
        </div>

        <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
          <p>Pick your size</p>
          <input type="checkbox" id="size_small"/><label for="size_small">Small</label>
          <input type="checkbox" id="size_medium"/><label for="size_medium">Medium</label>
          <input type="checkbox" id="size_large"/><label for="size_large">Large</label>
        </div>

       <div className="col row">
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
