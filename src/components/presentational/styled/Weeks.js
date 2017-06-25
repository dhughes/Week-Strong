import styled from 'styled-components';
import { Hbox } from '../Box';
import theme from '../../../util/theme';

const Weeks = styled(Hbox)`
  component: Weeks;
  color: black;
  width: 100vw;
  white-space: nowrap;
  overflow: scroll;
  box-sizing: border-box;

  & > div{
    width: 100vw;
    padding: 0 1em;
    border-right: 1px solid ${theme.separator};
  }

  & > div:last-child{
    border-right: 0;
  }

  & .historySpacer{
    min-width: 1em!important;
    margin: 0;
    padding: 0;
  }

  /*& > div:last-child{
    padding-right: 2em;
  }*/
`;

export default Weeks;
