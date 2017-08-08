import React, {Component} from 'react';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: '',

    }
  }
  render(){
    return (
      <div className="container-fluid well center">
        <h2>Add a Recipe!</h2>
        <form className="container-fluid well">
          <input className="form-control" type="text" placeholder="Recipe Name" />
          <input className="form-control" type="text" placeholder="Your Name" />
          <h5>Steps</h5>
          <div className="form-inline">
            <input className="form-control" type="number" placeholder="Amount" />
            <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
              <option selected>Unit</option>
              <option value="1">Cups</option>
              <option value="2">Tsp</option>
              <option value="3">Tbsp</option>
              <option value="3">Dash</option>
            </select>
            <input className="form-control" type="text" placeholder="Ingredient Name" />
            <button className="btn btn-default"><i className="material-icons">add_box</i></button>
            <button className="btn btn-default"><i className="material-icons">indeterminate_check_box</i></button>

          </div>
        </form>
      </div>
    )
  }
}
