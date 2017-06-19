import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors';
import history from './history';
import { Vbox } from './Box';
import LoggedOutLandingPage from './LoggedOutLandingPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import theme from './theme';
import GetStarted from './GetStarted';
import SetDuration from './SetDuration';
import Summary from './Summary';

const Root = styled(Vbox)`
  component: Root;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background-color: ${theme.background};
  align-items: flex-start;
  color: ${theme.primaryText};
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;

  & *{
    box-sizing: border-box;
  }

  & *:focus {
    outline: 0;
  }

  /*& h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }*/

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: {
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
  }
  handleLoginSubmit = (username, password) => {
    console.log(username, password);
    this.setState({ loggedIn: true });
    history.push('/');
  };
  render() {
    let routes = [];
    let key = 0;
    if (this.state.loggedIn) {
      // user is logged in
      routes = [
        <Route
          key={++key}
          exact
          path="/"
          component={() => (
            <LandingPage
              user={this.state.user}
              program={this.state.program}
              history={this.state.history}
              today={this.state.today}
              nextWorkoutDay={this.state.nextWorkoutDay}
            />
          )}
        />
      ];
    } else {
      // user is not logged in
      routes = [
        <Route key={++key} exact path="/" component={() => <LoggedOutLandingPage />} />,
        <Route key={++key} exact path="/login" component={() => <LoginPage onLoginSubmit={this.handleLoginSubmit} />} />
      ];
    }

    return (
      <ThemeProvider theme={colors}>
        <Router history={history}>
          <Root>
            <Switch>
              {routes}
              <Route
                exact
                path="/getStarted"
                component={() => (
                  <GetStarted exercises={this.state.exercises} selectedExercises={this.state.program.exercises} />
                )}
              />
              <Route
                exact
                path="/setDuration"
                component={() => (
                  <SetDuration
                    selectedExerciseCount={this.state.program.exercises.length}
                    days={this.state.program.selectedDays}
                    weeks={this.state.program.days / 3}
                  />
                )}
              />
              <Route
                exact
                path="/summary"
                component={() => (
                  <Summary weeks={this.state.program.days / 3} selectedExercises={this.state.program.exercises} />
                )}
              />

            </Switch>
          </Root>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
