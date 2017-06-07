import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import { Vbox } from './Box';
import LoggedOutLandingPage from './LoggedOutLandingPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

console.log(history);

const Root = styled(Vbox)`
  width: 100vw;
  height: 100vh;
  font-size: 1.2em;
  background-color: ${props => props.theme.background};
  align-items: flex-start;

  & *:focus {
    outline: 4px solid ${props => props.theme.header};
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  handleLoginSubmit = (username, password) => {
    console.log(username, password);
    this.setState({ loggedIn: true });
    history.push('/');
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Root>
            <Switch>
              {this.state.loggedIn
                ? <Route exact path="/" component={() => <LandingPage />} />
                : <Route exact path="/" component={() => <LoggedOutLandingPage />} />}
              <Route exact path="/login" component={() => <LoginPage onLoginSubmit={this.handleLoginSubmit} />} />
            </Switch>
          </Root>
        </Router>
      </ThemeProvider>
    );
  }
}

const theme = {
  header: '#8ACDEA',
  font: '#EEEBD3',
  background: '#393E41',
  positive: '#69995D',
  warning: '#CC340E'
};

export default App;
