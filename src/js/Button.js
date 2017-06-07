import styled from 'styled-components';

const Button = styled.button`
  font-size: 2rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  border: 0;
  background-color: ${props => props.theme.font};
  color: black;
  margin: 0.5rem auto;


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
`;

export default Button;
