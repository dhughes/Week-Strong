import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bs from 'binary-search';
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

  // the history value might be of use in the future. perhaps touching a workout date might give you a breakdown of that workout?
  const history = program.workouts.map(workoutId => state.entities.workout[workoutId]);
  const historyDates = history.map(day => day.date);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // is today a workout day?
  let nextWorkoutDay;
  if (program.selectedDays.indexOf(today.getDay()) !== -1) {
    nextWorkoutDay = today;
  } else {
    const nextDay = program.selectedDays[bs(program.selectedDays, today.getDay(), (a, b) => a - b) * -1 - 1];
    console.log(nextDay);
    nextWorkoutDay = new Date(2018, 1, 1);
  }
  // if so, have I worked out yet?
  // if not, roll forward until we find the next workout day

  return {
    user: state.entities.user[state.user],
    program,
    historyDates,
    beginDate: new Date(new Date(program.created).setDate(program.created.getDate() - program.created.getDay())),
    endDate: new Date(new Date(today).setDate(today.getDate() + (6 - today.getDay()))),
    today,
    test,
    nextWorkoutDay
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

      {props.nextWorkoutDay.getTime() === props.today.getTime()
        ? <WorkoutDay />
        : <RestDay nextWorkoutDay={props.nextWorkoutDay} />}

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
