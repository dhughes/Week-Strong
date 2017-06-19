import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import NavigationBar from './NavigationBar';
import { Pencil, Settings } from './Icon';
import ScheduleSummary from './ScheduleSummary';
import LinkButton from './LinkButton';

const H2 = styled.h2`
  font-size: 1.4rem;
  text-align: center;
`;

class FitnessTestIncompleteLandingPage extends Component {
  render() {
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
          <Vbox>
            <H2>Welcome, {this.props.user.name.split(' ')[0]}</H2>

            <ScheduleSummary />
          </Vbox>

          <p>
            To get started you must first take a fitness test. You will do five rounds of each workout, to your max effort. Your total rounds tells us where to get started.
          </p>

          <LinkButton to="/test" label="Start The Test!" className="default" />

        </Body>
      </Vbox>
    );
  }
}

FitnessTestIncompleteLandingPage.defaultProps = {
  user: {},
  program: {},
  today: new Date()
};

export default FitnessTestIncompleteLandingPage;
