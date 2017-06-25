import { combineReducers } from 'redux';
import {
  REQUEST_EXERCISES,
  RECEIVE_EXERCISES,
  CHANGE_EXERCISE_GOAL,
  ADD_EXERCISE_TO_PROGRAM,
  REMOVE_EXERCISE_FROM_PROGRAM,
  TOGGLE_PROGRAM_DAY,
  SET_PROGRAM_DURATION
} from '../actions/actions';

// this relates to loading lists of exercises
function exerciseList(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_EXERCISES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_EXERCISES:
      return Object.assign({}, state, { isFetching: false, items: action.exercises.result });
    default:
      return state;
  }
}

// this relates to creating a program
function createProgram(
  state = { exercises: {}, selectionCount: 0, selectedDays: [], weeks: 6, difficulty: 40 },
  action
) {
  let exercises;
  switch (action.type) {
    case SET_PROGRAM_DURATION:
      return Object.assign({}, state, { weeks: action.weeks });
    case TOGGLE_PROGRAM_DAY:
      if (state.selectedDays.includes(action.day)) {
        return Object.assign({}, state, { selectedDays: state.selectedDays.filter(day => day !== action.day) });
      } else {
        console.log('add');
        return Object.assign({}, state, { selectedDays: [...state.selectedDays, action.day] });
      }

    case ADD_EXERCISE_TO_PROGRAM:
      exercises = Object.assign({}, state.exercises, {
        [action.exerciseId]: action.goal
      });
      console.log(exercises.length);
      return Object.assign({}, state, {
        exercises,
        selectionCount: Object.keys(exercises).length
      });

    case REMOVE_EXERCISE_FROM_PROGRAM:
      exercises = Object.keys(state.exercises)
        .filter(id => parseInt(id, 10) !== action.exerciseId)
        .reduce((acc, id) => Object.assign({}, acc, { [id]: state.exercises[id] }), {});

      return Object.assign({}, state, {
        exercises,
        selectionCount: Object.keys(exercises).length
      });
    default:
      return state;
  }
}

// this relates to viewing a specific exercises
function exercise(state = { goals: {} }, action) {
  let goals;
  switch (action.type) {
    case RECEIVE_EXERCISES:
      goals = action.exercises.result.reduce((acc, id) => {
        acc[id] = action.exercises.entities.exercises[id].defaultGoal;
        return acc;
      }, {});
      return Object.assign({}, state, { goals });

    case CHANGE_EXERCISE_GOAL:
      goals = Object.assign({}, state.goals, { [action.exerciseId]: action.goal });
      return Object.assign({}, state, { goals });
    default:
      return state;
  }
}

export default combineReducers({ exerciseList, createProgram, exercise });
