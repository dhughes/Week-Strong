import React, { Component } from 'react';
import { Minus, Plus } from './Icon';
import { Hbox } from './Box';
import styled from 'styled-components';
import theme from './theme';

const Container = styled(Hbox)`
  height: 3rem;
  line-height: 3rem;
  color: ${theme.primaryText};

  & > * {
    height: 3rem;
    width: 3rem;
  }

  & > h2{
    margin: 0;
    text-align: center;
    flex-grow: 1000;
  }

  & > svg {
    fill: currentColor;
  }
`;

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  stepDown = event => {
    if (!this.props.minimum || this.state.value >= this.props.minimum + this.props.step) {
      this.setState(
        currentState => ({ value: currentState.value - this.props.step }),
        () => this.props.onGoalChange(this.state.value)
      );
    }
  };
  stepUp = event => {
    if (!this.props.maximum || this.state.value <= this.props.maximum - this.props.step) {
      this.setState(
        currentState => ({ value: currentState.value + this.props.step }),
        () => this.props.onGoalChange(this.state.value)
      );
    }
  };
  render() {
    return (
      <Container>
        <Minus onClick={this.stepDown} />
        <h2>{`${this.state.value} ${this.props.label}`.trim()}</h2>
        <Plus onClick={this.stepUp} />
      </Container>
    );
  }
}

Stepper.defaultProps = {
  value: 50,
  step: 10,
  label: '',
  onGoalChange: () => {}
};

export default Stepper;
