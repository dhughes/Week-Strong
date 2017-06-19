import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hbox } from './Box';
import history from './history';
import theme from './theme';

const NavigationBarContainer = styled(Hbox)`
  component: NavigationBarContainer;
  background-color: ${theme.focus};
  line-height: 3rem;
  color: ${theme.primaryText.negate()};
  align-items: center;
  padding: 0em 0.5em;
  flex-shrink: 0;

  & > * {
    height: 3rem;
    width: 3rem;
    flex-grow: 0;
  }

  & > h1{
    font-size: 1.4rem;
    text-align: center;
    flex-grow: 1000;
  }

  & > a {
    color: currentColor;
  }

  & svg {
    fill: currentColor;
  }
`;

const NavigationBar = props => {
  let leftButton;

  if (props.leftBack && props.leftIcon) {
    leftButton = <a onClick={e => history.goBack()}>{props.leftIcon}</a>;
  } else if (props.leftTo && props.leftIcon) {
    leftButton = <Link to={props.leftTo}>{props.leftIcon}</Link>;
  } else {
    leftButton = <div />;
  }
  return (
    <NavigationBarContainer>
      {leftButton}
      <h1>{props.title}</h1>
      {props.rightTo && props.rightIcon ? <Link to={props.rightTo}>{props.rightIcon}</Link> : <div />}
    </NavigationBarContainer>
  );
};

export default NavigationBar;
