import React from 'react';
import { Hbox } from './Box';
import Day from './Day';
import styled from 'styled-components';

const Container = styled(Hbox)`
  margin: 0.5em auto 1em auto;
`;

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
    <Container justifyContent="space-between">
      {days}
    </Container>
  );
};

WeekdayIndicator.defaultProps = {
  selected: [],
  missed: [],
  onDayClick: () => {},
  today: new Date().getDay()
};

export default WeekdayIndicator;
