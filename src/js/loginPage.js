import React from 'react';
import {Link} from 'react-router-dom'
import NavigationBar from './navigationBar'
import PageBody from './pageBody'

function LoginPage(props){
  return (
    <div id="loginPage" className="vbox">
       <NavigationBar
        left="keyboard_arrow_left"
        title="Sign In to Week-Strong"
        right="menu" />
      <PageBody>
        <div className="vbox bottom">
          <Link to="/" className="button facebook">
            <i className="material-icons">facebook</i>
            Sign In With Facebook</Link>
          <Link to="/" className="button google">Sign In With Google</Link>
          <hr />
        </div>
        <form id="loginForm" className="vbox top">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/" className="button primary">Login</Link>
          <a href="#">Forgot your password?</a>
        </form>

      </PageBody>
    </div>
  );
}

export default LoginPage
