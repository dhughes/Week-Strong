import React from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import NavigationBar from './NavigationBar';
import { Pencil, Settings } from './Icon';
import WeekdayIndicator from './WeekdayIndicator';

const H2 = styled.h2`
  color: ${props => props.theme.font};
  font-size: 1.4rem;
  text-align: center;
  margin: 0.5em auto;
`;

const LandingPage = props => {
  const today = new Date().getDay();

  return (
    <Vbox>
      <NavigationBar
        leftIcon={<Pencil />}
        leftTo="/editProgram"
        title="Week-Strong"
        rightIcon={<Settings />}
        rightTo="/settings"
      />

      <Body>
        <H2>Welcome back, {props.user.name.split(' ')[0]}</H2>

        <WeekdayIndicator selected={props.program.days} missed={props.program.missed} today={today} />

        {props.program.days.includes(today)
          ? <div>It's a workout day!</div>
          : <div>Today is a rest day! Come back on XXX</div>}
      </Body>
    </Vbox>
  );
};

LandingPage.defaultProps = {
  user: {},
  program: {}
};

export default LandingPage;
