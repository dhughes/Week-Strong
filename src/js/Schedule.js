import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import Day from './Day2';
import theme from './theme';

const Weeks = styled(Hbox)`
  color: black;
  width: 100vw;
  margin-left: -1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  white-space: nowrap;
  overflow: scroll;
  box-sizing: border-box;

  & > div{
    padding: 0 0.5rem;
    border-right: 1px solid ${theme.separator};
  }

  & > div:first-child{
    margin-left: 1em;
  }

  & > div:last-child{
    margin-right: 1em;
    border-right: 0;
  }
`;

const Week = styled(Vbox)`
  width: 100vw;
  box-sizing: border-box;
  margin:0;

  & > div{
    font-size: 0.9rem;
    color: ${theme.hintText};
  }
`;

const WeekDays = styled(Hbox)`
`;

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekScrollPosition: undefined
    };
    this.weeks = {};
  }

  componentDidMount() {
    if (this.state.weekScrollPosition === undefined) {
      const weekWidth = this.weeks[1].offsetWidth;

      // set the scroll position for the schedule to show the current week.
      this.schedule.scrollLeft = (this.props.currentWeek - 1) * weekWidth;
    }
  }

  addRefForWeek(week) {
    return component => (this.weeks[week] = component);
  }
  getDay(day) {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return '';
    }
  }

  getNextWorkoutDay = (today, selectedDays) => {
    // clone the date so we don't modify it
    today = new Date(today);
    const dayOfWeek = today.getDay();
    const nextWorkoutDay = selectedDays.find(e => e > dayOfWeek);
    const daysAway = nextWorkoutDay - dayOfWeek;
    return new Date(today.setDate(today.getDate() + daysAway));
  };

  // todo: test this
  dateOrdinal = date => {
    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3:
        return date + 'rd';
      default:
        return date + 'th';
    }
  };
  render() {
    let weekComponents = [];
    let dayComponents = [];
    let x = 1;

    // build the schedule display
    for (let week of this.props.history) {
      for (let day of week) {
        dayComponents.push(
          <Day
            key={day.date}
            day={this.getDay(day.date.getDay())}
            isToday={day.date.getTime() === this.props.today.getTime()}
            restored={day.restored}
            isWorkoutDay={day.day}
            inProgram={day.inProgram}
          />
        );
      }
      weekComponents.push(
        <Week key={x} innerRef={this.addRefForWeek(x)} weeks={this.props.history.length}>
          <div>Week {x}</div>
          <WeekDays justifyContent="space-between">{dayComponents}</WeekDays>
        </Week>
      );
      dayComponents = [];
      x++;
    }

    return (
      <Weeks innerRef={schedule => (this.schedule = schedule)}>
        {weekComponents}
      </Weeks>
    );
  }
}

export default Schedule;
