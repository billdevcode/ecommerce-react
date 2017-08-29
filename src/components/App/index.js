import React, { Component } from 'react';
import Header from '../Header/index.js';
import ProductList from '../ProductList/index.js';

import './index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
    }

  }

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

export default App;
