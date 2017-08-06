import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Vbox } from '../presentational/Box';
import NavigationBar from '../presentational/NavigationBar';
import { Pencil, Settings } from '../presentational/Icon';
import { loadProgram } from '../actions/actions';
import PendingTest from '../presentational/landingPage/PendingTest';
import RestDay from '../presentational/landingPage/RestDay';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.user[state.user],
    landing: state.ui.landingPage,
    // if we have a program then get that program's details. otherwise, program is undefined
    program: state.program && state.entities.program[state.program]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProgram: userId => {
      dispatch(loadProgram(userId));
    }
  };
};

class LandingPage extends Component {
  componentDidMount() {
    if (!this.props.program) {
      this.props.loadProgram(this.props.user.id);
    }
  }
  render() {
    return (
      <Vbox>
        <NavigationBar
          leftIcon={Pencil}
          leftTo="/editProgram"
          title="Week-Strong"
          rightIcon={Settings}
          rightTo="/settings"
        />

        <Vbox isFetching={this.props.landing.isFetching}>
          {(() => {
            switch (this.props.program && this.props.program.state) {
              case 'PENDING_TEST':
                return <PendingTest user={this.props.user} />;
              case 'REST':
                return <RestDay user={this.props.user} nextWorkoutDate={this.props.program.nextWorkoutDate} />;
              default:
                return 'Not implemented yet....';
            }
          })()}
        </Vbox>
        {/* <History
              beginDate={this.props.beginDate} // this is the sunday before the created date
              endDate={this.props.endDate} // this is the end of the week of the last history record
              createdDate={this.props.program.created}
              today={this.props.today}
              fitnessTestDate={this.props.test.date}
              programDays={this.props.program.selectedDays}
              programHistory={this.props.historyDates}
            /> */}

        {/* {this.props.nextWorkoutDay.equals(this.props.today) && !this.props.workedOutToday
            ? <WorkoutDay />
            : <RestDay done={this.props.workedOutToday} nextWorkoutDay={this.props.nextWorkoutDay} />} */}
      </Vbox>
    );
  }
}

LandingPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
