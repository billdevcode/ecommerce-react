import React, { Component } from 'react';
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
import { connect } from 'react-redux';
import {
  filterProductsAction
} from '../../actions';

import './index.css';

class App extends Component {

  render() {
   return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <ProductList />
          </div>
        </div>
      </div>
   );
 }
}

const mapStateToProps = ({ app }) => {
  return {
    products: app.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (event) => dispatch(filterProductsAction(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
