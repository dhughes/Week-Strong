// action types

export const LOGIN = 'LOGIN';
export const CREATE_PROFILE = 'CREATE_PROFILE';

export const ADD_EXERCISE_TO_PROGRAM = 'ADD_EXERCISE_TO_PROGRAM';
export const REMOVE_EXERCISE_FROM_PROGRAM = 'REMOVE_EXERCISE_FROM_PROGRAM';

// action creators

export function addExerciseToProgram(exerciseId, goal) {
  return { type: ADD_EXERCISE_TO_PROGRAM, exerciseId, goal };
}

export function removeExerciseFromProgram(exerciseId) {
  return { type: REMOVE_EXERCISE_FROM_PROGRAM, exerciseId };
}

export function login(email, password) {
  return { type: LOGIN, email, password };
}

export function CreateProfile(name, email, password) {
  return { type: CREATE_PROFILE, name, email, password };
}

/*
  possible structure for state (in a more normalized format):

  user:
    id: PK
    name: string
    email: string
    password: string
  day:
    id: PK (0 = sunday, 1 = monday, etc)
    name: string (mon, tues, etc)
  exercise:
    id: PK
    name: string
    image: string
    defaultGoal: int,
    minimumGoal: int,
    goalStep: int,
    description: string
  program:
    id: PK
    userId: FK to user.id
    duration: int (number of weeks of program),
    completedThroughDay: int (the last completed day of the program, up to duration * 3. This is how we keep track of our position in the program.)
    streak: int,  (this is the number of consecutive scheduled workout days the user has completed)
    createdDate: date,
    fitnessTestDate: date
  programDay: (linking) (consider three fields in program??)
    programId: PK, FK to program.id
    dayId: PK, FK to day.id
  programExercise: (linking) (consider four fields in program??)
    programId: PK, FK to program.id
    exerciseId: PK, FK to exercise.id
    goal: int
  fitnessTest:
    id: PK,
    programId: FK to program.id,
    date: date
  fitnessTestExerciseRound:
    fitnessTestId: PK, FK to fitnessTest.id,
    exerciseId: PK, FK to exerciseId,
    round: PK,
    reps: int (the number of reps completed),
  programHistory:
    id: PK,
    programId: FK to program.id,
    date: date
  programHistoryExerciseRound:
    programHistoryId: PK, FK to programHistory.id,
    exerciseId: PK, FK to exercise.id,
    round: PK,
    reps: int (determined by algorithm or entered manually in last round.)


Streaks are stored as a field in the program table. It will simply be incremented
each time the user works out.

If a user opens their program and has a streak greater than 0, but has missed a
workout day, then the app will show their streak as 0 and give them the chance
to pay to restore their streak to its previous value. If they pay, the streak
remains. If not, the streak is reset to 0.

If the user opens their program and has a completedThroughDay greater than 0, but
has missed two or three (but no more) workout days, then the app will show their
streak as 0 and show a message saying "game over", but giving them the option to
restart from three workouts ago. If they pay, the completedThroughDay is set to
completedThroughDay-3 and streak is set to zero. Otherwise, the program is ended.

A workout day is determined to be missed if there was a scheduled day between today
and the last recorded workout day.

I assume I'll need a way to record financial transactions and their purpose.

What about logged-in/out?

*/
