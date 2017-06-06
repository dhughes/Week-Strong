import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import { Checkmark, Close } from './Icon';

const CenteredVbox = styled(Vbox)`
  & > * {
     margin: 0;
     width: 100%;
     text-align: center;
   }
`;

const SelectableImageHbox = styled(Hbox)`
  background-size: cover;
  background-position: 50% 100%;
  min-height: 200px;

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: 2em;
    font-weight: bold;
    color: green;
    padding: 0.25em;
    background-color: rgba(255,255,255,0.75);

    & > img {
        width: 66%;
        max-width: 150px;
        height: 66%;
    }
  }
`;

const Selected = styled(Hbox)`
  height: 3em;
  margin-bottom: -3em;
  line-height: 3em;
  background-color: rgba(238, 235, 211, 0.9);
  color: ${props => props.theme.positive};;
  z-index: 1;
  justify-content: flex-start;

  & > * {
    height: 2em;
    width: 2em;
    margin: 0.2em;
  }

  & > h2{
    text-align: left;
    flex-grow: 1000;
  }

  & > svg {
    fill: currentColor;
  }

  & > button{
    padding: 0;
    fill: ${props => props.theme.warning};;
    margin: 0;
    padding: 0;
    height: 4.5em;
    width: 4.5em;
    z-index: 2;
  }

  & > .remove {
    height: 3em;
    width: 3em;
  }
`;

const Label = styled(Hbox)`
  height: 3em;
  margin-top: -3em;
  line-height: 3em;
  background-color: rgba(57, 62, 65, 0.75);
  color: ${props => props.theme.font};;
`;

class ExerciseTile extends Component {
  onRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemove(e);
  };
  render() {
    return (
      <CenteredVbox onClick={this.props.onSelect}>
        {this.props.isSelected
          ? <Selected>
              <Checkmark />
              <h2>{this.props.count}</h2>
              <button title="Remove" onClick={this.onRemove}>
                <Close className="remove" />
              </button>
            </Selected>
          : null}
        <SelectableImageHbox
          className="exercise"
          style={{
            backgroundImage: `url(${this.props.src})`
          }}
          title={this.props.label}
        />
        <Label>
          <h4>
            {this.props.label}
          </h4>
        </Label>

      </CenteredVbox>
    );
  }
}

ExerciseTile.defaultProps = {
  isSelected: false,
  onSelect: () => {},
  onRemove: () => {}
};

export default ExerciseTile;
