import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from './container/PrivateRoute';
import LandingPage from './container/LandingPage';
import CreateProgram from './container/CreateProgram';
import Exercise from './container/Exercise';
import SetDuration from './container/SetDuration';
import Summary from './container/Summary';
import CreateProfile from './container/CreateProfile';
import LoginPage from './container/LoginPage';
import Root from './presentational/styled/Root';
import SplashPage from './presentational/SplashPage';
import colors from '../util/colors';
import history from '../util/history';

const App = props =>
  <Provider store={props.store}>
    <ThemeProvider theme={colors}>
      <ConnectedRouter history={history}>
        <Root>
          <Switch>
            <Route exact path="/SplashPage" component={SplashPage} />
            <Route exact path="/CreateProgram" component={CreateProgram} />
            <Route exact path="/Exercise/:id" component={Exercise} />
            <Route exact path="/SetDuration" component={SetDuration} />
            <Route exact path="/Summary" component={Summary} />
            <Route exact path="/CreateProfile" component={CreateProfile} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <PrivateRoute exact path="/" component={LandingPage} />
          </Switch>
        </Root>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>;

export default App;
