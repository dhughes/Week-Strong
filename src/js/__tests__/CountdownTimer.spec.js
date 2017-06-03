import React from 'react';
import { shallow } from 'enzyme';
import CountdownTimer from '../CountdownTimer.js';

test('Countdown renders', () => {
  const component = shallow(<CountdownTimer seconds={5} />);
  expect(component).toMatchSnapshot();
});

test('Countdown renders top label', () => {
  const component = shallow(<CountdownTimer topLabel="Top Label" seconds={5} />);
  const label = <h3>Top Label</h3>;

  expect(component.contains(label)).toEqual(true);
});

test('Countdown renders bottom label', () => {
  const component = shallow(<CountdownTimer bottomLabel="Bottom Label" seconds={5} />);
  const label = <h3>Bottom Label</h3>;

  expect(component.contains(label)).toEqual(true);
});

test('Countdown renders both labels', () => {
  const component = shallow(<CountdownTimer topLabel="Top Label" bottomLabel="Bottom Label" seconds={5} />);
  const topLabel = <h3>Top Label</h3>;
  const bottomLabel = <h3>Bottom Label</h3>;

  expect(component.contains(topLabel)).toEqual(true);
  expect(component.contains(bottomLabel)).toEqual(true);
});
