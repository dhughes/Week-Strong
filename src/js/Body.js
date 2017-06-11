import styled from 'styled-components';
import { Vbox } from './Box';

const Body = styled(Vbox)`
  padding: 1rem;
  height: 100vh;
`;

Body.defaultProps = {
  justifyContent: 'default'
};

export default Body;
