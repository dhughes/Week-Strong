import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LocalDate } from 'js-joda';
import theme from '../../util/theme';
import { PlayCircle, Checkmark, Close } from './Icon';

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

  &.workoutDay {
    background-color: ${theme.positive.lighten(1.25)};
  }

  &.workout {
    background-color: ${theme.positive};
    color: ${theme.primaryText.negate()};
  }

  &.today {
    font-weight: bold;
    border: 2px solid ${theme.primaryText};
    box-shadow: 0px 0px 0px 2px ${theme.primaryText};
    z-index: 1;
  }

  &.skip {
    background-color: ${theme.negative.lighten(1)};
  }

  &.null {
    opacity: 0.5;
  }

  &.disabled {
    border: 1px solid ${theme.primaryText.fade(0.75)};
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
      ${props.event.type ? props.event.type.toLowerCase() : 'null'}
      ${props.event.inProgram ? '' : 'notInProgram'}
      ${props.event.date.compareTo(LocalDate.now()) === 0 ? 'today' : ''}
      `}
    title={props.event.date.dayOfWeek()}
    {...props}
  >
    {props.event.type === 'TEST' ? <PlayCircle /> : null}
    {props.event.type === 'WORKOUT' ? <Checkmark /> : null}
    {props.event.type === 'SKIP' ? <Close /> : null}
  </DayBox>;

Day.defaultProps = {
  onClick: e => {},
  disabled: false
};

Day.propTypes = {
  event: PropTypes.object
};

export default Day;
