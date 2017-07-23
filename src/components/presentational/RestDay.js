import React from 'react';
import PropTypes from 'prop-types';
import { LocalDate } from 'js-joda';

function formatDayName(day) {
  return day.substr(0, 1) + day.substr(1).toLowerCase();
}

function formatOrdinal(date) {
  switch (date.toString()[date.toString().length - 1]) {
    case '1':
      return date + 'st';
    case '2':
      return date + 'nd';
    case '3':
      return date + 'rd';
    default:
      return date + 'th';
  }
}

const RestDay = props =>
  <div>
    {props.done ? <h3>You're done for the day!</h3> : <h3>Today is a rest day!</h3>}
    <p>
      Come back on {formatDayName(props.nextWorkoutDay.dayOfWeek().name())} the {}
      {formatOrdinal(props.nextWorkoutDay.dayOfMonth())}.
    </p>
  </div>;

RestDay.propTypes = {
  nextWorkoutDay: PropTypes.instanceOf(LocalDate).isRequired,
  done: PropTypes.bool.isRequired
};

export default RestDay;
