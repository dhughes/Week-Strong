import React from 'react';
import { shallow, mount } from 'enzyme';
import Stepper from '../Stepper';
import sinon from 'sinon';

xtest('Stepper renders', () => {
  const component = shallow(<Stepper />);
  expect(component).toMatchSnapshot();
});

test('Stepper displays minus icon', () => {
  const component = shallow(<Stepper />);
  expect(component.find('Minus').length).toEqual(1);
});

test('Stepper displays plus icon', () => {
  const component = shallow(<Stepper />);
  expect(component.find('Plus').length).toEqual(1);
});

test('Stepper displays value', () => {
  const component = mount(<Stepper value="100" />);
  expect(component.text().indexOf('100')).toBeGreaterThan(-1);
});

test('Stepper displays label', () => {
  const component = mount(<Stepper value="100" label="widgets" />);
  expect(component.text().indexOf('widgets')).toBeGreaterThan(-1);
});

test('Stepper steps up', () => {
  const onButtonClick = sinon.spy();
  const component = shallow(<Stepper value="100" label="widgets" onStepUpClick={onButtonClick} />);

  // trigger click events
  component.find('Plus').simulate('click');
  expect(onButtonClick.getCalls().length).toBeGreaterThan(0);
});

test('Stepper steps down', () => {
  const onButtonClick = sinon.spy();
  const component = shallow(<Stepper value="100" label="widgets" onStepDownClick={onButtonClick} />);

  // trigger click events
  component.find('Minus').simulate('click');
  expect(onButtonClick.getCalls().length).toBeGreaterThan(0);
});
