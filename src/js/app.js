import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Vbox, Hbox } from './Box';
import ExerciseTile from './ExerciseTile';
//import CountdownTimer from './CountdownTimer';
import WeekdayIndicator from './WeekdayIndicator';
import Day from './Day';
import ProgressBar from './ProgressBar';
import DifficultyGauge from './DifficultyGauge';
import Stepper from './Stepper';
import LabelValue from './LabelValue';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 1.2em;
  background-color: ${props => props.theme.background};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: 50
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Vbox>
            <LabelValue label="Streak" value="8 days" />
            <Stepper
              value={this.state.testValue}
              label="Pushups"
              onStepUp={e => this.setState(prev => ({ testValue: prev.testValue + 5 }))}
              onStepDown={e => this.setState(prev => ({ testValue: prev.testValue - 5 }))}
            />
            <DifficultyGauge difficulty={this.state.testValue} />
            <ProgressBar />
            <Day dayOfWeek={5} today={new Date().getDay()} />
            <WeekdayIndicator
              today={4}
              selected={[1, 3, 5]}
              missed={[1]}
              onDayClick={e => console.log(e.target.value)}
            />
            <Hbox style={{ backgroundColor: theme.background }}>
              <ExerciseTile
                label="Pushups"
                src="/img/pushups.jpg"
                onSelect={e => console.log('selected')}
                onRemove={e => console.log('removed')}
              />
              <ExerciseTile
                label="Pullups"
                isSelected
                count="10"
                src="/img/pullups.jpg"
                onSelect={e => console.log('selected')}
                onRemove={e => console.log('removed')}
              />
            </Hbox>

          </Vbox>
        </Root>
      </ThemeProvider>
    );
  }
}

const theme = {
  header: '#8ACDEA',
  font: '#EEEBD3',
  background: '#393E41',
  positive: '#69995D',
  warning: '#CC340E'
};

export default App;
