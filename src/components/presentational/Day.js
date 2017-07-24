import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';

/*
  clock-start = day the fitness test is taken



 */

const DayBox = styled.div`
  component: DayBox;
  text-align: center;
  font-size: 1.2rem;
  width: 2.5rem;
  border-radius: 0.3em;

  color: ${theme.primaryText};
  border: 2px solid ${theme.primaryText};
  background-color: ${theme.background};

  line-height: 2.5rem;
  height: 2.5rem;
  padding: 0;
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;

  &.notInProgram,
  &.afterToday {
    opacity: 0.25;
    border-width: 1px;
  }

  &.workoutDay {
    background-color: ${theme.positive.lighten(1.25)};
  }

  &.workedOut {
    background-color: ${theme.positive};
    color: ${theme.primaryText.negate()};
  }

  &.fitnessTestDay {
    opacity: 1;
  }

  &.today {
    font-weight: bold;
    border: 2px solid ${theme.primaryText};
    box-shadow: 0px 0px 0px 2px ${theme.primaryText};
    z-index: 1;
  }

  &.missed {
    background-color: ${theme.negative.lighten(1)};
  }

  &.disabled {
    border: 1px solid ${theme.primaryText.fade(0.75)};
  }

  &.beforeStart {
    border-width: 2px;
    border-style: dashed;
  }

  &.makeupDay {
    background-color: ${theme.positive}!important;
  }
`;

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
export const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const Day = props =>
  <DayBox
    className={`
      ${!props.inProgram ? 'notInProgram' : ''}
      ${props.isWorkoutDay ? 'workoutDay' : ''}
      ${props.isMakeupDay ? 'makeupDay' : ''}
      ${props.workedOut ? 'workedOut' : ''}
      ${props.missed ? 'missed' : ''}
      ${props.isToday ? 'today' : ''}
      ${props.isBeforeStart ? 'beforeStart' : ''}
      ${props.isFitnessTestDay ? 'fitnessTestDay' : ''}
      ${props.isAfterToday ? 'afterToday' : ''}
      ${props.disabled ? 'disabled' : ''}`}
    data-value={days.indexOf(props.day)}
    title={props.day}
    {...props}
  >
    {props.day.substr(0, 1)}
  </DayBox>;

Day.defaultProps = {
  onClick: e => {},
  disabled: false
};

Day.propTypes = {
  inProgram: PropTypes.bool,
  isWorkoutDay: PropTypes.bool,
  isMakeupDay: PropTypes.bool,
  workedOut: PropTypes.bool,
  missed: PropTypes.bool,
  isToday: PropTypes.bool,
  day: PropTypes.oneOf(days),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isBeforeStart: PropTypes.bool,
  isFitnessTestDay: PropTypes.bool,
  isAfterToday: PropTypes.bool
};

export default Day;
