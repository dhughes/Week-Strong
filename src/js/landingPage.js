import React from 'react';
import {Link} from 'react-router-dom'
import PageBody from './pageBody'

function LandingPage(){
  return (
    <PageBody>
      <div className="logo vbox bottom-center">
        <img src="http://placehold.it/600x600?text=Week-Strong" />
      </div>
      <div className="landingButtons vbox">
        <Link to="/getStarted" className="button primary">Get Started</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </PageBody>
  );
}

export default LandingPage
