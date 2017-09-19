// Dependencies
import React, { Component } from 'react';
// Externals
import Field from '../Field';
// Internals
import './styles.css';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  updateField = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Dressy</h5>
              <p className="text-lighten-4">This application was built with the best practices of React and Redux in mind.</p>
            </div>

            <div className="col l4 offset-l2 s12 center">
              <h5>Stay Updated</h5>
              <div className="col s12">
                <Field
                  placeholder="Name"
                  onChange={(event) => this.updateField('name', event.target.value)}
                  value={this.state.name}
                />
              </div>

              <div className="col s12">
                <Field
                  placeholder="Email"
                  onChange={(event) => this.updateField('email', event.target.value)}
                  value={this.state.email}
                />
              </div>

              <div className="clear">
                <input type="submit" className="button Button" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom center">
          © 2017 Copyright Sandra Adams-Hallie
        </div>
      </footer>
    );
  }
}

export default Footer;
