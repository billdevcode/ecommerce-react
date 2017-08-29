import React, { Component, PropTypes } from 'react';
import '../index.css';

class Button extends Component {

  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  render() {
    const href = `mailto:${this.props.email}?subject=You got mail from ${this.props.formValues.name}&body=${this.props.formValues.message} from ${this.props.formValues.email}`
    return (
      <a href={href} className="button"><button>Get in Touch</button></a>
    );
  }
}

export default Button;
