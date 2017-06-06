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
    font-size: 2rem;
    font-weight: bold;
    color: green;
    padding: 0.25rem;
    background-color: rgba(255,255,255,0.75);

    & > img {
        width: 66%;
        max-width: 150px;
        height: 66%;
    }
  }
`;

const Selected = styled(Hbox)`
  height: 3rem;
  margin-bottom: -3rem;
  line-height: 3rem;
  background-color: rgba(238, 235, 211, 0.9);
  color: ${props => props.theme.positive};;
  z-index: 1;
  justify-content: flex-start;

  & > * {
    height: 3rem;
    width: 2rem;
    margin: 0.2rem;
  }

  & > h2{
    text-align: left;
    flex-grow: 1000;
  }

  & > svg {
    fill: currentColor;
  }

  & > .remove{
    fill: ${props => props.theme.warning};
  }
`;

const Label = styled(Hbox)`
  height: 3rem;
  margin-top: -3rem;
  line-height: 3rem;
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
              <Close className="remove" onClick={this.onRemove} />
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
