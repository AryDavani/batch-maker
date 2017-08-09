import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  recipes: RecipeReducer,
  auth: AuthReducer
});

export default rootReducer;
