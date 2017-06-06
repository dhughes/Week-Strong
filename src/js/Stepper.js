import React from 'react';
import { Minus, Plus } from './Icon';
import { Hbox } from './Box';
import styled from 'styled-components';

const Container = styled(Hbox)`
  height: 3em;
  line-height: 3em;
  color: ${props => props.theme.font};;

  & > * {
    height: 2em;
    width: 2em;
    margin: 0.2em;
    text-align: center;
    margin: 0px;
    padding: 0px;
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
