import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';

const Container = styled.button`
  text-align: center;
  font-size: 1.2rem;
  width: 2.5rem;

  color: ${theme.primaryText};
  border: 1px solid ${theme.primaryText};
  background-color: ${theme.background};

  line-height: 2.5rem;
  height: 2.5rem;
  padding: 0;
  margin: auto 0.25rem 0.25rem 0.25rem;

  ${props => !props.inProgram && css`
    opacity: 0.25;
  `};

  ${props => props.day && css`
    background-color: ${theme.positive};
    color: ${theme.primaryText.negate()};
  `};

  ${props => props.restored !== undefined && css`
    background-color: ${theme.negative};
    color: ${theme.primaryText.negate()};
  `};

  ${props => props.date.getTime() === props.today.getTime() && css`
    font-weight: bold;
    border: 2px solid ${theme.primaryText};
    box-shadow: 0px 0px 0px 2px ${theme.primaryText};
    z-index: 1;
  `}

`;

const Day = props => {
  return (
    <Container {...props}>
      {getDay(props.date.getDay()).substr(0, 1)}

    </Container>
  );
};

Day.defaultProps = {
  date: undefined
  // isWorkoutDay: false,
  // wasMissed: false,
  // onClick: () => {}
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
export { getDay };
