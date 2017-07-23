import React from 'react';
import PropTypes from 'prop-types';

const RestDay = props =>
  <div>
    <h3>Today is a rest day!</h3>
    <p>
      Come back on {props.nextWorkoutDay.toString()}
    </p>
  </div>;

RestDay.propTypes = {
  nextWorkoutDay: PropTypes.instanceOf(Date).isRequired
};

export default RestDay;
