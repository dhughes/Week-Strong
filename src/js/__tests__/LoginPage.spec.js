import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../LoginPage';

test('LoginPage renders', () => {
  const component = shallow(<LoginPage />);
  expect(component).toMatchSnapshot();
});
