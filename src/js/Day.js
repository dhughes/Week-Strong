import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button`
  text-align: center;
  width: 2.5em;
  height: 2.5em;

  line-height: 2.5rem;
  font-size: 1.2rem;
  color: ${props => props.theme.font};

  background-color: ${props => props.theme.background};
  border: 3px solid ${props => props.theme.font};

  &:focus {
    z-index: 2;
  }

  ${props => props.isSelected && css`
      ${/* border: 3px solid ${props => props.theme.positive}; */ ''}
      background-color: ${props => props.theme.positive};
      color: ${props => props.theme.background};;
  `};

  ${props => props.wasMissed && css`
      ${/* border: 3px solid ${props => props.theme.warning}; */ ''}
      background-color: ${props => props.theme.warning};
      color: ${props => props.theme.font};
  `};

  ${props => props.isToday && css`
      ${/* border: 3px solid ${props => props.theme.font}; */ ''}
      font-weight: bold;
      border: 3px solid ${props => props.theme.header};
      box-shadow: 0px 0px 0px 3px ${props => props.theme.header};
      z-index: 1
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
