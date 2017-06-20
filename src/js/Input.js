import styled from 'styled-components';
import theme from './theme';

const Input = styled.input`
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
`;

export default Input;
