import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  background-color:  ${props => props.theme.font};
  height: 2em;
`;

const Progress = styled.div`
  background-color:  ${props => props.theme.header};
  width: ${props => props.progress}%;
  min-height: 2em;
  content: '.';
  display: hidden;
`;

const ProgressBar = () => {
  return <Container><Progress progress={75} /></Container>;
};

export default ProgressBar;
