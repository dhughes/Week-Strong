import React, { Component } from 'react';
import Instructions from './fitnessTest/Instructions';
import Test from './fitnessTest/Test';
import Stop from './fitnessTest/Stop';
import Rest from './fitnessTest/Rest';
import Summary from './fitnessTest/Summary';
import history from './history';

const INSTRUCTIONS = 'INSTRUCTIONS';
const TEST = 'TEST';
const STOP = 'STOP';
const REST = 'REST';
const SUMMARY = 'SUMMARY';

class FitnessTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      rounds: 5,
      workout: 0,
      phase: INSTRUCTIONS,
      testSeconds: 30, // usually 30
      restSeconds: 15, // usually 15
      results: props.selectedExercises, // start with no results
      resultError: false
    };
  }
  getExerciseById = id => this.props.exercises.find(exercise => exercise.id === id);
  getCurrentExercise = () => {
    let exerciseId = this.props.selectedExercises[this.state.workout].id;
    return this.getExerciseById(exerciseId);
  };
  handleStartTest = event => {
    this.setState({ phase: TEST });
  };
  handleTestTimeout = event => {
    this.setState({ phase: STOP });
  };
  handleContinueClick = event => {
    console.log(this.getCurrentExerciseResult());
    if (!(this.getCurrentExerciseResult() >= 0)) {
      this.setState({ resultError: true });
    } else {
      if (
        this.state.workout + 1 === this.props.selectedExercises.length &&
        this.state.round + 1 === this.state.rounds
      ) {
        this.setState({ phase: SUMMARY, resultError: false });
      } else {
        this.setState({ phase: REST, resultError: false });
      }
    }
  };
  handleRestTimeout = event => {
    if (this.state.workout + 1 < this.props.selectedExercises.length) {
      this.setState(currentState => ({ phase: INSTRUCTIONS, workout: currentState.workout + 1 }));
    } else if (this.state.round + 1 < this.state.rounds) {
      this.setState(currentState => ({ phase: INSTRUCTIONS, workout: 0, round: currentState.round + 1 }));
    }
  };
  handleResultChange = event => {
    let count = parseInt(event.target.value, 10);

    let results = this.state.results.slice();
    results[this.state.workout].testResults[this.state.round] = count;
    this.setState({ results });

    if (this.getCurrentExerciseResult() >= 0) {
      this.setState({ resultError: false });
    }
  };
  handleCreateProfileClick = event => {
    history.push('/createProfile');
  };
  getCurrentExerciseResult() {
    return this.state.results[this.state.workout].testResults[this.state.round];
  }
  render() {
    if (this.state.phase === TEST) {
      return (
        <Test
          round={this.state.round}
          rounds={this.state.rounds}
          workouts={this.props.selectedExercises.length}
          workout={this.state.workout}
          exercise={this.getCurrentExercise().name}
          seconds={this.state.testSeconds}
          onTestTimeout={this.handleTestTimeout}
        />
      );
    } else if (this.state.phase === STOP) {
      return (
        <Stop
          round={this.state.round}
          rounds={this.state.rounds}
          workouts={this.props.selectedExercises.length}
          workout={this.state.workout}
          exercise={this.getCurrentExercise().name}
          resultError={this.state.resultError}
          onResultChange={this.handleResultChange}
          onContinueClick={this.handleContinueClick}
        />
      );
    } else if (this.state.phase === REST) {
      return (
        <Rest
          round={this.state.round}
          rounds={this.state.rounds}
          workouts={this.props.selectedExercises.length}
          workout={this.state.workout}
          exercise={this.getCurrentExercise().name}
          seconds={this.state.restSeconds}
          onRestTimeout={this.handleRestTimeout}
        />
      );
    } else if (this.state.phase === SUMMARY) {
      return (
        <Summary
          results={this.state.results}
          getExerciseById={this.getExerciseById}
          onCreateProfileClick={this.handleCreateProfileClick}
        />
      );
    } else {
      return (
        <Instructions
          round={this.state.round}
          rounds={this.state.rounds}
          workouts={this.props.selectedExercises.length}
          workout={this.state.workout}
          exercise={this.getCurrentExercise().name}
          seconds={this.state.testSeconds}
          onStartTest={this.handleStartTest}
        />
      );
    }
  }
}

export default FitnessTest;
