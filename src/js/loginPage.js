import React from 'react';
import {
  Link
} from 'react-router-dom'
import NavigationBar from './navigationBar'
import PageBody from './pageBody'
import left from '../img/icons/chevron-left.svg'

class LoginPage extends React.Component {

  constructor( props ) {
    super( props );

    this.handleBackClick = this.handleBackClick.bind( this );
  }

  render() {
    return (
      <div id="loginPage" className="vbox">
        <NavigationBar
          left={left}
          leftAlt="Back"
          onLeftClick={this.handleBackClick}
          title="Sign In to Week-Strong"/>
        <PageBody>
          <div className="vbox bottom">
            <Link to="/" className="button hbox facebook">
              <span className="icon facebook"></span>
              <span>Sign In With Facebook</span>
            </Link>
            <Link to="/" className="button hbox google">
              <span className="icon google"></span>
              <span>Sign In With Google</span>
            </Link>
            <hr />
          </div>
          <form id="loginForm" className="vbox top" onSubmit={this.props.onLogin}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="button primary">Login</button>
            <a href="/forgotPassword">Forgot your password?</a>
          </form>
        </PageBody>
      </div>
    );
  }

  handleBackClick() {
    this.props.history.push( "/" );
  }

}

export default LoginPage
