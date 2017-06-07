import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';

test('LandingPage renders', () => {
  const component = shallow(<LandingPage />);
  expect(component).toMatchSnapshot();
});
