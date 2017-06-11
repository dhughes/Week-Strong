import Workout from '../workout';

test('Workout instantiates', () => {
  const workout = new Workout();
  expect(workout).not.toBeNull();
});

test('Workout has a date', () => {
  const date = new Date(2017, 5, 1); // months start at 0
  const workout = new Workout(date);
  expect(workout.date).toEqual(date);
});

test('Workout has a day', () => {
  const date = new Date(2017, 5, 1);
  const workout = new Workout(date, 1);
  expect(workout.day).toEqual(1);
});

test('Workout is completed', () => {
  const date = new Date(2017, 5, 1);
  const workout = new Workout(date, 1, true);
  expect(workout.completed).toEqual(true);
});

test('Workout defaults to not completed', () => {
  const date = new Date(2017, 5, 1);
  const workout = new Workout(date, 1);
  expect(workout.completed).toEqual(false);
});

test('Workout does not automatically restore broken streak', () => {
  const date = new Date(2017, 5, 1);
  const workout = new Workout(date, 1);
  expect(workout.restored).toEqual(false);
});

test('Workout day defaults to undefined', () => {
  const date = new Date(2017, 5, 1);
  const workout = new Workout(date);
  expect(workout.day).toEqual(undefined);
});
