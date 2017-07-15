import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import NavigationBar from '../presentational/NavigationBar';
import { Pencil, Settings } from '../presentational/Icon';
import History from '../presentational/History';

const mapStateToProps = (state, ownProps) => {
  const program = state.entities.program[state.entities.user[state.user].program];
  const lastHistoryDate = program.workouts.reduce((lastWorkoutDate, workout) => {
    return lastWorkoutDate;
  }, new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    user: state.entities.user[state.user],
    program,
    beginDate: new Date(new Date(program.created).setDate(program.created.getDate() - program.created.getDay())),
    endDate: new Date(new Date(lastHistoryDate).setDate(lastHistoryDate.getDate() + (6 - lastHistoryDate.getDay()))),
    today
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
          fitnessTestDate={props.program.created}
          programDays={props.program.selectedDays}
          programHistory={[]}
        />
      </Vbox>

      <div>
        <h3>It's a workout day!</h3>
        <p>We'll need to return to this later.</p>
      </div>

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
