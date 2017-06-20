import React from 'react';
import { Vbox } from '../Box';
import Body from '../Body';
import Footer from '../Footer';
import Button from '../Button';
import NavigationBar from '../NavigationBar';
import { Close } from '../Icon';
import FitnessTestProgressIndicator from './FitnessTestProgressIndicator';
import Container from './Container';
import history from '../history';

const Instructions = props => (
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
          <p>as you can in {props.seconds} seconds.</p>
        </div>
      </Container>

    </Body>

    <Footer style={{ flexShrink: 0 }}>
      <Button className="default" onClick={props.onStartTest}>
        {!props.round && !props.workout ? 'Start The Test!' : 'Continue'}
      </Button>
    </Footer>
  </Vbox>
);

export default Instructions;
