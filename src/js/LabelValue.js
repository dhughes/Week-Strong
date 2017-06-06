import React from 'react';
import { Hbox } from './Box';
import styled from 'styled-components';

const LeftDiv = styled.div`
  text-align: left;
`;

const RightDiv = styled.div`
  text-align: right;
`;

const LabelValue = props => {
  return (
    <Hbox>
      <LeftDiv>{props.label}:</LeftDiv>
      <RightDiv>{props.value}</RightDiv>
    </Hbox>
  );
};

export default LabelValue;
