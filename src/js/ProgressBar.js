import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const Container = styled.div`
  flex: 1;
  display: flex;
  background-color:  ${theme.secondary};
  height: 1rem;
  margin: 0.5em auto auto auto;
`;

const Progress = styled.div`
  background-color:  ${theme.primary};
  width: ${props => props.progress}%;
  min-height: 1rem;
  content: '.';
  display: hidden;
`;

const ProgressBar = props => {
  return <Container><Progress progress={props.progress} /></Container>;
};

export default ProgressBar;
