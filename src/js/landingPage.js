import React from 'react';
import {Link} from 'react-router-dom'
import PageBody from './pageBody'
import NavigationBar from './navigationBar'
import pencil from '../img/icons/lead-pencil.svg'

function LandingPage(props){

  if(!props.loggedIn){
    return (
      <PageBody>
        <div className="logo vbox bottom-center">
          <img src="http://placehold.it/600x600?text=Week-Strong" alt="Week-Strong" />
        </div>
        <div className="landingButtons vbox">
          <Link to="/getStarted" className="button primary">Get Started</Link>
          <Link to="/login" className="button">Login</Link>
        </div>
      </PageBody>
    );
  } else {
    return (
      <div id="loginPage" className="vbox">
        <NavigationBar
          left={pencil}
          leftAlt="Edit Program"
          title="Sign In to Week-Strong"/>
        <PageBody>

        </PageBody>
      </div>
    );
  }
}

export default LandingPage
