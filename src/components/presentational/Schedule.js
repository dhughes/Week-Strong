import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Hbox } from './Box';
import Day from './Day';

class Schedule extends Component {
  onDayClick = e => this.props.onDayClick(e.target.getAttribute('data-value'));
  render() {
    return (
      <Hbox justifyContent="space-between">
        <Day isWorkoutDay={this.props.selectedDays.includes(0)} onClick={this.onDayClick} day="Sunday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(1)} onClick={this.onDayClick} day="Monday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(2)} onClick={this.onDayClick} day="Tuesday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(3)} onClick={this.onDayClick} day="Wednesday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(4)} onClick={this.onDayClick} day="Thursday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(5)} onClick={this.onDayClick} day="Friday" inProgram />
        <Day isWorkoutDay={this.props.selectedDays.includes(6)} onClick={this.onDayClick} day="Saturday" inProgram />
      </Hbox>
    );
  }
}
Schedule.propTypes = {
  selectedDays: PropTypes.arrayOf(PropTypes.number)
};

export default Schedule;
