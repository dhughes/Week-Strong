import React from 'react';
import PropTypes from 'prop-types';
import { LocalDate } from 'js-joda';
import Body from '../styled/Body';
import { Vbox } from '../Box';

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
  <Body justifyContent="space-between">
    <h2>
      Welcome back, {props.user.name.split(' ')[0]}
    </h2>

    <Vbox style={{ flexGrow: 1 }} justifyContent="center">
      <h3>Today is a rest day!</h3>
      <p>
        Come back on {formatDayName(props.nextWorkoutDate.dayOfWeek().name())} the {}
        {formatOrdinal(props.nextWorkoutDate.dayOfMonth())}.
      </p>
    </Vbox>

    <Vbox>stats go here....</Vbox>
  </Body>;

RestDay.propTypes = {
  nextWorkoutDate: PropTypes.instanceOf(LocalDate).isRequired
};

export default RestDay;
