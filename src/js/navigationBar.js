import React from 'react';

function LandingPage(props){
  return (
    <div id="navigationBar" className="hbox">
      <img src={props.left} alt={props.leftAlt} onClick={props.onLeftClick} />
      <h1>{props.title}</h1>
      <img src={props.right} alt={props.rightAlt} />
    </div>
  );
}

export default LandingPage
