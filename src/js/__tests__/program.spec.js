import Program from '../program';

const workoutDays = [1, 3, 5];
const weeks = 6;
const startDate = new Date(2017, 5, 1); // months start at 0
const today = new Date(2017, 5, 13);

test('Program instantiates', () => {
  const program = new Program();
  expect(program).not.toBeNull();
});

test('Program knows its start date.', () => {
  const program = new Program(workoutDays, weeks, startDate, today);
  expect(program.startDate).toEqual(startDate);
});

test('Program knows what days are workout days', () => {
  const program = new Program(workoutDays, weeks, startDate, today); // Monday, Wednesday, Friday
  expect(program.workoutDays).toEqual(workoutDays);
});

test('Program knows what today is (when told)', () => {
  const program = new Program(workoutDays, weeks, startDate, today);
  expect(program.today).toEqual(today);
});

test('Program knows total number of workout days in program', () => {
  const program = new Program(workoutDays, weeks, startDate, today);
  expect(program.totalWorkoutDays).toEqual(18);
});

test('Program has empty history', () => {
  const history = [];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toEqual(0);
});

test('Program has a 4 day streak', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true }
  ];
  const today = new Date(2017, 5, 12);
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(4);
});

test('Program has a 0 day/broken streak', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(0);
});

test('Program has a 1 day streak after a broken streak', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 13), day: 5, completed: true }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(1);
});

test('Program has a 5 day streak after a restored streak', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12), restored: true },
    { date: new Date(2017, 5, 13), day: 5, completed: true }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(5);
});

test('Program has a 1 day streak after a restored and then lost streak', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12), restored: true }, // restored once
    { date: new Date(2017, 5, 13), day: 5, completed: true },
    { date: new Date(2017, 5, 15) }, // not restored again
    { date: new Date(2017, 5, 18), day: 6, completed: true }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(1);
});

test('Program has a 6 day streak after two restored streaks', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12), restored: true }, // restored once
    { date: new Date(2017, 5, 13), day: 5, completed: true },
    { date: new Date(2017, 5, 15), restored: true }, // restored again
    { date: new Date(2017, 5, 18), day: 6, completed: true }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toBeGreaterThan(0);
  expect(program.streak).toEqual(6);
});

test('Program can restore streak after 1 missed workout', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.canRestoreStreak()).toEqual(true);
});

test('Program cannot restore streak after 2 missed workout', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.canRestoreStreak()).toEqual(false);
});

test('Program identifies missed days', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.history.length).toEqual(5);
  const lastWorkout = program.history[program.history.length - 1];
  expect(lastWorkout.completed).toEqual(false);
  expect(lastWorkout.restored).toEqual(false);
});

test('Program restores 1-day broken streak.', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  program.restoreStreak();
  expect(program.streak).toEqual(4);
});

test('Program does not restore 2 missed days broken streak.', () => {
  // mock console
  global.console.warn = jest.fn();

  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  program.restoreStreak();
  expect(console.warn).toBeCalled();
  expect(program.streak).toEqual(0);
});

test('Program knows how 1 workout days has been missed.', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.missedWorkoutDays).toEqual(2);
});

test('Program can continue after 2 missed workouts', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.canContinue()).toEqual(true);
});

test("Program can't continue after 3 missed workouts", () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) },
    { date: new Date(2017, 5, 16) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  expect(program.canContinue()).toEqual(false);
});

xtest('Program can continue from the previous week after 3 missed workouts', () => {
  const history = [
    { date: new Date(2017, 5, 2), day: 1, completed: true },
    { date: new Date(2017, 5, 5), day: 2, completed: true },
    { date: new Date(2017, 5, 7), day: 3, completed: true },
    { date: new Date(2017, 5, 9), day: 4, completed: true },
    { date: new Date(2017, 5, 12) },
    { date: new Date(2017, 5, 14) },
    { date: new Date(2017, 5, 16) }
  ];
  const program = new Program(workoutDays, weeks, startDate, today, history);
  program.continueAtPreviousWeek();
});

/*
I start the app.
Today is Tuesday June 13th.
My program kicked off Thursday, June 1.
I'm supposed to workout on Mon, Wed, Fri.
I've selected a 6 week program.

The program looks up my historical data via an API:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
}

So far I have a 4 day streak.

The program needs to identify missed workout days since the last time started.
Looping forward from 6/9 + 1 to today-1, 6/12....

  is Sat 6/10 a workout day? no.
  is Sun 6/11 a workout day? no
  is Mon 6/12 a workout day? yes!!

A new record is created and saved. My historical data now looks like:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}, // missed monday. day is undefined since it doesn't count as a day of the program.
}

My streak is broken. Streak is now 0. I choose not to restore my streak.

Today is a workout day when any of:
  Today is one of my normal workout days, Mon, Wed, or Fri
  The last recorded workout was missed (missed days are determined before we'd
  check this, as documented above)

So, I do my workout and a new record is saved:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}, // missed monday. day is undefined since it doesn't count as a day of the program.
  6/13/2017: {completed: true, day: 5}, // day 5 Tues completed
}

My streak is now 1.

I return to the program on Wed 6/14. My data is still as above. The program knows
today is a workout day since it's Wed. I do my workout. My history now looks like this:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}, // missed monday. day is undefined since it doesn't count as a day of the program.
  6/13/2017: {completed: true, day: 5}, // day 5 tues completed
  6/14/2017: {completed: true, day: 6}, // day 6 wed completed
}

My streak is 2.

Next, I miss fri and the next monday. The next time I open the app it's Tues 6/20.

As before, the program loops forward from the last record + 1 (6/15) to today-1 (6/19).
It identifies days that should be workout days, Fri 6/16 and Monday 6/19. My data
now looks like:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}, // missed monday. day is undefined since it doesn't count as a day of the program.
  6/13/2017: {completed: true, day: 5}, // day 5 tues completed
  6/14/2017: {completed: true, day: 6}, // day 6 wed completed
  6/16/2017: {completed: false, day: undefined}, // missed day!
  6/19/2017: {completed: false, day: undefined}, // missed day!
}

The app notices that the last two workout days were missed and I am prevented
from doing my workout.

My streak is 0. I can't restore my streak since I've missed more than one day.

I can miss up to three days and choose to rollback to restart from a week ago. I
choose to restart from a week ago, returning me to day 4. (Last workout day (6) - 2 = 4).

I do my workout and my history becomes:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}, // missed monday. day is undefined since it doesn't count as a day of the program.
  6/13/2017: {completed: true, day: 5}, // day 5 tues completed
  6/14/2017: {completed: true, day: 6}, // day 6 wed completed
  6/16/2017: {completed: false, day: undefined}, // missed day!
  6/19/2017: {completed: false, day: undefined}, // missed day!
  6/20/2017: {completed: true, day: 4}, // day 4 (restart from a week ago) tues completed
}

My streak is now 1.

Since I am doing a six week program, the app knows I'm done when the last
workout's day is 18.

----

Let's rewind a bit for a different scenario. Today is 6/13. I missed 6/12,
breaking a 4 day streak.

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined}
}

This was a planned missed day. I feel like my streak should not be considered
broken so I pay the 0.99 to restore my streak. The data no looks like this:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
}

My streak is now 4 again.

I do my workout, the data looks like this:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
  6/13/2017: {completed: true, day: 5}, // day 4 fri completed
}

My streak is 5.

I do the same thing again (skip a day, pay money).

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
  6/13/2017: {completed: true, day: 5}, // day 4 fri completed
  6/14/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
}

My streak is still 5. I workout:

history = {
  6/2/2017: {completed: true, day: 1}, // day 1 fri completed
  6/5/2017: {completed: true, day: 2}, // day 2 mon completed
  6/7/2017: {completed: true, day: 3}, // day 3 wed completed
  6/9/2017: {completed: true, day: 4}, // day 4 fri completed
  6/12/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
  6/13/2017: {completed: true, day: 5}, // day 4 tues completed
  6/14/2017: {completed: false, day: undefined, restore: true} // indicates that the streak should not break on this
  6/15/2017: {completed: true, day: 6}, // day 4 thurs completed
}

*/
