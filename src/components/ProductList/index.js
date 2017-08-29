import React, { Component } from 'react';
import PRODUCTS from '../../assets/data/products.js';
import './index.css';
import map from 'lodash/map';

class ProductList extends Component {
  render() {
   return (
     <div className="row">
       <div className="col-sm-12 text-center">
         <h4>All Items</h4>
       </div>
       <div className="col-sm-12 row">
         {map(PRODUCTS, (product)=> (
           <div key={product.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
         ))}
       </div>
     </div>
   );
 }
}

export default ProductList
