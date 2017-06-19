import React from 'react';
import { Hbox } from './Box';
import Day from './Day';

const ScheduleSummary = props => (
  <Hbox justifyContent="space-between">
    <Day inProgram day="Sunday" />
    <Day inProgram day="Monday" isWorkoutDay />
    <Day inProgram day="Tuesday" />
    <Day inProgram day="Wednesday" isWorkoutDay />
    <Day inProgram day="Thursday" />
    <Day inProgram day="Friday" isWorkoutDay />
    <Day inProgram day="Saturday" />
  </Hbox>
);

export default ScheduleSummary;
