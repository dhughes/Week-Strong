import styled from 'styled-components';

const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: ${props => props.theme.font};

  & > * {
    margin: 0;
    width: 100%;
  }
`;

const Vbox = Box.extend`
  flex-direction: column;
`;

const Hbox = Box.extend`
  flex-direction: row;
`;

export { Box, Vbox, Hbox };
