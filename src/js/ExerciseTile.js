import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import { Checkmark, Close } from './Icon';
import theme from './theme';

const CenteredVbox = styled(Vbox)`
  width: 50vw;
  height: 50vw;
  padding: 0.5em;

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
  color: ${theme.positive};;
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
    fill: ${theme.negative};
  }
`;

const Label = styled(Hbox)`
  height: 3rem;
  margin-top: -3rem;
  line-height: 3rem;
  background-color: rgba(57, 62, 65, 0.75);
  color: ${theme.primaryText};
`;

class ExerciseTile extends Component {
  onRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemove(e);
  };
  render() {
    console.log(this.props);
    return (
      <CenteredVbox onClick={this.props.onSelectClick}>
        {this.props.isSelected
          ? <Selected>
            <Checkmark />
            <h2>{this.props.count}</h2>
            <Close className="remove" onClick={this.onRemoveClick} />
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
  onSelectClick: () => {},
  onRemoveClick: () => {}
};

export default ExerciseTile;
