import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../ProgressBar';

test('ProgressBar renders', () => {
  const component = shallow(<ProgressBar />);
  expect(component).toMatchSnapshot();
});
