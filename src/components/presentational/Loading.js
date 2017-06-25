import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Vbox } from './Box';
import LoadingAnimation from './LoadingAnimation';
import colors from '../../util/colors';

const LoadingBox = styled(Vbox)`
  component: LoadingBox;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;

  & > *{
    box-sizing: border-box;
  }

  & > p{
    text-align: left;
  }
`;

const Loading = props =>
  <LoadingBox justifyContent="space-around">
    {props.isFetching ? <LoadingAnimation light={colors.secondary} dark={colors.primary} /> : props.children}
  </LoadingBox>;

Loading.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default Loading;
