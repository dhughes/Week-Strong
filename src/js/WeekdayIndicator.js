import React from 'react';
import { Hbox } from './Box';
import Day from './Day';
import styled from 'styled-components';

const Container = styled(Hbox)`
  margin: 0.1em auto;
`;

const WeekdayIndicator = props => {
  let days = [];
  for (let x = 0; x <= 6; x++) {
    // did the user workout on this day?
    const workedOut = props.workedOutDays.includes(x);
    console.log(props.today);
    const wasMissed = props.selected.includes(x) && !props.workedOutDays.includes(x);
    days.push(
      <Day
        key={x}
        inCurrentWeek={props.isCurrentWeek}
        isWorkoutDay={props.selected.includes(x) || workedOut}
        wasMissed={wasMissed}
        dayOfWeek={x}
        today={props.today}
        onClick={props.onDayClick}
      />
    );
  }
  return (
    <Container justifyContent="space-between">
      {days}
    </Container>
  );
};

WeekdayIndicator.defaultProps = {
  selected: [],
  onDayClick: () => {},
  today: undefined,
  isCurrentWeek: false
};

export default WeekdayIndicator;
