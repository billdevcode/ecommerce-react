//########## product.js ###########
import React from 'react';

const Product = (props) => {
  let product = props.product;
  return (

    <div className="product-stuff">
      <ul className="product_ul">
        <li className="product_content" key={product.id}>
          <img className="product-image" src={product.img} alt="product" />
          <div className="product-info">
            <h3>{product.name}</h3>
          </div>
          <div className="product-bio">
            <p><strong>Description:</strong> {product.description}</p>
          </div>
        </li>
      </ul>
    </div>
  );

};

export default Product;
