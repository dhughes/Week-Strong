import React from 'react';
import Button from '../presentational/styled/Button';
import { Vbox } from '../presentational/Box';

const WorkoutDay = props =>
  <Vbox style={{ padding: '1em' }}>
    <h3>It's a workout day!</h3>
    <Button className="default">Let's Go!</Button>
    <Button>Redo the last workout</Button>
  </Vbox>;

export default WorkoutDay;
