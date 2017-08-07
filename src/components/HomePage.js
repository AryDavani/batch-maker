import React, {Component} from 'react';
import NavBar from './NavBar';
import RecipeList from '../containers/RecipeList';

export default class HomePage extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <NavBar />
        <RecipeList />
      </div>
    )
  }
}
