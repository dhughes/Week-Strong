import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import configureStore from './components/configureStore';
import { fetchExercises } from './components/actions/actions';

import './css/index.css';

const store = configureStore();

store.dispatch(fetchExercises());

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    render(
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
