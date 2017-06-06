import React from 'react';
import { shallow, mount } from 'enzyme';
import NavigationBar from '../NavigationBar';

test('NavigationBar renders', () => {
  const component = shallow(<NavigationBar />);
  expect(component).toMatchSnapshot();
});
