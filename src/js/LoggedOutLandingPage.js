import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import logo from '../img/logo.svg';
import { Vbox } from './Box';
import LinkButton from './LinkButton';
import ButtonContainer from './ButtonContainer';

const LogoContainer = styled(Vbox)`
  flex-grow: 1.5;
  justify-content: center;
`;

const LoggedOutLandingPage = props => (
  <Body>
    <LogoContainer>
      <img src={logo} alt="Week-Strong logo" />
    </LogoContainer>
    <ButtonContainer>
      <LinkButton to="/getStarted" label="Get Started Now" className="default" />
      <LinkButton to="/login" label="Login" />
    </ButtonContainer>
  </Body>
);

export default LoggedOutLandingPage;
