import { schema } from 'normalizr';
import merge from 'lodash/merge';

// schema for exercises
const exercise = new schema.Entity('exercise');
const exercises = [exercise];

// schema for goal
const goal = new schema.Entity('goal', {
  exercise: exercise
});
const goals = [goal];

// schema for program
const program = new schema.Entity(
  'program',
  {
    goals: goals
  },
  {
    processStrategy: (value, parent, key) => {
      // goals don't have their own ID. This generates a unique id for the goal
      // based on the program's id and the exercise's id.
      const goals = value.goals.map(goal => merge({}, goal, { id: `${value.id}-${goal.exercise.id}` }));
      return merge({}, value, { goals, created: new Date(`${value.created} 0:0:0:`) });
    }
  }
);

// schema for user
const user = new schema.Entity('user', {
  program: program
});

export { exercise, exercises, goal, goals, program, user };
