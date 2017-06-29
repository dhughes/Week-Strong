import styled from 'styled-components';
import theme from '../../../util/theme';

const SectionBreak = styled.hr`
  height: 2px;
  background-color: ${theme.separator};
  border: 1px solid ${theme.separator};
  margin: 2rem auto;
`;

export default SectionBreak;
