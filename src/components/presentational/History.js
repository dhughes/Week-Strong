import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from './Day';
import Week from './styled/Week';
import Weeks from './styled/Weeks';
import { Hbox } from './Box';

function enumerateDates(beginDate, endDate) {
  const dates = [];

  let currentDate = moment(beginDate);
  dates.push(currentDate.clone().toDate());

  endDate = moment(endDate);

  while (currentDate.add(1, 'days').diff(endDate) <= 0) {
    dates.push(currentDate.clone().toDate());
  }

  return dates;
}

function enumerateWeeks(beginDate, endDate) {
  let dates = enumerateDates(beginDate, endDate);
  let weeks = dates.reduce((weeks, date) => {
    if (date.getDay() === 0) weeks.push([]);
    weeks[weeks.length - 1].push(date);
    return weeks;
  }, []);

  return weeks;
}

class History extends Component {
  constructor(props) {
    super(props);
    this.history = undefined;
  }

  componentDidMount() {
    this.history.scrollLeft = this.history.scrollWidth;
  }

  render() {
    return (
      <Weeks innerRef={history => (this.history = history)}>
        <div className="historySpacer">&nbsp;</div>
        {enumerateWeeks(this.props.beginDate, this.props.endDate).map((week, index) => (
          <Week key={index}>
            <div>Week {index + 1}</div>
            <Hbox justifyContent="space-between">
              {week.map((date, index) => {
                const inProgram = date > this.props.fitnessTestDate;
                const isWorkoutDay = inProgram && this.props.programDays.indexOf(date.getDay()) !== -1;
                const workedOut =
                  this.props.programHistory.find(historyDate => historyDate.getTime() === date.getTime()) !== undefined;
                const missed = inProgram && isWorkoutDay && date.getTime() < this.props.today.getTime() && !workedOut;
                return (
                  <Day
                    key={index}
                    date={date}
                    isToday={date.getTime() === this.props.today.getTime()}
                    inProgram={inProgram}
                    isWorkoutDay={isWorkoutDay}
                    missed={missed}
                    workedOut={workedOut}
                  />
                );
              })}
            </Hbox>
          </Week>
        ))}
        <div className="historySpacer">&nbsp;</div>
      </Weeks>
    );
  }
}

History.propTypes = {
  beginDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  fitnessTestDate: PropTypes.instanceOf(Date).isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  programDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  programHistory: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired
};

export default History;
