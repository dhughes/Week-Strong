import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './css/index.css';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

// This enables hot reload in development
if (module.hot) {
  module.hot.accept();
  const NextApp = require('./js/App').default;
  ReactDOM.render(<NextApp />, root);
}
