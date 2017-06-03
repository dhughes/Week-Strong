import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button`
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  color: #EEEBD3;
  font-size: 1em;

  ${props => props.isSelected && css`
      border: 4px solid #69995D;
      background-color: #69995D;
      color: #393E41;
  `};

  ${props => props.wasMissed && css`
      border: 4px solid #B02E0C;
      background-color: #B02E0C;
      color: #EEEBD3;
  `};

  ${props => props.isToday && css`
      border: 4px solid #EEEBD3;
      font-weight: bold;
  `};

`;

const Day = props => {
  return (
    <Container
      isToday={props.dayOfWeek === props.today}
      isSelected={props.isSelected}
      wasMissed={props.wasMissed}
      onClick={props.onClick}
      value={props.dayOfWeek}
    >
      {getDay(props.dayOfWeek).substring(0, 1).toUpperCase()}
    </Container>
  );
};

Day.defaultProps = {
  isSelected: false,
  wasMissed: false,
  onClick: () => {}
};

const getDay = day => {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
};

export default Day;
