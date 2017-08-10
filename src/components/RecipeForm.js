import React, {Component} from 'react';
import {URL, HEADERS} from '../actions/types';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      // recipeName: '',
      // author: '',
      // recipeType: '',
      // prepTime: 0,
      // cookTime: 0,
      // cookTemp: 0,
      // quantity: 0,
      // amountUnit: '',
      steps: [],
      ingredients: [],
      // notes: ''
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleAddIngredient = this._handleAddIngredient.bind(this);
  }

  _handleAddIngredient(event){
    let ingredients = this.state.ingredients;

    let ingredient = {
      amount: this.state.amount,
      unit: this.state.unit,
      name: this.state.name
    };

    ingredients.push(ingredient);

    console.log("state here", this.state);
  }

  _handleChange(event){
    let object = {};
    object[event.target.name] = event.target.value;

    this.setState(object);
    console.log(this.state);
  }

  _handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted");

    let object = {
      recipeName: event.target.recipeName.value,
      author: event.target.author.value,
      recipeType: event.target.recipeType.value,
      prepTime: Number(event.target.prepTime.value),
      cookTime: Number(event.target.cookTime.value),
      cookTemp: Number(event.target.cookTemp.value),
      quantity: Number(event.target.quantity.value),
      amountUnit: event.target.amountUnit.value,
      steps: [],
      notes: event.target.notes.value
    };
    console.log(object);

    fetch(`${URL}/classes/AryRecipe`, {
        method: "POST",
        body: JSON.stringify(object),
        headers: HEADERS
      }).then((response) => {
        console.log("response", response);
      }).catch(err => {
        console.log("error", err);
    });

    event.target.reset();
  }

  render(){
    let listOfIngredients = this.state.ingredients.map((item, index) => {
      return (
        <div key={ index }>
          <span>{ item.amount }</span>
          <span>{ item.unit }</span>
          <span>{ item.name }</span>
          <button type="button" className="btn btn-default" onClick={ this._handleDeleteIngredient }>-</button>
        </div>
      )
    });

    return (
      <div id="recipeForm" className="center-center">
        <div>
          <h1 className="text-center">Add a Recipe!</h1>
          <form onSubmit={ this._handleFormSubmit } className="container-fluid well">

            <span className="form-inline">
              <label>Recipe Name</label>
              <input name="recipeName" className="form-control" type="text" placeholder="Recipe Name" />
              <label>Author</label>
              <input name="author" className="form-control" type="text" placeholder="Author" />
            </span>

            <div className="form-inline">
              <span>
                <select onChange={ this._handleChange } name="recipeType" className="form-control">
                  <option selected>Recipe Type</option>
                  <option value="pasta">Pasta</option>
                  <option value="salad">Salad</option>
                  <option value="bread">Bread</option>
                  <option value="soup">Soup</option>
                  <option value="roast">Roast</option>
                  <option value="sandwich">Sandwich</option>
                  <option value="dessert">Dessert</option>
                  <option value="sauce">Sauce</option>
                </select>
              </span>

              <span>
                <input name="prepTime" className="form-control" type="number" placeholder="Prep Time (minutes)" />
              </span>

              <span>
                <input name="cookTime" className="form-control" type="number" placeholder="Cook Time (minutes)" />
              </span>

              <span>
                <input name="cookTemp" className="form-control" type="number" placeholder="Cook Temp (F)" />
              </span>
            </div>

            <div className="form-inline">
              <label>This recipe will make</label>
              <input name="quantity" className="form-control" type="number" placeholder="Quantity" />
              <input name="amountUnit" className="form-control" type="text" placeholder="cookies, loaves, ect." />
            </div>


            { listOfIngredients }

            <div className="form-inline" onChange={ this._handleChange }>
              <label>Add ingredient</label>
              <input name="amount" className="form-control" type="number" placeholder="Amount" />

              <select name="unit" className="form-control">
                <option selected>Unit</option>
                <option value="cups">Cups</option>
                <option value="tsp">Tsp</option>
                <option value="tbsp">Tbsp</option>
                <option value="dash">Dash</option>
              </select>

              <input name="name" className="form-control" type="text" placeholder="Ingredient Name" />

              <button type="button" className="btn btn-default" onClick={ this._handleAddIngredient }>+</button>

            </div>

            <textarea onChange={ this._handleChange } name="directions" className="form-control" rows="3" placeholder="What directions go with this step?"></textarea>

            <button className="btn btn-default" type="button">Add Another Step</button>

            <div>
              <hr/>
              <label>Personal Notes:</label>
              <textarea name="notes" className="form-control" rows="3"></textarea>
            </div>

            <button className="btn btn-default" type="submit">Save Recipe!</button>
          </form>
        </div>
      </div>
    )
  }
}
