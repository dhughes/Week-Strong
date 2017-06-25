import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';

const DayBox = styled.div`
  component: DayBox;
  text-align: center;
  font-size: 1.2rem;
  width: 2.5rem;
  border-radius: 0.3em;

  color: ${theme.primaryText};
  border: 1px solid ${theme.primaryText};
  background-color: ${theme.background};

  line-height: 2.5rem;
  height: 2.5rem;
  padding: 0;
  margin: auto 0.25rem 0.25rem 0.25rem;

  &.notInProgram {
    opacity: 0.25;
  };

  &.workoutDay{
    background-color: ${theme.positive.lighten(1.25)};
  }

  &.workedOut{
    background-color: ${theme.positive};
    color: ${theme.primaryText.negate()};
  }

  &.today{
    font-weight: bold;
    border: 2px solid ${theme.primaryText};
    box-shadow: 0px 0px 0px 2px ${theme.primaryText};
    z-index: 1;
  }

  &.missed{
    background-color: ${theme.negative.lighten(1)};
  }

`;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Day = props =>
  <DayBox
    className={`
      ${!props.inProgram ? 'notInProgram' : ''}
      ${props.isWorkoutDay ? 'workoutDay' : ''}
      ${props.workedOut ? 'workedOut' : ''}
      ${props.missed ? 'missed' : ''}
      ${props.isToday ? 'today' : ''}`}
    data-value={days.indexOf(props.day)}
    title={props.day}
    {...props}
  >
    {props.day.substr(0, 1)}
  </DayBox>;

Day.defaultProps = {
  onClick: e => {}
};

Day.propTypes = {
  inProgram: PropTypes.bool,
  isWorkoutDay: PropTypes.bool,
  workedOut: PropTypes.bool,
  missed: PropTypes.bool,
  isToday: PropTypes.bool,
  day: PropTypes.oneOf(days),
  onClick: PropTypes.func
};

export default Day;