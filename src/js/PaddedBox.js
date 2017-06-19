import { Vbox } from './Box';
import styled from 'styled-components';

const PaddedBox = styled(Vbox)`
  component: PaddedBox;
  flex-grow: 1;
  padding: 0 1em;

  & > h1, & > h2, & > h3, & > h4, & > h5, & > h6, & > p, & > div{
    margin: 0.5em auto;
  }
`;

export default PaddedBox;
