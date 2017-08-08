import {GET_RECIPES, ADD_RECIPE, DELETE_RECIPE} from '../actions/types';


const URL = "https://lill-parse-server.herokuapp.com//classes/AryRecipe";

const HEADERS = {"X-Parse-Master-Key": "learntocode", "X-Parse-Application-Id": "tiygvl"};

let RECIPES = fetch(URL, { headers: HEADERS}).then((response) => {
  response.json().then((result) => {
    console.log('data', result);
    return result;
  })
})

export default function(state=RECIPES, action) {
  switch (action.type) {
    case GET_RECIPES:
      return state;

    case ADD_RECIPE:
      return state;

    case DELETE_RECIPE:
      return state;

    default:
      return state;

  }
}
