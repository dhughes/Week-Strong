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
    startDate: new Date(2017, 5, 1),
    currentWeek: 4,
    // this is the number of days completed so far. today only counts after its completed
    completedDay: 7,
    // this only counts today after today is done
    streak: 7,
    fitnessTest: {
      compete: false
    },
    stats: [
      {
        name: 'Pullups',
        total: 62
      },
      {
        name: 'Pushups',
        total: 326
      }
    ],
    exercises: [{ id: 1, quantity: 20 }, { id: 4, quantity: 100 }]
  },
  today: new Date(2017, 5, 19),
  // this will be set based on completed workouts. If I've completed today's workout then the next workout is in the future
  nextWorkoutDay: new Date(2017, 5, 19),
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
  history: [
    [
      {
        date: new Date(2017, 4, 28),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 4, 29),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 4, 30),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 4, 31),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 5, 1),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 2),
        day: 1,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 3),
        day: null,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 5, 4),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 5),
        day: 2,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 6),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 7),
        day: 3,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 8),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 9),
        day: 4,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 10),
        day: null,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 5, 11),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 12),
        restored: true,
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 13),
        day: 5,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 14),
        day: 6,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 15),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 16),
        restored: true,
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 17),
        day: 7,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 5, 18),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 19),
        day: 8,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 20),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 21),
        day: 9,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 22),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 23),
        day: 10,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 24),
        day: null,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 5, 25),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 26),
        day: 11,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 27),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 28),
        day: 12,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 29),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 5, 30),
        day: 13,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 1),
        day: null,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 6, 2),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 3),
        day: 14,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 4),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 5),
        day: 15,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 6),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 7),
        day: 16,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 8),
        day: null,
        inProgram: true
      }
    ],
    [
      {
        date: new Date(2017, 6, 9),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 10),
        day: 17,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 11),
        day: null,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 12),
        day: 18,
        inProgram: true
      },
      {
        date: new Date(2017, 6, 13),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 6, 14),
        day: null,
        inProgram: false
      },
      {
        date: new Date(2017, 6, 15),
        day: null,
        inProgram: false
      }
    ]
  ]
};
