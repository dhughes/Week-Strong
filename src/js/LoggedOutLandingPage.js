import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import logo from '../img/logo.svg';
import { Vbox } from './Box';
import LinkButton from './LinkButton';

const LogoContainer = styled(Vbox)`
  flex-grow: 1.5;
`;

const ButtonContainer = styled(Vbox)`
  flex-grow: 1;
`;

const LoggedOutLandingPage = props => (
  <Body>
    <LogoContainer>
      <img src={logo} alt="Week-Strong logo" />
    </LogoContainer>
    <ButtonContainer>
      <LinkButton to="/getStarted" className="default">Get Started Now</LinkButton>
      <LinkButton to="/login">Login</LinkButton>
    </ButtonContainer>
  </Body>
);

export default LoggedOutLandingPage;
