import React, {Component} from 'react';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: '',
      author: '',
      recipeType: '',
      prepTime: 0,
      cookTime: 0,
      cookTemp: 0,
      amount: 0,
      amountUnit: '',
      steps: [
        {
          ingredients: [],
          directions: ''
        }
      ],
      notes: ''
    }

    
  }
  render(){
    return (
      <div id="recipeForm" className="center-center">
        <div>
          <h1 className="text-center">Add a Recipe!</h1>
          <form className="container-fluid well">

            <span className="form-inline">
              <label>Recipe Name</label>
              <input className="form-control" type="text" placeholder="Recipe Name" />
              <label>Author</label>
              <input className="form-control" type="text" placeholder="Author" />
            </span>

            <div className="form-inline">

              <span>
                <select className="form-control">
                  <option selected>Recipe Type</option>
                  <option value="1">Pasta</option>
                  <option value="2">Salad</option>
                  <option value="3">Breads</option>
                  <option value="4">Soup</option>
                  <option value="5">Roast</option>
                  <option value="6">Sandwich</option>
                  <option value="7">Dessert</option>
                  <option value="8">Sauces</option>
                </select>
              </span>

              <span className="">
                <input className="form-control" type="number" placeholder="Prep Time (minutes)" />
              </span>

              <span className="">
                <input className="form-control" type="number" placeholder="Cook Time (minutes)" />
              </span>

              <span className="">
                <input className="form-control" type="number" placeholder="Cook Temp (F)" />
              </span>

            </div>

            <div className="form-inline">

              <label>This recipe will make</label>
              <input className="form-control" type="number" placeholder="Amount" />
              <input className="form-control" type="text" placeholder="cookies, loaves, ect." />


            </div>

            <div className="form-inline">

              <input className="form-control" type="number" placeholder="Amount" />

              <select className="form-control">
                <option selected>Unit</option>
                <option value="1">Cups</option>
                <option value="2">Tsp</option>
                <option value="3">Tbsp</option>
                <option value="3">Dash</option>
              </select>

              <input className="form-control" type="text" placeholder="Ingredient Name" />

            </div>

            <div>
              <label>Personal Notes:</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>

            <button className="btn btn-default" type="submit">Save Recipe!</button>
          </form>
        </div>
      </div>
    )
  }
}
