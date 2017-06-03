import React, { Component } from 'react';
import { Vbox, Hbox } from './Box';
import checkmark from '../img/check-circle-outline.svg';

const CenteredVbox = Vbox.extend`
  & > * {
     margin: 0;
     width: 100%;
     text-align: center;
   }
`;

const SelectableImageHbox = Hbox.extend`
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

class ExerciseTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: -1,
        height: -1
      }
    };
  }
  render() {
    return (
      <CenteredVbox>
        <SelectableImageHbox
          className="exercise"
          style={{
            backgroundImage: `url(${this.props.src})`
          }}
          title={this.props.label}
        >
          {this.props.selected
            ? <div className="selected">
                <img src={checkmark} alt="Selected" />
                <span>{this.props.count}</span>
              </div>
            : null}
        </SelectableImageHbox>
        <h4>{this.props.label}</h4>
      </CenteredVbox>
    );
  }
}

ExerciseTile.defaultProps = {
  selected: false
};

export default ExerciseTile;
