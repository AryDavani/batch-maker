import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE
} from './types';

const URL = "https://lill-parse-server.herokuapp.com";
const HEADERS = {
  "X-Parse-Master-Key": "learntocode",
  "X-Parse-Application-Id": "tiygvl"
};

// action to get the recipes from db

export function getRecipes() {
  let recipes = fetch(URL, { headers: HEADERS}).then((response) => {
    response.json().then((result) => {
      console.log('data', result);
      return result;
    })
  });
  return {
    type: GET_RECIPES,
    payload: recipes
  }
}

// action to add recipe to db

export function addRecipe(recipe) {
  let newRecipe = fetch(URL, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: HEADERS
    }).then((response) => {
      response.json();
    });

  return {
    type: ADD_RECIPE,
    payload: newRecipe
  }
}

// action to delete a recipe from db

export function deleteRecipe(recipe) {
  return {
    type: DELETE_RECIPE,
    payload: recipe
  }
}

// action to update a recipe

export function updateRecipe(recipe) {
  return {
    type: UPDATE_RECIPE,
    payload: recipe
  }
}

// action to signup

export function signup(user) {
  console.log('user', user);
  return function() {
    fetch(`${URL}/users`, {
      method: "POST",
      body: user,
      headers: HEADERS
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }
}

export function login(user) {
  
}
