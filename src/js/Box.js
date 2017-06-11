import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};

  & > * {
    width: 100%;
  }
`;

const Vbox = styled(Box)`
  flex-direction: ${props => `column${props.reverse ? '-reverse' : ''}`};
`;

const Hbox = styled(Box)`
  flex-direction: ${props => `row${props.reverse ? '-reverse' : ''}`};
`;

Hbox.defaultProps = {
  justifyContent: 'default',
  alignItems: 'default',
  reverse: false
};

export { Box, Vbox, Hbox };
