import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/actions.js';

class LoginForm extends Component {
  constructor() {
    super();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  componentWillMount(){
    this.props.authenticated ? this.props.history.push('/') : null
  }

  componentWillReceiveProps(nextProps) {
    nextProps.authenticated ? this.props.history.push('/') : null
  }

  _handleFormSubmit(event){
    event.preventDefault();

    let object = {};
    object['username'] = event.target.username.value;
    object['password'] = event.target.password.value;

    this.props.login(object);

    event.target.reset();
  }

  render(){
    return (
      <div className="row container center-center">
        <div>
          <h2>Login</h2>
          <form onSubmit={ this._handleFormSubmit } className="col s12">
            <div className="row">
              <div className="form-inline input-field col s6">
                <input type="email" name="username" className="form-control validate" />
                <label>Username</label>
              </div>
              <div className="form-inline input-field col s6">
                <input type="password" name="password" className="form-control validate" />
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
