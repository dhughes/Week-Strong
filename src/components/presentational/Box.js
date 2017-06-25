import React from 'react';
import styled from 'styled-components';
import LoadingAnimation from './LoadingAnimation';
import colors from '../../util/colors';

const Box = styled(LoadingBox)`
  component: Box;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};

  & > * {
    width: 100%;
  }
`;

const Div = styled.div``;

const Vbox = styled(Box)`
  component: Vbox;
  flex-direction: ${props => `column${props.reverse ? '-reverse' : ''}`};
`;

const Hbox = styled(Box)`
  component: Hbox;
  flex-direction: ${props => `row${props.reverse ? '-reverse' : ''}`};
`;

function LoadingBox(props) {
  return (
    <Div {...props}>
      {props.isFetching ? <LoadingAnimation light={colors.secondary} dark={colors.primary} /> : props.children}
    </Div>
  );
}

Box.defaultProps = {
  justifyContent: 'default',
  alignItems: 'default',
  reverse: false,
  isFetching: false
};

export { Box, Vbox, Hbox };
