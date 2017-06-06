import React from 'react';
import { Minus, Plus } from './Icon';
import { Hbox } from './Box';
import styled from 'styled-components';

const Container = styled(Hbox)`
  line-height: 3rem;
  color: ${props => props.theme.font};;

  & > * {
    height: 3rem;
    width: 3rem;
  }

  & > h2{
    text-align: center;
    flex-grow: 1000;
  }

  & > svg {
    fill: currentColor;
  }

`;

const Stepper = props => {
  return (
    <Container>
      <Minus onClick={props.onStepDown} />
      <h2>{`${props.value} ${props.label}`.trim()}</h2>
      <Plus onClick={props.onStepUp} />
    </Container>
  );
};

Stepper.defaultProps = {
  value: 50,
  label: '',
  onStepUp: () => {},
  onStepDown: () => {}
};

export default Stepper;
