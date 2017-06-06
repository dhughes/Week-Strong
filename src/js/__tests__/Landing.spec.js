import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

test('Landing renders', () => {
  const component = shallow(<Landing />);
  expect(component).toMatchSnapshot();
});
