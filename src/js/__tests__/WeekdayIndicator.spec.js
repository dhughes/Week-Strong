import React from 'react';
import { shallow } from 'enzyme';
import WeekdayIndicator from '../WeekdayIndicator';

test('WeekdayIndicator renders', () => {
  const component = shallow(<WeekdayIndicator />);
  expect(component).toMatchSnapshot();
});

test('WeekdayIndicator should show seven boxes', () => {
  const component = shallow(<WeekdayIndicator />);
  expect(component.find('Day').length).toEqual(7);
});
