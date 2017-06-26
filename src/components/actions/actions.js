import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';
import { exercises, program } from '../schemas';

export const REQUEST_EXERCISES = 'REQUEST_EXERCISES';
export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';

export const CHANGE_EXERCISE_GOAL = 'CHANGE_EXERCISE_GOAL';

export const ADD_EXERCISE_TO_PROGRAM = 'ADD_EXERCISE_TO_PROGRAM';
export const REMOVE_EXERCISE_FROM_PROGRAM = 'REMOVE_EXERCISE_FROM_PROGRAM';

export const TOGGLE_PROGRAM_DAY = 'TOGGLE_PROGRAM_DAY';
export const SET_PROGRAM_DURATION = 'SET_PROGRAM_DURATION';
export const POST_PROGRAM = 'POST_PROGRAM';
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

    return fetch('http://demo6463443.mockable.io/exercises')
      .then(response => response.json(), error => console.log('An error occured.', error))
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

function postProgram(program) {
  return { type: POST_PROGRAM, program };
}

function receiveProgram(program) {
  return { type: RECEIVE_PROGRAM, program };
}

export function createProgram(program, callback) {
  return function(dispatch) {
    dispatch(postProgram(program));

    return fetch('http://demo6463443.mockable.io/exercises')
      .then(response => response.json(), error => console.log('An error occured.', error))
      .then(data => normalize(data, program))
      .then(program => dispatch(receiveProgram(program)))
      .then(callback);
  };
}
