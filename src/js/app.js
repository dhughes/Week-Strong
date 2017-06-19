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
import CreateProfile from './CreateProfile';
import state from './state';

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
    this.setState({ loggedIn: true, user: { anonymous: true, id: null, name: null, email: null } });
    history.push('/');
  };
  handleLoginSubmit = (email, password) => {
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
                  <Summary
                    weeks={this.state.program.days / 3}
                    selectedExercises={this.state.program.exercises}
                    onTakeTestLater={this.handleTakeTestLater}
                  />
                )}
              />
              <Route exact path="/createProfile" component={() => <CreateProfile />} />

            </Switch>
          </Root>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
