import React from 'react';
import { Vbox } from '../Box';
import Body from '../Body';
import NavigationBar from '../NavigationBar';
import { Close } from '../Icon';
import FitnessTestProgressIndicator from './FitnessTestProgressIndicator';
import Container from './Container';
import history from '../history';
import CountdownTimer from '../CountdownTimer';

const Rest = props => (
  <Vbox>
    <NavigationBar title={`Round ${props.round + 1}`} rightIcon={<Close />} onRightIconClick={e => history.push('/')} />
    <Body justifyContent="flex-start">
      <FitnessTestProgressIndicator
        rounds={props.rounds}
        round={props.round}
        workouts={props.workouts}
        workout={props.workout}
      />

      <Container justifyContent="space-around">
        <CountdownTimer
          key="TEST"
          topLabel="Catch your breath!"
          seconds={props.seconds}
          onTimeout={props.onRestTimeout}
        />
      </Container>
    </Body>
  </Vbox>
);

export default Rest;
