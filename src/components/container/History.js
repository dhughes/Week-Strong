import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LocalDate, Period, DayOfWeek } from 'js-joda';
import Day from '../presentational/Day';
import Week from '../presentational/styled/Week';
import Weeks from '../presentational/styled/Weeks';
import { Hbox } from '../presentational/Box';

// /**
//  * Create an array of LocalDate objects from the beginDate to the endDate
//  * @param  {[type]} beginDate [description]
//  * @param  {[type]} endDate   [description]
//  * @return {[type]}           [description]
//  */
// function enumerateDates(beginDate, endDate) {
//   const dates = [];
//
//   for (let d = 0; d <= Period.between(beginDate, endDate).days(); d++) {
//     dates.push(beginDate.plusDays(d));
//   }
//
//   return dates;
// }
//
//
//
// /**
//  * Create an array of weeks that are themselves arrays of LocalDate instances
//  * @param  {[type]} beginDate [description]
//  * @param  {[type]} endDate   [description]
//  * @return {[type]}           [description]
//  */
// function enumerateWeeks(beginDate, endDate) {
//   // get an array of dates
//   let dates = enumerateDates(beginDate, endDate);
//
//   // group the array of dates into an array of weeks of dates
//   let weeks = dates.reduce((weeks, date) => {
//     if (date.dayOfWeek() === DayOfWeek.SUNDAY) weeks.push([]);
//     weeks[weeks.length - 1].push(date);
//     return weeks;
//   }, []);
//
//   return weeks;
// }

const mapStateToProps = (state, ownProps) => {
  const program = state.entities.program[state.entities.user[state.user].program];
  // get the history and...
  const history = program.history
    .map(id => state.entities.event[id])
    // group the history into arrays of weeks
    .reduce((weeks, event) => {
      if (event.date.dayOfWeek() === DayOfWeek.SUNDAY) weeks.push([]);
      weeks[weeks.length - 1].push(event);
      return weeks;
    }, []);

  return {
    history
  };
};

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
        {this.props.history.map((week, index) =>
          <Week key={index} deepRef={week => (this.week[index] = week)}>
            <div>
              Week {index + 1}
            </div>
            <Hbox justifyContent="space-between">
              {week.map((event, index) => <Day key={index} event={event} />)}
            </Hbox>
          </Week>
        )}
        {/*


                const inProgram = date > this.props.fitnessTestDate;
                const isBeforeStart = date <= this.props.fitnessTestDate;
                const isAfterToday = date > this.props.today;
                const workedOut = this.props.programHistory.find(historyDate => historyDate.equals(date)) !== undefined;

                // if we worked out then we need to reset the missed workout tracker
                const isWorkoutDay = inProgram && this.props.programDays.indexOf(date.dayOfWeek().value()) !== -1;

                const isMakeupDay = !isWorkoutDay && workedOut;

                // was thoday a workout day that was missed?
                const missed = inProgram && isWorkoutDay && date.compareTo(this.props.today) < 0 && !workedOut;

                const isFitnessTestDay = date.equals(this.props.fitnessTestDate);

                return (

                  <Day
                    key={index}
                    day={date.dayOfWeek().name()}
                    inProgram={inProgram}
                    isWorkoutDay={isWorkoutDay}
                    isMakeupDay={isMakeupDay}
                    workedOut={workedOut}
                    missed={missed}
                    isToday={date.equals(this.props.today)}
                    isBeforeStart={isBeforeStart}
                    isFitnessTestDay={isFitnessTestDay}
                    isAfterToday={isAfterToday}
                  />

                );
              })}
            </Hbox>
          </Week>
        )} */}
        <div className="historySpacer">&nbsp;</div>
      </Weeks>
    );
  }
}

// History.propTypes = {
//   beginDate: PropTypes.instanceOf(LocalDate).isRequired,
//   endDate: PropTypes.instanceOf(LocalDate).isRequired,
//   createdDate: PropTypes.instanceOf(LocalDate).isRequired,
//   fitnessTestDate: PropTypes.instanceOf(LocalDate).isRequired,
//   today: PropTypes.instanceOf(LocalDate).isRequired,
//   programDays: PropTypes.arrayOf(PropTypes.number).isRequired,
//   programHistory: PropTypes.arrayOf(PropTypes.instanceOf(LocalDate)).isRequired
// };

export default connect(mapStateToProps)(History);
