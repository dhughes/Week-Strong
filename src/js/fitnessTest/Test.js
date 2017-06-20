import React from 'react';
import styled from 'styled-components';
import { Vbox } from '../Box';
import Body from '../Body';
import NavigationBar from '../NavigationBar';
import { Close } from '../Icon';
import FitnessTestProgressIndicator from './FitnessTestProgressIndicator';
import Container from './Container';
import history from '../history';
import CountdownTimer from '../CountdownTimer';

const Div = styled.div`
  & > span {
    font-size: 1.5rem;
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

      <CountdownTimer
        key="TEST"
        topLabel="Only"
        bottomLabel="seconds remaining!"
        seconds={props.seconds}
        onTimeout={props.onTestTimeout}
      />

      <Div>It's ok if you can't do any this round. <span role="img" aria-label="Thumbs Up">👍</span></Div>
    </Body>
  </Vbox>
);

export default Test;
