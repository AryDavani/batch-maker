import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid flexed">
          <i className="material-icons">local_dining</i>
          <NavLink to="/" className="logo flexed"><h3>Batch Maker</h3></NavLink>
          <ul className="flexed">
            <li><NavLink to="/add"><i className="material-icons">add</i></NavLink></li>
            <li><NavLink to="/"><i className="material-icons">person</i></NavLink></li>
            <li><NavLink to="/login" className="">Login</NavLink></li>
            <li><NavLink to="/signup" className="">Signup</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}
