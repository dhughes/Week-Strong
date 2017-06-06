import React from 'react';
import { shallow, mount } from 'enzyme';
import LabelValue from '../LabelValue';

xtest('LabelValue renders', () => {
  const component = shallow(<LabelValue />);
  expect(component).toMatchSnapshot();
});

test('LabelValue shows Test label', () => {
  const component = mount(<LabelValue label="Test" />);
  expect(component.text().indexOf('Test')).toBeGreaterThan(-1);
});

test('LabelValue shows Streak label', () => {
  const component = mount(<LabelValue label="Streak" />);
  expect(component.text().indexOf('Streak')).toBeGreaterThan(-1);
});

test('LabelValue shows 100 value', () => {
  const component = mount(<LabelValue label="Test" value={100} />);
  expect(component.text().indexOf('100')).toBeGreaterThan(-1);
});

test('LabelValue shows 200 value', () => {
  const component = mount(<LabelValue label="Test" value={200} />);
  expect(component.text().indexOf('200')).toBeGreaterThan(-1);
});

test('LabelValue shows non-numeric values', () => {
  const component = mount(<LabelValue label="Streak" value="8 days" />);
  expect(component.text().indexOf('8 days')).toBeGreaterThan(-1);
});
