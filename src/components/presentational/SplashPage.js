import React from 'react';
import styled from 'styled-components';
import Body from './styled/Body';
import { Vbox } from './Box';
import LinkButton from './LinkButton';
import logo from '../../img/logo.svg';

const LogoContainer = styled(Vbox)`
  flex-grow: 1.5;
  justify-content: center;
`;

const ButtonContainer = styled(Vbox)`
  flex-grow: 1;

  & > * {
    width: 100%;
  }
`;

const SplashPage = props =>
  <Body>
    <LogoContainer>
      <img src={logo} alt="Week-Strong logo" />
    </LogoContainer>
    <ButtonContainer>
      <LinkButton to="/CreateProgram" label="Get Started Now" className="default" />
      <LinkButton to="/LoginPage" label="Login" />
    </ButtonContainer>
  </Body>;

export default SplashPage;
