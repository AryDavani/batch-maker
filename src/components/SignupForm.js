import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';

export default class SignupForm extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <Row className="container">
    		<Input s={6} type="text" label="Username" />
    		<Input s={6} type="text" label="Display Name" />
    		<Input type="password" label="Password" s={6} />
    		<Input type="password" label="Confirm Password" s={6} />
      </Row>
    )
  }
}
