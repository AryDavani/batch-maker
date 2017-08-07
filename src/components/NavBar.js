import React, {Component} from 'react';

export default class NavBar extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <nav className="grey darken-4">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo center-align"><i className="material-icons">local_dining</i>Batch Maker</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#"><i className="material-icons">add</i></a></li>
            <li><a href="#"><i className="material-icons">person</i></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
