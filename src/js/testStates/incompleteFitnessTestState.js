export default {
  loggedIn: false,
  user: {
    id: 123,
    name: 'Doug Hughes',
    email: 'doug@doughughes.net'
  },
  program: {
    selectedDays: [1, 3, 5],
    days: 18,
    startDate: null, // start date is the day the fitness test was completed(????)
    currentWeek: null, // current week is null since we haven't taken the fitness test yet
    completedDay: 0, // no days have been completed since the test hasn't even been taken
    streak: 0, // no workouts, no streak
    fitnessTest: {
      compete: false
    },
    exercises: [{ id: 1, quantity: 20 }, { id: 4, quantity: 100 }],
    stats: [
      {
        name: 'Pullups',
        total: 0 // no workouts, no pullups
      },
      {
        name: 'Pushups',
        total: 0 // no workouts yet
      }
    ]
  },
  today: new Date(2017, 5, 3),
  // this will be set based on completed workouts. If I've completed today's workout then the next workout is in the future
  nextWorkoutDay: null,
  exercises: [
    {
      id: 1,
      name: 'Pullups',
      image: '/img/pullups.jpg'
    },
    {
      id: 2,
      name: 'Pushups',
      image: '/img/pushups.jpg'
    },
    {
      id: 3,
      name: 'Situps',
      image: '/img/situps.jpg'
    },
    {
      id: 4,
      name: 'Squats',
      image: '/img/squats.jpg'
    }
  ],
  history: [] // history is empty since there have been no workouts yet
};
