import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import Footer from '../presentational/styled/Footer';
import Button from '../presentational/styled/Button';
import NavigationBar from '../presentational/NavigationBar';
import { ChevronLeft } from '../presentational/Icon';
import Stepper from '../presentational/Stepper';
import theme from '../../util/theme';
import { changeExerciseGoal, addExerciseToProgram } from '../actions/actions';
import history from '../../util/history';

const Img = styled.img`
  max-height: 40vw;
  object-fit: cover;
  border: 1px solid ${theme.primaryText}
`;

const Description = styled.span`
  text-align: left;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.ui.exerciseList.isFetching,
    exercise: state.ui.exerciseList.isFetching ? {} : state.entities.exercises[ownProps.match.params.id],
    goal: state.ui.exerciseList.isFetching ? null : state.ui.exercise.goals[ownProps.match.params.id],
    isSelected: state.ui.createProgram.exercises[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onValueChange: (exerciseId, goal) => {
      dispatch(changeExerciseGoal(exerciseId, goal));
    },
    onAddToProgram: (exerciseId, goal) => {
      dispatch(addExerciseToProgram(exerciseId, goal));
      history.goBack();
    }
  };
};

const Exercise = props =>
  <Vbox>
    <NavigationBar leftIcon={ChevronLeft} leftTo="/CreateProgram" title="Create Your Program" />

    <Body isFetching={props.isFetching}>
      <Img src={props.exercise.image} />
      <Description dangerouslySetInnerHTML={{ __html: props.exercise.description }} />

    </Body>

    <Footer>
      <Stepper
        minimum={props.exercise.minimum}
        maximum={250} // not sure I want to leave this here
        step={props.exercise.step}
        value={props.goal}
        onValueChange={goal => props.onValueChange(props.exercise.id, goal)}
      />
      <Button className="default" onClick={e => props.onAddToProgram(props.exercise.id, props.goal)}>
        {props.isSelected ? 'Update Program' : 'Add To Program'}
      </Button>
    </Footer>
  </Vbox>;

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
