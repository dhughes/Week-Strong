import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 1.75rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  background-color: ${props => props.theme.font};
  color: black;
  margin: 0.5rem auto;
  height: 3rem;

  &.default{
    background-color: ${props => props.theme.positive};
  }

  &.facebook{
    background-color: #3B5998;
    color: white;
  }

  &.google{
    background-color: #DF4A32;
    color: white;
  }

  & > svg {
    fill: currentColor;
  }

  & > * {
    height: 2rem;
    width: 2rem;
    margin: auto 0.5rem;
  }

  & > div {
    line-height: 2rem;
    flex-grow: 1000;
  }
`;

export default Button;
