import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  & > * {
    width: 100%;
  }
`;

const Vbox = Box.extend`
  flex-direction: column;
`;

const Hbox = Box.extend`
  flex-direction: row;
`;

Hbox.defaultProps = {
  justifyContent: 'default',
  alignItems: 'default'
};

export { Box, Vbox, Hbox };
