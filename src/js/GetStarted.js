import React, { Component } from 'react';
import { Vbox, Hbox } from './Box';
import Body from './Body';
import Footer from './Footer';
import history from './history';
import LinkButton from './LinkButton';
import NavigationBar from './NavigationBar';
import { ChevronLeft } from './Icon';
import ExerciseTile from './ExerciseTile';

class GetStarted extends Component {
  handleRemoveExercise = id => this.props.handleRemoveExercise(id);
  render() {
    return (
      <Vbox>
        <NavigationBar leftIcon={<ChevronLeft />} onLeftIconClick={e => history.goBack()} title="Create Your Program" />

        <Body>
          <p>Choose up to four exercises for your program.</p>
          <Hbox justifyContent="space-between" wrap={true}>
            {this.props.exercises.map(exercise => (
              <ExerciseTile
                key={exercise.id}
                id={exercise.id}
                image={exercise.image}
                label={exercise.name}
                selected={
                  this.props.selectedExercises &&
                    this.props.selectedExercises.find(selectedExercise => selectedExercise.id === exercise.id)
                }
                onRemoveClick={this.handleRemoveExercise}
              />
            ))}
          </Hbox>
        </Body>

        <Footer>
          <LinkButton to="/setDuration" label="Continue" className="default" />
        </Footer>

      </Vbox>
    );
  }
}

export default GetStarted;
