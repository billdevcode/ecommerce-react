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
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Sign Up</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Sandra Adams-Hallie
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
