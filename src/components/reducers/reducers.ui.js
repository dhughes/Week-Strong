import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import {
  REQUEST_EXERCISES,
  RECEIVE_EXERCISES,
  CHANGE_EXERCISE_GOAL,
  ADD_EXERCISE_TO_PROGRAM,
  REMOVE_EXERCISE_FROM_PROGRAM,
  TOGGLE_PROGRAM_DAY,
  SET_PROGRAM_DURATION,
  EDIT_CREATE_PROFILE_FIELD,
  VALIDATING_NEW_EMAIL,
  VALIDATED_EMAIL,
  VALIDATED_CREATE_PROFILE_FIELD,
  EDIT_LOGIN_PAGE_FIELD,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED,
  RECEIVE_PROGRAM
} from '../actions/actions';

// this relates to the user's landing page
// we're assuming that we will be fetching the user's latest program as soon as the landing page loads.
function landingPage(state = { isFetching: true }, action) {
  switch (action.type) {
    case RECEIVE_PROGRAM:
      return merge({}, state, { isFetching: false });
    default:
      return state;
  }
}

// this relates to the login page
function loginPage(state = { email: '', password: '', isFetching: false, loginFailed: false }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return merge({}, state, { password: '', isFetching: false, loginFailed: false });
    case LOGIN_FAILED:
      return merge({}, state, { password: '', isFetching: false, loginFailed: true });
    case EDIT_LOGIN_PAGE_FIELD:
      return merge({}, state, { [action.name]: action.value });
    default:
      return state;
  }
}

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
        return Object.assign({}, state, { selectedDays: [...state.selectedDays, action.day] });
      }

    case ADD_EXERCISE_TO_PROGRAM:
      exercises = Object.assign({}, state.exercises, {
        [action.exerciseId]: action.goal
      });

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
        acc[id] = action.exercises.entities.exercise[id].defaultGoal;
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

// this relates to creating a Profile
function createProfile(
  state = {
    name: '',
    email: '',
    password: '',
    validation: {
      name: { validating: false, valid: undefined },
      email: { validating: false, valid: undefined },
      password: { validating: false, valid: undefined }
    }
  },
  action
) {
  let validation;
  switch (action.type) {
    case VALIDATED_CREATE_PROFILE_FIELD:
      validation = Object.assign({}, state.validation, {
        [action.name]: { validating: false, valid: action.isValid }
      });

      return Object.assign({}, state, { validation });

    case VALIDATED_EMAIL:
      validation = Object.assign({}, state.validation, {
        email: { validating: false, valid: action.isValidEmail }
      });
      return Object.assign({}, state, { validation });

    case VALIDATING_NEW_EMAIL:
      validation = Object.assign({}, state.validation, {
        email: { validating: true, valid: undefined }
      });

      return Object.assign({}, state, { validation });

    case EDIT_CREATE_PROFILE_FIELD:
      validation = Object.assign({}, state.validation, {
        [action.name]: { validating: false, valid: undefined }
      });
      return Object.assign({}, state, {
        [action.name]: action.value,
        validation
      });

    default:
      return state;
  }
}

export default combineReducers({ exerciseList, createProgram, exercise, createProfile, loginPage, landingPage });
