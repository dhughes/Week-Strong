import React from 'react';
import { shallow, mount } from 'enzyme';
import ExerciseTile from '../ExerciseTile';

test('ExerciseTile renders', () => {
  const component = shallow(<ExerciseTile />);
  expect(component).toMatchSnapshot();
});

test('ExerciseTile shows "Test" label', () => {
  const component = shallow(<ExerciseTile label="Test" />);

  expect(component.find('h4').text()).toEqual('Test');
});

test('ExerciseTile shows "Pushups" label', () => {
  const component = shallow(<ExerciseTile label="Pushups" />);
  expect(component.find('h4').text()).toEqual('Pushups');
});

test('ExerciseTile shows checkmark when selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected={true} />);

  expect(component.find('img').prop('src')).toEqual('check-circle-outline.svg');
});

test('ExerciseTile does not show checkmark when not selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected={false} />);
  expect(component.find('.selected').length).toEqual(0);
});

test('ExerciseTile shows checkmark when selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected />);
  expect(component.find('.selected').length).toEqual(1);
});

test('ExerciseTile shows pullups as title', () => {
  const component = shallow(<ExerciseTile label="Pullups" src="/img/pullups.jpg" selected />);
  expect(component.html().indexOf('title="Pullups"')).toBeGreaterThan(-1);
});

test('ExerciseTile defaults to not selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected={false} />);
  expect(component.find('.selected').length).toEqual(0);
});

test('ExerciseTile does not show count when not selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" count={100} />);
  expect(component.find('.count').length).toEqual(0);
});

test('ExerciseTile shows count when selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected count={100} />);
  expect(component.find('span').length).toEqual(1);
});

test('ExerciseTile shows pullups image', () => {
  const component = shallow(<ExerciseTile src="/img/pullups.jpg" />);
  expect(component.html().indexOf('/img/pullups.jpg')).not.toBe(-1);
});

test('ExerciseTile shows x when selected', () => {
  const component = mount(<ExerciseTile label="Pushups" src="/img/pullups.jpg" selected count={100} />);
  console.log(component.html());
});
