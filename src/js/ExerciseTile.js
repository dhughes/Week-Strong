import React, { Component } from 'react';
import styled from 'styled-components';
import history from './history';
import { Vbox, Hbox } from './Box';
import { Checkmark, Close } from './Icon';
import theme from './theme';

const Exercise = styled(Vbox)`
  border: 1px solid ${theme.primaryText};
  box-sizing: border-box;
  width: 44vw;
  height: 44vw;
  margin-bottom: 1em;

  background-size: cover;
  background-position: 50% 100%;

  background-image: url(${props => props.image});

  & > * {
    margin: 0;
    padding: 0;
    height: 3rem;
    line-height: 3rem;
  }

  & > h3{
    background-color: ${theme.primary.fade(0.25)};
    color: ${theme.primaryText.negate()};
    align-self: flex-end;
  }

  & > div{
    height: 3rem;
    margin-bottom: -3rem;
    line-height: 3rem;
    background-color: ${theme.primaryText.negate().fade(0.25)};
    justify-content: flex-start;

    & > * {
      height: 3rem;
      width: 2rem;
      margin: 0.2rem;
      color: ${theme.positive};
    }

    & > h2{
      text-align: left;
      flex-grow: 1000;
    }

    & > svg {
      fill: currentColor;
    }

    & > .remove{
      fill: ${theme.negative};
    }
  }
`;

class ExerciseTile extends Component {
  onRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemoveClick(this.props.id);
  };
  onSelect = e => {
    e.stopPropagation();
    e.preventDefault();

    if (this.props.onSelectClick) {
      this.props.onSelectClick(e);
    } else {
      history.push(`/exercise/${this.props.id}`);
    }
  };
  render() {
    return (
      <Exercise reverse={true} justifyContent="space-between" image={this.props.image} onClick={this.onSelect}>
        <h3>{this.props.label}</h3>

        {this.props.selected
          ? <Hbox>
              <Checkmark />
              <h2>{this.props.selected.quantity}</h2>
              <Close className="remove" onClick={this.onRemove} />
            </Hbox>
          : null}
      </Exercise>
    );
  }
}

ExerciseTile.defaultProps = {
  selected: false,
  onSelectClick: undefined,
  onRemoveClick: () => {}
};

export default ExerciseTile;
