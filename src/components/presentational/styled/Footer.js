import { Vbox } from '../Box';
import styled from 'styled-components';
import theme from '../../../util/theme';

const Footer = styled(Vbox)`
  component: Footer;
  background-color: ${theme.footerBackground};
  border-top: 2px solid ${theme.separator.darken(0.25)};
  padding: 0.5rem 1rem;
  overflow: visible;
  flex-shrink: 0;

  & > p {
    margin: 0.5rem;
  }
`;

export default Footer;
