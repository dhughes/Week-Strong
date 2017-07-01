import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import NavigationBar from '../presentational/NavigationBar';
import { Pencil, Settings } from '../presentational/Icon';
import History from '../presentational/History';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.user[state.user]
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
        <h2>Welcome back, {props.user.name.split(' ')[0]}</h2>
        {/* <History
          beginDate={new Date(2017, 4, 28)} // this is the sunday before the created date
          endDate={new Date(2017, 5, 24)} // this is the end of the week of the last history record
          createdDate={new Date(2017, 5, 1)}
          today={new Date(2017, 5, 21)}
          fitnessTestDate={new Date(2017, 5, 2)}
          programDays={[1, 3, 5]}
          programHistory={[
            new Date(2017, 5, 5),
            new Date(2017, 5, 7),
            new Date(2017, 5, 9),
            new Date(2017, 5, 12),
            new Date(2017, 5, 15),
            new Date(2017, 5, 16),
            new Date(2017, 5, 19)
          ]}
        /> */}
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
