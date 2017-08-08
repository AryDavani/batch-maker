import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" className="validate" />
              <label>Username</label>
            </div>
            <div className="input-field col s6">
              <input type="password" className="validate" />
              <label>Password</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
