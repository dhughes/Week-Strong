import React from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import Body from './Body';
import Footer from './Footer';
import LinkButton from './LinkButton';
import NavigationBar from './NavigationBar';
import { ChevronLeft } from './Icon';


const LeftBody = styled(Body)`
  text-align: left;
`;

const SetDuration = props => (
  <Vbox>
    <NavigationBar leftIcon={<ChevronLeft />} leftTo="/" title="Create Your Program" />

    <LeftBody>
      <h2>You chose {props.selectedExerciseCount} exercises</h2>

      <p>Choose the days of the week you will work out. Choose carefully, this can't be changed once you start your program.</p>

      <Hbox justifyContent="space-between">
        day selector
      </Hbox>

      <p>Choose the number of weeks to complete your goal. Fewer weeks are harder!</p>


    </LeftBody>

    <Footer>
      <LinkButton to="/setDuration" label="Continue" className="default" />
    </Footer>
  </Vbox>
);

export default SetDuration;
