import styled from 'styled-components';
import { Vbox } from '../Box';
import theme from '../../../util/theme';

const Root = styled(Vbox)`
  component: Root;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background-color: ${theme.background};
  align-items: flex-start;
  color: ${theme.primaryText};
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;

  & *{
    box-sizing: border-box;
  }

  & *:focus {
    outline: 0;
  }
`;

export default Root;
