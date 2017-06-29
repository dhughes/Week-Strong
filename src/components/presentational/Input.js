import React from 'react';
import styled from 'styled-components';
import LoadingAnimation from './LoadingAnimation';
import { Hbox } from './Box';
import { Checkmark, Close } from './Icon';
import theme from '../../util/theme';
import colors from '../../util/colors';

const Field = styled(Hbox)`

  & input{
    border: 0;
    border-bottom: 4px solid ${theme.secondary};
    padding: 0.25em 1em;
    text-decoration: none;
    line-height: 2rem;
    font-size: 1.4rem;
    color: black;
    margin: 0.5rem auto;

    &:focus {
      border-bottom: 4px solid ${theme.primary};
    }

    &::placeholder {
      color: ${theme.primaryText.fade(0.6)}
    }

    &.error{
      color: ${theme.negative};
      background-color: ${theme.negative.fade(0.9)};
    }
  }

  & svg{
    height: 2rem;
    width: 2rem;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Input = props =>
  <Field>
    <input
      type={props.type}
      name={props.name}
      maxLength={props.maxLength}
      minLength={props.minLength}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onInvalid={props.onInvalid}
      placeholder={props.placeholder}
    />

    {props.validating
      ? <LoadingAnimation />
      : props.isValid
        ? <Checkmark style={{ fill: colors.positive }} />
        : props.isValid === false ? <Close style={{ fill: colors.negative }} /> : null}

  </Field>;

export default Input;
