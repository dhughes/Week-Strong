import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './js/landingPage';
import LoginPage from './js/loginPage';
import './css/index.css';

class WeekStrong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    const landingPage = () => <LandingPage loggedIn={this.state.loggedIn} />;
    const loginPage = () => <LoginPage onLogin={this.handleLogin} />;

    return (
      <Router>
        <div id="index" className="vbox">
          <Route exact path="/" render={landingPage} />
          <Route exact path="/login" render={loginPage} />
        </div>
      </Router>
    );
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({ loggedIn: true });
    //this.props.history.push("/");
    console.log(Object.keys(this.state));
  }
}

ReactDOM.render(<WeekStrong />, document.getElementById('root'));
