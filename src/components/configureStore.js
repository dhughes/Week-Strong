import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import weekStrongApp from './reducers/reducers';
import history from '../util/history';

export default function configureStore() {
  // create our redux store
  const store = createStore(weekStrongApp, applyMiddleware(ReduxThunk, createLogger(), routerMiddleware(history)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
