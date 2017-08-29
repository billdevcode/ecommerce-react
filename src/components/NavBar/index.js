import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

const NavBar = (props) => (
  <div>
    <nav className="black">
      <div className="nav-wrapper">
        <NavLink activeClassName="brand-logo" exact to="/">Home</NavLink>
        <ul id="nav-mobile" className="right">
          <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
        </ul>
      </div>
   </nav>
   {props.children}
 </div>


);

export default NavBar;
