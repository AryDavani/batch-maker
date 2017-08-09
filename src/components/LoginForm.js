import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/actions.js';

class LoginForm extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="row container center-center">
        <div>
          <h2>Login</h2>
          <form className="col s12">
            <div className="row">
              <div className="form-inline input-field col s6">
                <input type="text" className="form-control validate" />
                <label>Username</label>
              </div>
              <div className="form-inline input-field col s6">
                <input type="password" className="form-control validate" />
                <label>Password</label>
              </div>
            </div>
            <button className="btn btn-default" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
