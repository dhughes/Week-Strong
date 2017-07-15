import styled from 'styled-components';
import PaddedBox from './PaddedBox';
import theme from '../../../util/theme';

export default styled(PaddedBox)`
  text-align: left;
  flex-shrink: 0;
  padding: 0.5em;

  display: ${props => (props.display ? 'block' : 'none')};

  &.error{
    background-color: ${theme.negative.lighten(0.5).fade(0.75)};
    color: ${theme.negative};
    border: 1px solid ${theme.negative};
  }
`;
