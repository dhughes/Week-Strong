import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hbox } from './Box';
import theme from './theme';

const Container = styled(Hbox)`
  background-color: ${theme.focus};
  line-height: 3rem;
  color: ${theme.primaryText.negate()};
  align-items: center;
  padding: 0em 0.5em;

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

const NavigationBar = props => (
  <Container>
    {props.leftTo && props.leftIcon ? <Link to={props.leftTo}>{props.leftIcon}</Link> : <div />}
    <h1>{props.title}</h1>
    {props.rightTo && props.rightIcon ? <Link to={props.rightTo}>{props.rightIcon}</Link> : <div />}
  </Container>
);

export default NavigationBar;
