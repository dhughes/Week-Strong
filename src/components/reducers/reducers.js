import { combineReducers } from 'redux';
import ui from './reducers.ui.js';
import merge from 'lodash/merge';
import { RECEIVE_EXERCISES, RECEIVE_NEW_USER } from '../actions/actions';

// this reducer relates to who the current user is.
// its state is just a number indicating an entity
function user(state = null, action) {
  switch (action.type) {
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

// eslint-disable-next-line
let exampleState = {
  user: 123,
  program: undefined,
  // this section relates to UI-specific state
  ui: {
    exercise: {
      goals: { '1': 55, '2': 43 }
    },
    createProgram: {
      exercises: { '1': 55, '2': 43 }
    },
    exercises: {
      isFetching: false,
      items: [321]
    }
  },
  // everything below here are normalized entities
  entities: {
    users: {
      123: {
        id: 123,
        name: 'Doug Hughes',
        email: 'doug@doughughes.net'
      }
    },
    programs: {
      11: {
        id: 11,
        userId: 123
        // fitness test?
      }
    },
    programGoals: {
      122: {
        id: 122,
        exerciseId: 321,
        goal: 55
      }
    },
    exercises: {
      321: {
        id: 123,
        name: 'Pullups',
        image: '/path/to/img',
        defaultGoal: 20,
        minimumGoal: 4,
        goalStep: 2,
        description: 'Some text goes here....'
      }
      // ...
    }
  }
};
