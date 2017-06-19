import { Vbox } from './Box';
import styled from 'styled-components';
import theme from './theme';

const Footer = styled(Vbox)`
  component: Footer;
  border-top: 1px solid ${theme.separator};
  padding: 0.5rem 1rem 1rem 1rem;
  overflow: visible;
`;

export default Footer;
