import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hbox } from './Box';
import theme from '../../util/theme';

const NavigationBarContainer = styled(Hbox)`
  component: NavigationBarContainer;
  background-color: ${theme.focus};
  line-height: 3rem;
  color: ${theme.primaryText.negate()};
  align-items: center;
  padding: 0em 0.5em;
  flex-shrink: 0;
  justify-content: space-between;

  & > * {
    height: 3rem;
    width: 3rem;
    flex-grow: 0;
  }

  & > h1{
    width: auto;
    white-space: nowrap;
  }

  & > a {
    color: currentColor;
  }

  & svg {
    fill: currentColor;
  }
`;

class NavigationBar extends Component {
  createButton(Icon, onIconClick, to) {
    if (Icon) {
      if (onIconClick) {
        return <a onClick={onIconClick}><Icon /></a>;
      } else if (to) {
        return <Link to={to}><Icon /></Link>;
      }
    }

    return <div />;
  }

  render() {
    return (
      <NavigationBarContainer>
        {this.createButton(this.props.leftIcon, this.props.onLeftIconClick, this.props.leftTo)}
        <h1>{this.props.title}</h1>
        {this.createButton(this.props.rightIcon, this.props.onRightIconClick, this.props.rightTo)}
      </NavigationBarContainer>
    );
  }
}

export default NavigationBar;
