import React from 'react';
import { Hbox } from './Box';
import Day from './Day';

const WeekdayIndicator = props => {
  let days = [];
  for (let x = 0; x <= 6; x++) {
    days.push(
      <Day
        key={x}
        isSelected={props.selected.includes(x)}
        wasMissed={props.missed.includes(x)}
        dayOfWeek={x}
        today={props.today}
        onClick={props.onDayClick}
      />
    );
  }
  return (
    <Hbox>
      {days}
    </Hbox>
  );
};

WeekdayIndicator.defaultProps = {
  selected: [],
  missed: [],
  onDayClick: () => {}
};

export default WeekdayIndicator;
