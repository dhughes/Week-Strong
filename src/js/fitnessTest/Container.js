import styled from 'styled-components';
import { Vbox } from '../Box';

const Container = styled(Vbox)`
  flex-grow: 1;
  padding-top: 1em;

  & > div h2{
    font-size: 3rem;
    margin: 0;
  }

  & > div p{
    margin: 0;
  }
`;

export default Container;
