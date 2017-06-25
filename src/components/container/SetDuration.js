import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import Footer from '../presentational/styled/Footer';
import Button from '../presentational/styled/Button';
import NavigationBar from '../presentational/NavigationBar';
import Stepper from '../presentational/Stepper';
import { ChevronLeft } from '../presentational/Icon';
import PaddedBox from '../presentational/styled/PaddedBox';
import Schedule from '../presentational/Schedule';
import { toggleProgramDay, setProgramDuration } from '../actions/actions';
import DifficultyGauge from '../presentational/DifficultyGauge';
import history from '../../util/history';

const Div = styled(PaddedBox)`
  text-align: left;
  flex-shrink: 0;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    program: state.ui.createProgram,
    exercises: state.entities.exercises,
    canContinue: state.ui.createProgram.selectedDays.length === 3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProgramDay: day => {
      dispatch(toggleProgramDay(day));
    },
    setDuration: weeks => {
      dispatch(setProgramDuration(weeks));
    }
  };
};

class SetDuration extends Component {
  onDayClick = day => {
    day = parseInt(day, 10);
    if (this.props.program.selectedDays.includes(day) || this.props.program.selectedDays.length < 3) {
      this.props.toggleProgramDay(day);
    }
  };

  scale = (valueIn, baseMin, baseMax) => {
    const limitMin = 20,
      limitMax = 75;
    return (limitMax - limitMin) * (valueIn - baseMin) / (baseMax - baseMin) + limitMin;
  };

  calculateDifficulty = () => {
    // get the average difficulty of all the exercises
    const selectedExercises = Object.keys(this.props.program.exercises).filter(
      id => this.props.program.exercises[id] !== undefined
    );
    const weeks = this.props.program.weeks;
    let difficulty =
      selectedExercises
        .map(id =>
          this.scale(
            this.props.program.exercises[id],
            this.props.exercises[id].minimum,
            this.props.exercises[id].defaultGoal + this.props.exercises[id].defaultGoal * 0.5
          )
        )
        .reduce((acc, score) => acc + score, 0) / selectedExercises.length;

    // scale the difficulty based on the number of exercises
    difficulty = difficulty + difficulty * (selectedExercises.length - 1) * 0.25;

    // scale the difficulty based on the number of weeks
    const offset = 6 - weeks;
    difficulty = difficulty + difficulty * offset * (offset < 0 ? 0.06125 : 0.125);

    return difficulty > 100 ? 100 : difficulty;
  };

  render() {
    return (
      <Vbox>
        <NavigationBar leftIcon={ChevronLeft} leftTo="/CreateProgram" title="Choose your Duration" />

        <Body>
          <Div>
            <h2>
              You chose {this.props.program.selectionCount}{' '}
              {this.props.program.selectionCount === 1 ? 'exercise' : 'exercises'}
            </h2>

            <p>
              Choose three days of the week you will work out. Choose carefully, these can't be changed once you
              start your program.
            </p>

            <Schedule selectedDays={this.props.program.selectedDays} onDayClick={this.onDayClick} />

            <p>Choose the number of weeks to complete your goal. Fewer weeks are harder!</p>

            <Stepper
              value={this.props.program.weeks}
              label="Weeks"
              minimum={4}
              maximum={8}
              onValueChange={this.props.setDuration}
            />
          </Div>

          <DifficultyGauge
            difficulty={this.calculateDifficulty()}
            program={this.props.program}
            exercises={this.props.exercises}
          />
        </Body>

        <Footer>
          <Button disabled={!this.props.canContinue} className="default" onClick={e => history.push('/Summary')}>
            Continue
          </Button>
        </Footer>
      </Vbox>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SetDuration);
