import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

test('Button renders', () => {
  const component = shallow(<Button />);
  expect(component).toMatchSnapshot();
});
