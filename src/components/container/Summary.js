import React from 'react';
import { connect } from 'react-redux';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import Footer from '../presentational/styled/Footer';
import Div from '../presentational/styled/Div';
import NavigationBar from '../presentational/NavigationBar';
import { ChevronLeft } from '../presentational/Icon';
import Schedule from '../presentational/Schedule';
import Button from '../presentational/styled/Button';
import history from '../../util/history';

const mapStateToProps = (state, ownProps) => {
  // This doesn't belong here, but it works. It's good for at least development-time
  if (Object.keys(state.ui.createProgram.exercises).length === 0) history.push('/CreateProgram');

  return {
    program: state.ui.createProgram,
    exercises: state.entities.exercise
  };
};

const Summary = props =>
  <Vbox>
    <NavigationBar leftIcon={ChevronLeft} leftTo="/SetDuration" title="Program Summary" />

    <Body justifyContent="flex-start">
      <Div>
        <h2>{props.program.weeks} Week Program:</h2>

        <Schedule selectedDays={props.program.selectedDays} onDayClick={e => {}} disabled />

        <h2>{props.program.selectionCount} Exercises:</h2>

        <ul>
          {Object.keys(props.program.exercises).map(id =>
            <li key={id}>{props.program.exercises[id]} {props.exercises[id].name}</li>
          )}

        </ul>

        <h2>Get Started:</h2>

        <p>
          To get started you must first take a fitness test. You will do five rounds of each workout, to your max
          effort. Your total reps tells us where to get started.
        </p>
      </Div>
    </Body>
    <Footer style={{ flexShrink: 0 }}>
      <Button className="default" onClick={e => history.push('/FitnessTest')}>
        Start The Test!
      </Button>
      <Button onClick={e => history.push('/CreateProfile')}>
        Take Test Later
      </Button>
    </Footer>

  </Vbox>;

export default connect(mapStateToProps)(Summary);
