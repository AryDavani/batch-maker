import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup} from '../actions/actions.js';

class SignupForm extends Component {
  constructor() {
    super();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(event){
    event.preventDefault();

    let object = {};
    object['username'] = event.target.username.value;
    object['password'] = event.target.password.value;

    this.props.signup(JSON.stringify(object));

    event.target.reset();
  }

  render(){
    return (
      <div className="row container center-center">
        <div>
          <h2>Signup</h2>
          <form onSubmit={ this._handleFormSubmit } className="col s12">
            <div className="row">
              <div className="form-inline input-field col s6">
                <input name="username" type="text" className="form-control validate" />
                <label>Username</label>
              </div>
              <div className="form-inline input-field col s6">
                <input name="password" type="password" className="form-control validate" />
                <label>Password</label>
              </div>
            </div>
            <button className="btn btn-default" type="submit">Signup!</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signup}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupForm);
