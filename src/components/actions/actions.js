import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';
import { exercises } from '../schemas';

export const REQUEST_EXERCISES = 'REQUEST_EXERCISES';
export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';

export const CHANGE_EXERCISE_GOAL = 'CHANGE_EXERCISE_GOAL';

export const ADD_EXERCISE_TO_PROGRAM = 'ADD_EXERCISE_TO_PROGRAM';
export const REMOVE_EXERCISE_FROM_PROGRAM = 'REMOVE_EXERCISE_FROM_PROGRAM';

export const TOGGLE_PROGRAM_DAY = 'TOGGLE_PROGRAM_DAY';
export const SET_PROGRAM_DURATION = 'SET_PROGRAM_DURATION';

export const EDIT_CREATE_PROFILE_FIELD = 'EDIT_CREATE_PROFILE_FIELD';
export const VALIDATE_NEW_EMAIL = 'VALIDATE_NEW_EMAIL';
export const VALIDATING_NEW_EMAIL = 'VALIDATING_NEW_EMAIL';
export const VALIDATED_EMAIL = 'VALIDATED_EMAIL';
export const VALIDATED_CREATE_PROFILE_FIELD = 'VALIDATED_CREATE_PROFILE_FIELD';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const SAVED_USER = 'SAVED_USER';

function requestExercises() {
  return { type: REQUEST_EXERCISES };
}

function receiveExercises(exercises) {
  return { type: RECEIVE_EXERCISES, exercises };
}

export function fetchExercises() {
  return function(dispatch) {
    dispatch(requestExercises());

    return fetch('http://localhost:8080/exercises')
      .then(response => response.json(), error => console.log('An error occured fetching exercises.', error))
      .then(data => normalize(data, exercises))
      .then(exercises => dispatch(receiveExercises(exercises)));
  };
}

export function changeExerciseGoal(exerciseId, goal) {
  return { type: CHANGE_EXERCISE_GOAL, exerciseId, goal };
}

export function addExerciseToProgram(exerciseId, goal) {
  return { type: ADD_EXERCISE_TO_PROGRAM, exerciseId, goal };
}

export function removeExerciseFromProgram(exerciseId) {
  return { type: REMOVE_EXERCISE_FROM_PROGRAM, exerciseId };
}

export function toggleProgramDay(day) {
  return { type: TOGGLE_PROGRAM_DAY, day };
}

export function setProgramDuration(weeks) {
  return { type: SET_PROGRAM_DURATION, weeks };
}

export function editCreateProfileFiled(name, value) {
  return { type: EDIT_CREATE_PROFILE_FIELD, name, value };
}

let timerId = null;

export function validateNewEmail(email) {
  return function(dispatch) {
    clearTimeout(timerId);

    // wait 1 second before validating the email remotely to keep from hammering the server with each keypress.
    timerId = setTimeout(() => {
      console.log('validate email now...');

      dispatch(validatingNewEmail());

      return fetch(`http://localhost:8080/available?email=${email}`)
        .then(response => response.json(), error => console.log('An error occured validating email.', error))
        .then(available => dispatch(validatedEmail(available)));
    }, 750);
  };
}

function validatingNewEmail() {
  return { type: VALIDATING_NEW_EMAIL };
}

export function validatedEmail(isValidEmail) {
  return { type: VALIDATED_EMAIL, isValidEmail };
}

export function validatedProfileField(name, isValid) {
  return { type: VALIDATED_CREATE_PROFILE_FIELD, name, isValid };
}

export function createNewUser(user) {
  return function(dispatch) {
    fetch(`http://localhost:8080/user`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json(), error => console.log('An error occured saving a new user profile.', error))
      .then(user => dispatch(savedUser(user)));

    return { type: CREATE_NEW_USER, user };
  };
}

function savedUser(user) {
  console.log('saved user!!');
  return { type: SAVED_USER, user };
}
