import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hbox } from './Box';

const Container = styled(Hbox)`
  background-color: ${props => props.theme.header};
  line-height: 3rem;
  color: ${props => props.theme.background};
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
    color: ${props => props.theme.background};
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
