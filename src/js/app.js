import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Vbox, Hbox } from './Box';
import ExerciseTile from './ExerciseTile';
import CountdownTimer from './CountdownTimer';
import WeekdayIndicator from './WeekdayIndicator';
import Day from './Day';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Vbox>
          <Day dayOfWeek={5} today={new Date().getDay()} />
          <WeekdayIndicator today={3} selected={[1, 3, 5]} missed={[1]} onDayClick={e => console.log(e.target.value)} />
          <Hbox style={{ backgroundColor: theme.background }}>
            <ExerciseTile label="Pushups" src="/img/pushups.jpg" />
            <ExerciseTile label="Pullups" src="/img/pullups.jpg" selected count="200" />
          </Hbox>
          <CountdownTimer topLabel="Counting down" seconds={0} bottomLabel="Seconds" />
        </Vbox>
      </Root>
    </ThemeProvider>
  );
};

const theme = {
  header: '#8ACDEA',
  font: '#EEEBD3',
  background: '#393E41',
  positive: '#69995D',
  warning: '#B02E0C'
};

export default App;
