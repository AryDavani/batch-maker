import React from 'react';
import NavBar from './NavBar';

export default class BaseLayout {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <NavBar />
        { props.children }
      </div>
    )
  }
}
