import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    loggedIn: state.user !== null
  };
};

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  console.log(loggedIn);
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn // replace with something to check if the user is logged in or not....
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/SplashPage',
                state: { from: props.location }
              }}
            />}
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
