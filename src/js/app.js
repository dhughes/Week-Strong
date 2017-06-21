import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors';
import history from './history';
import { Vbox } from './Box';
import LoggedOutLandingPage from './LoggedOutLandingPage';
import FitnessTestIncompleteLandingPage from './FitnessTestIncompleteLandingPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import theme from './theme';
import GetStarted from './GetStarted';
import Exercise from './Exercise';
import SetDuration from './SetDuration';
import Summary from './Summary';
import CreateProfile from './CreateProfile';
import FitnessTest from './FitnessTest';
import state from './testStates/newUserState';

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
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = state;
  }
  handleTakeTestLater = () => {
    this.setState({ loggedIn: true, user: { id: null, name: null, email: null } });
    history.push('/');
  };
  handleLoginSubmit = (email, password) => {
    this.setState({ loggedIn: true });
    history.push('/');
  };
  handleCreateProfileSubmit = (name, email, password) => {
    this.setState({ loggedIn: true, user: { id: 123, name: name, email: email, password: password } });
    history.push('/');
  };
  handleAddToProgram = exercise => {
    let exercises = this.state.program.exercises ? this.state.program.exercises.slice() : [];
    exercises = exercises.filter(selectedExercise => selectedExercise.id !== exercise.id);
    exercises.push(exercise);
    this.setState({ program: { exercises } });
    history.push('/getStarted');
  };
  handleRemoveExercise = id => {
    let exercises = this.state.program.exercises ? this.state.program.exercises.slice() : [];
    exercises = exercises.filter(selectedExercise => selectedExercise.id !== id);
    this.setState({ program: { exercises } });
  };
  render() {
    let routes = [];
    let key = 0;
    if (this.state.loggedIn && !this.state.program.fitnessTest.complete) {
      // user is logged in
      routes = [
        <Route
          key={++key}
          exact
          path="/"
          component={() => (
            <FitnessTestIncompleteLandingPage
              user={this.state.user}
              program={this.state.program}
              history={this.state.history}
              today={this.state.today}
              nextWorkoutDay={this.state.nextWorkoutDay}
            />
          )}
        />
      ];
    } else if (this.state.loggedIn) {
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
                  <GetStarted
                    exercises={this.state.exercises}
                    selectedExercises={this.state.program.exercises}
                    handleRemoveExercise={this.handleRemoveExercise}
                  />
                )}
              />
              <Route
                exact
                path="/exercise/:id"
                component={props => (
                  <Exercise
                    exercise={this.state.exercises.find(
                      exercise => exercise.id === parseInt(props.match.params.id, 10)
                    )}
                    selected={
                      this.state.program.exercises
                        ? this.state.program.exercises.find(
                            exercise => exercise.id === parseInt(props.match.params.id, 10)
                          )
                        : undefined
                    }
                    onAddToProgram={this.handleAddToProgram}
                  />
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
                  <Summary
                    weeks={this.state.program.days / 3}
                    selectedExercises={this.state.program.exercises}
                    onTakeTestLater={this.handleTakeTestLater}
                  />
                )}
              />
              <Route
                exact
                path="/createProfile"
                component={() => <CreateProfile onCreateProfileSubmit={this.handleCreateProfileSubmit} />}
              />
              <Route
                exact
                path="/fitnessTest"
                component={() => (
                  <FitnessTest exercises={this.state.exercises} selectedExercises={this.state.program.exercises} />
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
