import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav">
            <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
          </ul>
        </nav>

        <div className="content">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default NavBar;
