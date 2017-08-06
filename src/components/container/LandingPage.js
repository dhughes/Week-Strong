import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import NavigationBar from '../presentational/NavigationBar';
import { Pencil, Settings } from '../presentational/Icon';
import History from './History';
import WorkoutDay from '../presentational/WorkoutDay';
import RestDay from '../presentational/RestDay';

const mapStateToProps = (state, ownProps) => {
  const program = state.entities.program[state.entities.user[state.user].program];

  return {
    user: state.entities.user[state.user],
    program
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
        <History />
      </Vbox>

      {props.program.isWorkoutDay && !props.program.workedOutToday
        ? <WorkoutDay />
        : <RestDay done={props.program.workedOutToday} nextWorkoutDate={props.program.nextWorkoutDate} />}

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
