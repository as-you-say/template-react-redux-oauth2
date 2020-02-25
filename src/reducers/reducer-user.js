import {
  GET_CURRENT_USER,
  LOGIN
} from '../actions/_index';

const initialState = {
  currentUser: {}
}

export default function(state = initialState, action){
  switch (action.type) {
    case GET_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.payload.data});
    case LOGIN:
      return state;
    default:
      return state;
  }
}