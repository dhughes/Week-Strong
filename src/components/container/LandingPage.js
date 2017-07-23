import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LocalDate, TemporalAdjusters, DayOfWeek } from 'js-joda';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import NavigationBar from '../presentational/NavigationBar';
import { Pencil, Settings } from '../presentational/Icon';
import History from '../presentational/History';
import WorkoutDay from '../presentational/WorkoutDay';
import RestDay from '../presentational/RestDay';

const mapStateToProps = (state, ownProps) => {
  const program = state.entities.program[state.entities.user[state.user].program];
  const test = state.entities.test[program.test];

  // the history value might be of use in the future.
  // perhaps touching a workout date might give you a breakdown of that workout?
  const history = program.workouts.map(workoutId => state.entities.workout[workoutId]);
  const historyDates = history.map(day => day.date);

  // get today
  const today = LocalDate.now();

  // map the selectedDays to the next instance of their dates
  const nextWorkoutDates = program.selectedDays
    // convert the selected days to actual dates of the next workout
    .map(day => today.with(TemporalAdjusters.next(DayOfWeek.of(day))))
    // sort the dates
    .sort((a, b) => a.compareTo(b));

  // did I workout today?
  const workedOutToday = history[history.length - 1].date.equals(today);

  // get the next workout date (including today)
  // todo: take into account whether or not we've worked out today.
  const nextWorkoutDay =
    program.selectedDays.indexOf(today.dayOfWeek().value()) !== -1 && !workedOutToday ? today : nextWorkoutDates[0];

  return {
    user: state.entities.user[state.user],
    program,
    historyDates,
    // get the sunday of or before the date created
    beginDate:
      program.created.dayOfWeek().value() === 7
        ? program.created
        : program.created.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY)),
    // get the saturday of or after today
    endDate: today.dayOfWeek().value() === 6 ? today : today.with(TemporalAdjusters.next(DayOfWeek.SATURDAY)),
    today,
    test,
    nextWorkoutDay,
    workedOutToday
  };
};

const LandingPage = props =>
  <Vbox>
    <NavigationBar
      leftIcon={Pencil}
      leftTo="/editProgram"
      title="Week-Strong"
      rightIcon={Settings}
      rightTo="/settings"
    />
    <Body padded={false} justifyContent="space-between">
      <Vbox>
        <h2>
          Welcome back, {props.user.name.split(' ')[0]}
        </h2>
        <History
          beginDate={props.beginDate} // this is the sunday before the created date
          endDate={props.endDate} // this is the end of the week of the last history record
          createdDate={props.program.created}
          today={props.today}
          fitnessTestDate={props.test.date}
          programDays={props.program.selectedDays}
          programHistory={props.historyDates}
        />
      </Vbox>

      {props.nextWorkoutDay.equals(props.today) && !props.workedOutToday
        ? <WorkoutDay />
        : <RestDay done={props.workedOutToday} nextWorkoutDay={props.nextWorkoutDay} />}

      <Vbox>
        <p>Stats go here</p>
      </Vbox>
    </Body>
  </Vbox>;

LandingPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps)(LandingPage);
