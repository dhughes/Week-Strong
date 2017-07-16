import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day, { days, months } from './Day';
import Week from './styled/Week';
import Weeks from './styled/Weeks';
import { Hbox, Vbox } from './Box';

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
    this.week = [];
  }

  componentDidMount() {
    // note that "weeks" is actually a single <Weeks> element. "week" is an array of <Week> elements.
    this.weeks.scrollLeft = this.week[0].offsetWidth * (this.week.length - 1);
  }

  render() {
    return (
      <Weeks deepRef={weeks => (this.weeks = weeks)}>
        <div className="historySpacer">&nbsp;</div>
        {enumerateWeeks(this.props.beginDate, this.props.endDate).map((week, index) =>
          <Week key={index} deepRef={week => (this.week[index] = week)}>
            {/* <div>
              Week {index + 1}
            </div> */}
            <Hbox justifyContent="space-between">
              {week.map((date, index) => {
                const inProgram = date >= this.props.fitnessTestDate;
                const isBeforeStart = date <= this.props.fitnessTestDate;
                const isAfterToday = date > this.props.today;
                const isWorkoutDay = inProgram && this.props.programDays.indexOf(date.getDay()) !== -1;
                const workedOut =
                  this.props.programHistory.find(historyDate => historyDate.getTime() === date.getTime()) !== undefined;
                const missed = inProgram && isWorkoutDay && date.getTime() < this.props.today.getTime() && !workedOut;
                const isFitnessTestDay = date.getTime() === this.props.fitnessTestDate.getTime();

                return (
                  <Vbox>
                    <Day
                      key={index}
                      day={days[date.getDay()]}
                      inProgram={inProgram}
                      isWorkoutDay={isWorkoutDay}
                      workedOut={workedOut}
                      missed={missed}
                      isToday={date.getTime() === this.props.today.getTime()}
                      isBeforeStart={isBeforeStart}
                      isFitnessTestDay={isFitnessTestDay}
                      isAfterToday={isAfterToday}
                    />
                    <span className="date" key={`span${index}`}>
                      {months[date.getMonth()].substr(0, 3)} {date.getDate()}
                    </span>
                  </Vbox>
                );
              })}
            </Hbox>
          </Week>
        )}
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
