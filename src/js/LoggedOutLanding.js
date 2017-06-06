import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { Vbox } from './Box';
import Button from './Button';

const Container = styled(Vbox)`
  padding: 1em;
`;

const LogoContainer = styled(Vbox)`
  flex-grow: 1.5;
`;

const ButtonContainer = styled(Vbox)`
  flex-grow: 1;

  & > * {
    margin: 0.5rem auto;
  }
`;

const Landing = props => (
  <Container>
    <LogoContainer>
      <img src={logo} alt="Week-Strong logo" />
    </LogoContainer>
    <ButtonContainer>
      <Button default={true} onClick={props.onGetStartedClick}>Get Started Now</Button>
      <Button onClick={props.onLoginClick}>Login</Button>
    </ButtonContainer>
  </Container>
);

Landing.defaultProps = {
  onGetStartedClick: () => {},
  onLoginClick: () => {}
};

export default Landing;
