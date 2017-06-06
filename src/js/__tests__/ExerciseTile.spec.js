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

test('ExerciseTile shows checkmark when isSelected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" isSelected={true} />);
  expect(component.find('Checkmark').length).toEqual(1);
});

test('ExerciseTile does not show checkmark when not isSelected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" isSelected={false} />);
  expect(component.find('Checkmark').length).toEqual(0);
});

test('ExerciseTile checkmark defaults to not selected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" />);
  expect(component.find('Checkmark').length).toEqual(0);
});

test('ExerciseTile shows pullups as title', () => {
  const component = mount(<ExerciseTile label="Pullups" src="/img/pullups.jpg" isSelected />);
  expect(component.find('Styled(styled.div)').filterWhere(n => n.prop('title') === 'Pullups').length).toBe(1);
});

test('ExerciseTile defaults to not isSelected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" isSelected={false} />);
  expect(component.find('.selected').length).toEqual(0);
});

test('ExerciseTile does not show count when not isSelected', () => {
  const component = shallow(<ExerciseTile label="Pushups" src="/img/pullups.jpg" count={100} />);
  expect(component.find('.count').length).toEqual(0);
});

test('ExerciseTile shows count when isSelected', () => {
  const component = mount(<ExerciseTile label="Pushups" src="/img/pullups.jpg" isSelected count={100} />);
  expect(component.find('h2').text()).toEqual(100 + '');
});

test('ExerciseTile shows pullups image', () => {
  const component = shallow(<ExerciseTile src="/img/pullups.jpg" />);
  expect(component.html().indexOf('/img/pullups.jpg')).not.toBe(-1);
});

test('ExerciseTile shows x when isSelected', () => {
  const component = mount(<ExerciseTile label="Pushups" src="/img/pullups.jpg" isSelected count={100} />);
  expect(component.find('button').length).toEqual(1);
});
