import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Vbox } from './Box';
import styled from 'styled-components';

const Wrapper = Vbox.extend`
  & > * {
    text-align: center;
  }
`;

const Timer = styled.div`
  font-size: 65vw;
  padding: 0;
  line-height: 1;
`;

const AlertTimer = Timer.extend`
  color: ${props => props.theme.warning}
`;

class CountdownTimer extends Component {
  static propTypes = {
    topLabel: PropTypes.string,
    seconds: PropTypes.number.isRequired,
    bottomLabel: PropTypes.string,
    onTimeout: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds,
      interval: null
    };
  }

  componentDidMount() {
    if (this.state.seconds === 0) return;

    let interval = setInterval(() => {
      this.setState(previousState => ({ seconds: previousState.seconds - 1 }));
      if (this.state.seconds === 0) {
        clearInterval(this.state.interval);
        this.props.onTimeout();
      }
    }, 1000);

    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <Wrapper>
        {this.props.topLabel !== undefined ? <h3>{this.props.topLabel}</h3> : null}
        {this.state.seconds > 3 ? <Timer>{this.state.seconds}</Timer> : <AlertTimer>{this.state.seconds}</AlertTimer>}
        {this.props.bottomLabel !== undefined ? <h3>{this.props.bottomLabel}</h3> : null}
      </Wrapper>
    );
  }
}

CountdownTimer.defaultProps = {
  onTimeout: () => {}
};

export default CountdownTimer;
