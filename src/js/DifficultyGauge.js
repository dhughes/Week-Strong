import React from 'react';
import styled from 'styled-components';
import gauge from '../img/gauge.svg';
import pointer from '../img/pointer.svg';

const Gauge = styled.div`
  background-image: url(${gauge});
  background-size: cover;
  width: 80vw;
  height: 40vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -1em;
  margin-top: 1em;
  overflow: hidden;
  flex-shrink: 0;
`;

const Indicator = styled.div`
  width: 100%;
  height: 100vw;
  background-image: url(${pointer});
  transform: rotate(${props => props.difficulty}deg);
`;

const DifficultyGauge = props => {
  return (
    <Gauge>
      <Indicator difficulty={props.difficulty * 1.7 - 85} />
    </Gauge>
  );
};

DifficultyGauge.defaultProps = {
  difficulty: 50
};

export default DifficultyGauge;
