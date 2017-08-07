import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';

export default class LoginForm extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <form className="center-center">
        <Row className="">
          <Input type="text" label="Username" s={6} />
          <Input type="password" label="Password" s={6} />
        </Row>
      </form>
    )
  }
}
