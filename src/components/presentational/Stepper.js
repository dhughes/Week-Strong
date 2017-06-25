import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Minus, Plus } from './Icon';
import { Hbox } from './Box';
import theme from '../../util/theme';

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

const Stepper = props =>
  <Container>
    <Minus
      onClick={e =>
        props.onValueChange(props.value - props.step < props.minimum ? props.minimum : props.value - props.step)}
    />
    <h2>{props.value} {props.label}</h2>
    <Plus
      onClick={e =>
        props.onValueChange(props.value + props.step > props.maximum ? props.maximum : props.value + props.step)}
    />
  </Container>;

Stepper.defaultProps = {
  label: null,
  step: 1
};

Stepper.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  minimum: PropTypes.number,
  maximum: PropTypes.number
};

export default Stepper;
