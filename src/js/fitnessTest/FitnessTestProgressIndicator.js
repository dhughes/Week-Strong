import React from 'react';
import styled from 'styled-components';
import { CircleOutline, CircleFilled } from '../Icon';

const Container = styled.div`
  & svg{
    width: 1em;
    height: 1em;
  }
`;

const FitnessTestProgressIndicator = props => {
  let rounds = [];
  for (let round = 0; round < props.rounds; round++) {
    if (round === props.round) {
      rounds.push(<CircleFilled key={round} />);
    } else {
      rounds.push(<CircleOutline key={round} />);
    }
  }
  let workouts = [];
  for (let workout = 0; workout < props.workouts; workout++) {
    if (workout === props.workout) {
      workouts.push(<CircleFilled key={workout} />);
    } else {
      workouts.push(<CircleOutline key={workout} />);
    }
  }
  return (
    <Container>
      <div>
        {rounds}
      </div>
      <div>
        {workouts}
      </div>
    </Container>
  );
};

export default FitnessTestProgressIndicator;
