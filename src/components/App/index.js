// Dependencies
import React from 'react';
// Externals
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
// Internals
import './styles.css';


const App = () => (
  <div className="App">
    <Header />
    <div className="row">
      <div className="col-sm-12">
        <ProductList />
      </div>
    </div>
  </div>
);

export default App;
