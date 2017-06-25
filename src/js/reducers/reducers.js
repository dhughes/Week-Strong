import { LOGIN } from './actions';

const initialState = {
  user: { id: 123 }
};

function weekStrongApp(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { user: { email: action.email, password: action.password } });
    default:
      return state;
  }
}

/*
  possible ways to split/compose reducers:

  - UI
  - User
  - Program
  - Program exercises
  - Fitness Test
  - Fitness Test rounds
  - Program history
  - Program history rounds
*/
