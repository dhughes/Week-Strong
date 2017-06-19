import React from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import Day from './Day2';
import Body from './Body';
import Footer from './Footer';
import LinkButton from './LinkButton';
import NavigationBar from './NavigationBar';
import Stepper from './Stepper';
import { ChevronLeft } from './Icon';
import DifficultyGauge from './DifficultyGauge';
import PaddedBox from './PaddedBox';

const Div = styled(PaddedBox)`
  text-align: left;
  flex-shrink: 0;
`;

const SetDuration = props => (
  <Vbox>
    <NavigationBar leftIcon={<ChevronLeft />} leftTo="/getStarted" title="Choose your Duration" />

    <Body>
      <Div>
        <h2>You chose {props.selectedExerciseCount} exercises</h2>

        <p>Choose the days of the week you will work out. Choose carefully, this can't be changed once you start your program.</p>

        <Hbox justifyContent="space-between">
          <Day day="Sunday" />
          <Day day="Monday" isWorkoutDay />
          <Day day="Tuesday" />
          <Day day="Wednesday" isWorkoutDay />
          <Day day="Thursday" />
          <Day day="Friday" isWorkoutDay />
          <Day day="Saturday" />
        </Hbox>

        <p>Choose the number of weeks to complete your goal. Fewer weeks are harder!</p>

        <Stepper value={props.weeks} label="Weeks" />
      </Div>

      <DifficultyGauge difficulty={44} />
    </Body>

    <Footer>
      <LinkButton to="/summary" label="Continue" className="default" />
    </Footer>
  </Vbox>
);

export default SetDuration;
