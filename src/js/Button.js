import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  padding: 0.25em 1em;
  text-decoration: none;
  line-height: 2.5rem;
  font-size: 1.4rem;
  text-align: center;
  border: 0;
  background-color: ${theme.secondary};
  color: black;
  margin: 0.5rem auto;
  border: 0px;

  &.default{
    background-color: ${theme.primaryAction};
    color: ${theme.primaryText.negate()};
  }

  &.facebook{
    background-color: #3B5998;
    color: white;
  }

  &.google{
    background-color: #DF4A32;
    color: white;
  }
`;

export default Button;
