import { schema } from 'normalizr';
import merge from 'lodash/merge';
import { LocalDate } from 'js-joda';

// schema for exercises
const exercise = new schema.Entity('exercise');
const exercises = new schema.Array(exercise);

// schema for goal
const goal = new schema.Entity('goal', {
  exercise: exercise
});
const goals = new schema.Array(goal);

// schema for fitness test rounds
const testRound = new schema.Entity('testRound');
const testRounds = new schema.Array(testRound);

// schema for fitness test
const test = new schema.Entity(
  'test',
  {
    rounds: testRounds
  },
  {
    processStrategy: (value, parent, key) => {
      return merge({}, value, { date: LocalDate.parse(`${value.date}`) });
    }
  }
);
// schema for workout rounds
const workoutRound = new schema.Entity('workoutRound');
const workoutRounds = new schema.Array(workoutRound);

// schema for workout
const workout = new schema.Entity(
  'workout',
  {
    rounds: workoutRounds
  },
  {
    processStrategy: (value, parent, key) => {
      return merge({}, value, { date: LocalDate.parse(`${value.date}`) });
    }
  }
);
const workouts = new schema.Array(workout);

// schema for events
const event = new schema.Entity('event');
const events = new schema.Array(event);

// schema for program
const program = new schema.Entity(
  'program',
  {
    goals: goals,
    test: test,
    workouts: workouts,
    history: events
  },
  {
    processStrategy: (value, parent, key) => {
      // goals don't have their own ID. This generates a unique id for the goal
      // based on the program's id and the exercise's id.
      const goals = value.goals.map(goal => merge({}, goal, { id: `${value.id}-${goal.exercise.id}` }));
      const history = value.history.map(event => merge({}, event, { id: `${value.id}-${event.date}` }));
      return merge({}, value, { goals, history, created: LocalDate.parse(`${value.created}`) });
    }
  }
);

// schema for user
const user = new schema.Entity('user', {
  program: program
});

export { exercise, exercises, goal, goals, program, user };
