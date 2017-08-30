import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer black">
        <div className="container">
          <div className="row">

            <div className="col l6 s12">
              <h5 className="white-text">React E-Commerce App</h5>
              <p className="grey-text text-lighten-4">This application was built with the best practices of React in mind. This project will be advanced through the implementation of Redux and the use of the API of Amazon.</p>
            </div>

            <div className="col l4 offset-l2 s12 center">
              <h5>Stay Updated</h5>

              <form action="#" method="post" className="validate" target="_blank" novalidate>

                <div className="col s12 input-field">
                  <label>Name</label>
                  <input type="text" value="" />
                </div>

                <div className="col s12 input-field">
                  <label>Email Address</label>
                  <input type="email" value="" />
                </div>

                <div className="clear">
                  <input type="submit" className="button Button" />
                </div>
              </form>

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
