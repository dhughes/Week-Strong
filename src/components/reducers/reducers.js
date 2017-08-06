import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './reducers.ui.js';
import merge from 'lodash/merge';
import { RECEIVE_EXERCISES, RECEIVE_NEW_USER, LOGIN_SUCCEEDED, RECEIVE_PROGRAM } from '../actions/actions';

// this reducer relates to who the current user is.
// its state is just a number indicating an entity
function user(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case RECEIVE_NEW_USER:
      return action.user.result;
    default:
      return state;
  }
}

// this reducer relates to the user's current program
function program(state = null, action) {
  switch (action.type) {
    case RECEIVE_PROGRAM:
      return action.program.result;
    default:
      return state;
  }
}

function entities(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case RECEIVE_NEW_USER:
      return merge({}, state, action.user.entities);

    case RECEIVE_EXERCISES:
      return merge({}, state, action.exercises.entities);

    case RECEIVE_PROGRAM:
      return merge({}, state, action.program.entities);

    default:
      return state;
  }
}

const weekStrongApp = combineReducers({ entities, user, program, ui, routing: routerReducer });

export default weekStrongApp;
