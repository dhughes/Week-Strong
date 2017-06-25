import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';

// render our app
ReactDOM.render(<App />, document.getElementById('root'));

// This enables hot reload in development
if (module.hot) {
  module.hot.accept();
  const NextApp = require('./components/App').default;
  ReactDOM.render(<NextApp />, root);
}
