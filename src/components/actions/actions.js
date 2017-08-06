import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import { exercises as exercisesSchema, user as userSchema, program as programSchema } from '../schemas';

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

export const SAVING_NEW_USER = 'SAVING_NEW_USER';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';

export const EDIT_LOGIN_PAGE_FIELD = 'EDIT_LOGIN_PAGE_FIELD';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';

export const RECEIVE_PROGRAM = 'RECEIVE_PROGRAM';

function requestExercises() {
  return { type: REQUEST_EXERCISES };
}

function receiveExercises(exercises) {
  return { type: RECEIVE_EXERCISES, exercises };
}

export function fetchExercises() {
  return function(dispatch) {
    dispatch(requestExercises());

    return fetch('http://localhost:8080/exercises').then(
      response => {
        if (response.status === 200) {
          response
            .json()
            .then(data => normalize(data, exercisesSchema))
            .then(exercises => dispatch(receiveExercises(exercises)));
        } else {
          // todo: handle non-success. perhaps broadcast a message so that the exercise list doesn't look like it's loading forever
          console.log(`Received ${response.status} when fetching exercises.`);
        }
      },
      // todo: find a way to handle this
      error => console.log('An error occured fetching exercises.', error)
    );
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

      return fetch(`http://localhost:8080/email/available?email=${email}`).then(
        response => {
          if (response.status === 200) {
            response.json().then(available => dispatch(validatedEmail(available)));
          } else {
            // todo: handle the situation where this request fails. perhaps show a message saying there is a big-bad problem?
            console.log(`Received ${response.status} when validating email.`);
          }
        },
        // todo: find a way to handle this
        error => console.log('An error occured validating email.', error)
      );
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
    dispatch(savingNewUser());

    fetch(`http://localhost:8080/user`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    }).then(
      response => {
        if (response.status === 200) {
          response.json().then(data => normalize(data, userSchema)).then(data => {
            dispatch(receivedNewUser(data));
            dispatch(push('/'));
          });
        } else {
          // todo: handle situations where the user isn't created successfully
          console.log(`Received ${response.status} when posting new user.`);
        }
      },
      // todo: find a way to handle this
      error => console.log('An error occured saving a new user profile.', error)
    );
  };
}

function savingNewUser() {
  return { type: SAVING_NEW_USER };
}

function receivedNewUser(user) {
  return { type: RECEIVE_NEW_USER, user };
}

export function editLoginPageFiled(name, value) {
  return { type: EDIT_LOGIN_PAGE_FIELD, name, value };
}

export function login(email, password) {
  return function(dispatch) {
    //dispatch(loggingIn());

    var form = new FormData();
    form.append('email', email);
    form.append('password', password);

    return fetch('http://localhost:8080/user/authenticate', {
      method: 'post',
      body: form,
      headers: new Headers({
        Accept: 'application/json'
      })
    }).then(
      response => {
        if (response.status === 200) {
          // the user is authenticated!
          response.json().then(data => {
            // update the our normalized data
            dispatch(loginSucceeded(normalize(data, userSchema)));
            // redirect to the landing page
            dispatch(push('/'));
          });
        } else {
          dispatch(loginFailed());
          console.log('Received ' + response.status + ' from project sync.');
        }
      },
      // todo: find a way to handle this
      error => console.log('An error occured saving a new user profile.', error)
    );
  };
}

function loginFailed() {
  return { type: LOGIN_FAILED };
}

function loginSucceeded(user) {
  return { type: LOGIN_SUCCEEDED, user };
}

export function loadProgram(userId) {
  return function(dispatch) {
    //dispatch(loadingProgram());

    fetch(`http://localhost:8080/user/${userId}/program/latest`).then(
      response => {
        if (response.status === 200) {
          response
            .json()
            // normalize the project
            .then(data => normalize(data, programSchema))
            // dispatch appropriate events
            .then(data => {
              dispatch(receivedProgram(data));
              // dispatch(push('/'));
            });
        } else {
          // todo: handle situations where the user isn't created successfully
          console.log(`Received ${response.status} when posting new user.`);
        }
      },
      // todo: find a way to handle this
      error => console.log('An error occured saving a new user profile.', error)
    );
  };
}

function receivedProgram(program) {
  return { type: RECEIVE_PROGRAM, program };
}
