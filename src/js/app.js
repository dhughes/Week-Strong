import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Vbox } from './Box';
import LoggedOutLanding from './LoggedOutLanding';
import Landing from './Landing';

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
  handleLoginClick = () => {
    console.log('login!!');
  };
  handleGetStartedClick = () => {
    console.log('get started!!');
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Root>
            <Switch>
              {this.state.loggedIn
                ? <Route exact path="/" component={() => <Landing />} />
                : <Route
                    exact
                    path="/"
                    component={() => (
                      <LoggedOutLanding
                        onGetStartedClick={this.handleGetStartedClick}
                        onLoginClick={this.handleLoginClick}
                      />
                    )}
                  />}
            </Switch>
          </Root>
        </BrowserRouter>
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
