import React from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import Footer from './Footer';
import LinkButton from './LinkButton';
import NavigationBar from './NavigationBar';
import ScheduleSummary from './ScheduleSummary';
import { ChevronLeft } from './Icon';

const Div = styled.div`
  component: SummaryBodyDiv;
  text-align: left;
  flex-shrink: 0;
`;

const Summary = props => (
  <Vbox>
    <NavigationBar leftBack leftIcon={<ChevronLeft />} title="Program Summary" />

    <Body justifyContent="flex-start">
      <Div>
        <h2>{props.weeks} Week Program:</h2>

        <ScheduleSummary />

        <h2>Exercises:</h2>

        <ul>
          <li>Ex 1</li>
          <li>Ex 2</li>
        </ul>

        <h2>Get Started:</h2>

        <p>
          To get started you must first take a fitness test. You will do five rounds of each workout, to your max effort. Your total rounds tells us where to get started.
        </p>
      </Div>
    </Body>
    <Footer style={{ flexShrink: 0 }}>
      <LinkButton to="/fitnessTest" label="Start The Test!" className="default" />
      <LinkButton to="/createProfile" label="Take Test Later" />
    </Footer>

  </Vbox>
);

export default Summary;
