import {
  GET_USERS
} from '../actions/_index'

export default function counter(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}