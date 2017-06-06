import React from 'react';
import { shallow } from 'enzyme';
import LoggedOutLanding from '../LoggedOutLanding';

xtest('LoggedOutLanding renders', () => {
  const component = shallow(<LoggedOutLanding />);
  expect(component).toMatchSnapshot();
});

test('LoggedOutLanding shows logo', () => {
  const component = shallow(<LoggedOutLanding />);
  expect(component.find('img').length).toEqual(1);
});
