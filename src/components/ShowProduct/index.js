import React, { Component } from 'react';
import PRODUCTS from '../../assets/data/products.js';
import map from 'lodash/map';

class ShowProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemTitle: "",
      itemImage: "",
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("This is the id: ", id)
  }

  render() {
    return (
      <p>Hey</p>
    )
  }
}

export default ShowProduct;
