import styled from 'styled-components';
import { Vbox } from './Box';

const Body = styled(Vbox)`
  component: Body;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;

  & > *{
    box-sizing: border-box;
  }
`;

Body.defaultProps = {
  justifyContent: 'default'
};

export default Body;
