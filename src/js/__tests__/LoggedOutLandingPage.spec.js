import React from 'react';
import { shallow } from 'enzyme';
import LoggedOutLandingPage from '../LoggedOutLandingPage';

xtest('LoggedOutLandingPage renders', () => {
  const component = shallow(<LoggedOutLandingPage />);
  expect(component).toMatchSnapshot();
});

test('LoggedOutLandingPage shows logo', () => {
  const component = shallow(<LoggedOutLandingPage />);
  expect(component.find('img').length).toEqual(1);
});
