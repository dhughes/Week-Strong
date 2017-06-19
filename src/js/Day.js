import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';

const DayBox = styled.div`
  component: DayBox;
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

  ${props => props.isWorkoutDay && css`
    background-color: ${theme.positive};
    color: ${theme.primaryText.negate()};
  `};

  ${props => props.restored !== undefined && css`
    background-color: ${theme.negative};
    color: ${theme.primaryText.negate()};
  `};

  ${props => props.isToday && css`
    font-weight: bold;
    border: 2px solid ${theme.primaryText};
    box-shadow: 0px 0px 0px 2px ${theme.primaryText};
    z-index: 1;
  `}
`;

const Day = props => <DayBox id="box123" {...props}>{props.day.substr(0, 1)}</DayBox>;

export default Day;
