import React from 'react';
import { connect } from 'react-redux';
import { Vbox, Hbox } from '../presentational/Box';
import NavigationBar from '../presentational/NavigationBar';
import { ChevronLeft } from '../presentational/Icon';
import Body from '../presentational/styled/Body';
import Footer from '../presentational/styled/Footer';
import Button from '../presentational/styled/Button';
import ExerciseTile from '../presentational/ExerciseTile';
import { removeExerciseFromProgram } from '../actions/actions';
import history from '../../util/history';

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.ui.exerciseList.isFetching,
    exercises: state.ui.exerciseList.items.map(id => state.entities.exercises[id]),
    program: state.ui.createProgram,
    canContinue: state.ui.createProgram.selectionCount > 0 && state.ui.createProgram.selectionCount <= 4
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveFromProgram: exerciseId => {
      dispatch(removeExerciseFromProgram(exerciseId));
    }
  };
};

const CreateProgram = props =>
  <Vbox>
    <NavigationBar leftIcon={ChevronLeft} leftTo="/SplashPage" title="Create Your Program" />

    <Body>
      {props.hasError ? <p>Yo</p> : <p>Choose up to four exercises for your program.</p>}

      <Hbox isFetching={props.isFetching} justifyContent="space-between" wrap={true}>
        {props.exercises.map(exercise =>
          <ExerciseTile
            key={exercise.id}
            id={exercise.id}
            image={exercise.image}
            label={exercise.name}
            goal={props.program.exercises[exercise.id]}
            onSelect={e => history.push(`/Exercise/${exercise.id}`)}
            onRemove={e => {
              e.stopPropagation();
              props.onRemoveFromProgram(exercise.id);
            }}
          />
        )}
      </Hbox>

    </Body>

    <Footer>
      <Button disabled={!props.canContinue} className="default" onClick={e => history.push('/SetDuration')}>
        Continue
      </Button>
    </Footer>

  </Vbox>;

export default connect(mapStateToProps, mapDispatchToProps)(CreateProgram);
