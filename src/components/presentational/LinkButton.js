import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hbox } from './Box';
import theme from '../../util/theme';

const StyledLinkButton = styled(Link)`
  component: StyledLinkButton;
  padding: 0.25em 1em;
  text-decoration: none;
  line-height: 2.5rem;
  font-size: 1.4rem;
  text-align: center;
  border: 0;
  background-color: ${theme.secondary};
  color: black;
  margin: 0.5rem auto;
  border: 0px;
  border-radius: 0.3em;

  &.default{
    background-color: ${theme.primaryAction};
    color: ${theme.primaryText.negate()};
  }

  &.facebook{
    background-color: #3B5998;
    color: white;
  }

  &.google{
    background-color: #DF4A32;
    color: white;
  }

  & svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: currentColor;
  }

`;

const LinkButton = props =>
  <StyledLinkButton {...props}>
    <Hbox>
      {props.icon}
      <div>{props.label}</div>
    </Hbox>
  </StyledLinkButton>;

LinkButton.defaultProps = {
  icon: null
};

export default LinkButton;
