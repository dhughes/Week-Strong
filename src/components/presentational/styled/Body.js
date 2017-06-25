import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Vbox } from '../Box';

const Body = styled(Vbox)`
  component: Body;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;
  padding: ${props => (props.padded ? '1em' : '0')};

  & > *{
    box-sizing: border-box;
  }

  & > p{
    text-align: left;
  }
`;

Body.defaultProps = {
  justifyContent: 'default',
  padded: true
};

Body.propTypes = {
  justifyContent: PropTypes.string,
  padded: PropTypes.bool
};

export default Body;
