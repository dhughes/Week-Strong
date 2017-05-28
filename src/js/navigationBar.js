import React from 'react';

function LandingPage(props){
  return (
    <div id="navigationBar" className="hbox">
      <i className="material-icons">{props.left}</i>
      <h1>{props.title}</h1>
      <i className="material-icons">{props.right}</i>
    </div>
  );
}

export default LandingPage
