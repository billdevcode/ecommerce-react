// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  static propTypes = {
    href: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  render() {
    return (
      <a href={this.props.href} className="button">
        <button className="submit-button">
          Get in Touch
        </button>
      </a>
    );
  }
}

export default Button;
