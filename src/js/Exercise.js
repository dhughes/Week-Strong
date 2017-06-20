import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import Footer from './Footer';
import history from './history';
import Button from './Button';
import NavigationBar from './NavigationBar';
import { ChevronLeft } from './Icon';
import Stepper from './Stepper';
import theme from './theme';

const Img = styled.img`
  max-height: 40vw;
  object-fit: cover;
  border: 1px solid ${theme.primaryText}
`;

const Description = styled.span`
  text-align: left;
`;

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: this.props.goal || this.props.exercise.defaultGoal
    };
  }
  handleGoalChange = goal => {
    this.setState({ goal });
  };
  handleAddToProgram = event => {
    this.props.onAddToProgram({ id: this.props.exercise.id, quantity: this.state.goal });
  };
  render() {
    return (
      <Vbox>
        <NavigationBar
          leftIcon={<ChevronLeft />}
          onLeftIconClick={e => history.goBack()}
          title={this.props.exercise.name}
        />

        <Body>
          <Img src={this.props.exercise.image} />
          <Description dangerouslySetInnerHTML={{ __html: this.props.exercise.description }} />

        </Body>

        <Footer>
          <Stepper
            minimum={this.props.exercise.minimum}
            step={this.props.exercise.step}
            value={this.props.selected ? this.props.selected.quantity : this.props.exercise.defaultGoal}
            onGoalChange={this.handleGoalChange}
          />
          <Button className="default" onClick={this.handleAddToProgram}>
            {this.props.selected ? 'Update Program' : 'Add To Program'}
          </Button>
        </Footer>
      </Vbox>
    );
  }
}

export default Exercise;
