import { AUTH_USER } from '../actions/types';

const INITIAL_STATE = 0;

export default function( state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true};
      break;
    default:
      return state;
  }
}
