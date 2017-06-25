import React from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import { Checkmark, Close } from './Icon';
import theme from '../../util/theme';

const Exercise = styled(Vbox)`
  border: 1px solid ${theme.primaryText};
  box-sizing: border-box;
  width: 44vw;
  height: 44vw;
  margin-bottom: 1em;
  background-size: cover;
  background-position: 50% 100%;
  border-radius: 0.3em;

  background-image: url(${props => props.image});

  & > * {
    margin: 0;
    padding: 0;
    height: 3rem;
    line-height: 3rem;
  }

  & > h3{
    background-color: ${theme.primary.fade(0.25)};
    color: ${theme.primaryText.negate()};
    align-self: flex-end;
  }

  & > div{
    height: 3rem;
    margin-bottom: -3rem;
    line-height: 3rem;
    background-color: ${theme.primaryText.negate().fade(0.25)};
    justify-content: flex-start;

    & > * {
      height: 3rem;
      width: 2rem;
      margin: 0.2rem;
      color: ${theme.positive};
    }

    & > h2{
      text-align: left;
      flex-grow: 1000;
    }

    & > svg {
      fill: currentColor;
    }

    & > .remove{
      fill: ${theme.negative};
    }
  }
`;

const ExerciseTile = props =>
  <Exercise reverse={true} justifyContent="space-between" image={props.image} onClick={props.onSelect}>
    <h3>{props.label}</h3>

    {props.goal
      ? <Hbox>
          <Checkmark />
          <h2>{props.goal}</h2>
          <Close className="remove" onClick={props.onRemove} />
        </Hbox>
      : null}
  </Exercise>;

export default ExerciseTile;
