import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Vbox } from './Box';
import styled from 'styled-components';
import theme from './theme';
import colors from './colors';

const Wrapper = styled(Vbox)`
  background-color: ${colors.secondary};
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  & > * {
    text-align: center;
  }
`;

const Timer = styled.h1`
  font-size: 45vw;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

const AlertTimer = styled(Timer)`
  color: ${theme.negative}
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
    if (this.state.seconds === 0) {
      this.props.onTimeout();
      return;
    }

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
        {this.props.topLabel !== undefined ? <p>{this.props.topLabel}</p> : <p>&nbsp;</p>}
        {this.state.seconds > 3 ? <Timer>{this.state.seconds}</Timer> : <AlertTimer>{this.state.seconds}</AlertTimer>}
        {this.props.bottomLabel !== undefined ? <p>{this.props.bottomLabel}</p> : <p>&nbsp;</p>}
      </Wrapper>
    );
  }
}

CountdownTimer.defaultProps = {
  onTimeout: () => {}
};

export default CountdownTimer;
