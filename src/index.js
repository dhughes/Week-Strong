import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LandingPage from './js/landingPage'
import LoginPage from './js/loginPage'
import './css/index.css';

const WeekStrong = () => (
  <Router>
    <div id="index" className="vbox">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" component={LoginPage}/>
    </div>
  </Router>
)

ReactDOM.render( <WeekStrong />, document.getElementById( 'root' ) );
