import React from 'react';
import { Vbox, Hbox } from './Box';
import Body from './Body';
import Footer from './Footer';
import LinkButton from './LinkButton';
import NavigationBar from './NavigationBar';
import { ChevronLeft } from './Icon';
import ExerciseTile2 from './ExerciseTile2';
import PaddedBox from './PaddedBox';

const GetStarted = props => (
  <Vbox>
    <NavigationBar leftIcon={<ChevronLeft />} leftTo="/" title="Create Your Program" />

    <Body>
      <PaddedBox>
        <p>Choose up to four exercises for your program.</p>
        <Hbox justifyContent="space-between" wrap={true}>
          {props.exercises.map(exercise => (
            <ExerciseTile2
              key={exercise.id}
              id={exercise.id}
              image={exercise.image}
              label={exercise.name}
              selected={props.selectedExercises.find(selectedExercise => selectedExercise.id === exercise.id)}
            />
          ))}
        </Hbox>
      </PaddedBox>
    </Body>

    <Footer>
      <LinkButton to="/setDuration" label="Continue" className="default" />
    </Footer>

  </Vbox>
);

export default GetStarted;
