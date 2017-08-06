import React from 'react';
import Body from '../styled/Body';
import Button from '../styled/Button';
import { Vbox } from '../Box';

const PendingTest = props =>
  <Body justifyContent="space-between">
    <h2>
      Welcome, {props.user.name.split(' ')[0]}
    </h2>

    <Vbox style={{ flexGrow: 1 }} justifyContent="center">
      <h3>Fitness Test</h3>
      <div>
        To get started you must first take a fitness test. You will do five rounds of each workout, to your max effort.
        Your total rounds tells us where to start you in your program.
      </div>
      <br />
      <Button className="default">Take Fitness Test</Button>
    </Vbox>
  </Body>;

export default PendingTest;
