import React from 'react';
import { shallow, mount } from 'enzyme';
import Day from '../Day';

test('Day renders', () => {
  const component = shallow(<Day dayOfWeek={2} />);
  expect(component).toMatchSnapshot();
});

test('Day shows letter of day of week', () => {
  const component = mount(<Day dayOfWeek={1} />);
  expect(component.find('button').text()).toEqual('M');
});

test('Day shows uppercase letter of day of week', () => {
  const component = mount(<Day dayOfWeek={3} />);
  expect(component.find('button').text()).toEqual('W');
});
