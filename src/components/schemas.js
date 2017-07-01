import { schema } from 'normalizr';

// schema for exercises
const exercise = new schema.Entity('exercise');
const exercises = [exercise];

// schema for goal
const goal = new schema.Entity('goal', {
  exercise: exercise
});

// schema for program
const program = new schema.Entity('program', {
  goals: [goal]
});

// schema for user
const user = new schema.Entity('user', {
  program: program
});

export { exercises, user };
