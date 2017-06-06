import styled from 'styled-components';

const Button = styled.button`
  font-size: 2rem;
  border: 0;
  background-color: ${props => (props.default ? props.theme.positive : props.theme.font)}
`;

export default Button;
