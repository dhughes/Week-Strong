import { combineReducers } from 'redux';
import ui from './reducers.ui.js';
import merge from 'lodash/merge';
import { RECEIVE_EXERCISES, RECEIVE_NEW_USER, LOGIN_SUCCEEDED } from '../actions/actions';

// this reducer relates to who the current user is.
// its state is just a number indicating an entity
function user(state = null, action) {
  switch (action.type) {
    case RECEIVE_NEW_USER:
      return action.user.result;
    default:
      return state;
  }
}

function entities(
  state = {
    user: [],
    exercise: [],
    goal: [],
    program: []
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case RECEIVE_NEW_USER:
      return merge({}, state, action.user.entities);

    case RECEIVE_EXERCISES:
      return merge({}, state, action.exercises.entities);

    default:
      return state;
  }
}

const weekStrongApp = combineReducers({ entities, user, ui });

export default weekStrongApp;
