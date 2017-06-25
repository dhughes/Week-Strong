import styled from 'styled-components';
import { Vbox } from '../Box';
import theme from '../../../util/theme';

const Week = styled(Vbox)`
  component: Week;
  width: 100vw;
  box-sizing: border-box;
  margin:0;
  padding: 1em;

  & > div{
    font-size: 0.9rem;
    color: ${theme.hintText};
  }
`;

export default Week;
