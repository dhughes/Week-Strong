import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Vbox } from '../Box';
import Body from '../Body';
import NavigationBar from '../NavigationBar';
import { Close } from '../Icon';
import FitnessTestProgressIndicator from './FitnessTestProgressIndicator';
import Container from './Container';
import history from '../history';
import Input from '../Input';
import Footer from '../Footer';
import Button from '../Button';

const P = styled.p`
  &.error{
    color: ${theme.negative};
  }
`;

const Test = props => (
  <Vbox>
    <NavigationBar title={`Round ${props.round + 1}`} rightIcon={<Close />} onRightIconClick={e => history.push('/')} />
    <Body justifyContent="flex-start">
      <FitnessTestProgressIndicator
        rounds={props.rounds}
        round={props.round}
        workouts={props.workouts}
        workout={props.workout}
      />

      <Container justifyContent="space-between">
        <div>
          <p>Do as many good form</p>
          <h2>{props.exercise}</h2>
          <p>as you can in 30 seconds.</p>
        </div>
      </Container>

      <div>
        <h1>STOP!</h1>
        <P className={props.resultError ? 'error' : null}>How many {props.exercise} did you complete?</P>
        <Input
          name="result"
          onChange={props.onResultChange}
          style={{ textAlign: 'center' }}
          type="number"
          placeholder={props.exercise}
          className={props.resultError ? 'error' : null}
        />
      </div>
    </Body>

    <Footer style={{ flexShrink: 0 }}>
      <p>Continue on to a short rest...</p>
      <Button className="default" onClick={props.onContinueClick}>Continue</Button>
    </Footer>
  </Vbox>
);

export default Test;
