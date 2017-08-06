import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import NavigationBar from './NavigationBar';
import { Pencil, Settings } from './Icon';
import LinkButton from './LinkButton';
import ProgressBar from './ProgressBar';
import LabelValue from './LabelValue';
import Schedule from './Schedule';

const H2 = styled.h2`
  font-size: 1.4rem;
  text-align: center;
`;

class LandingPage extends Component {
  render() {
    let body;
    if (this.props.nextWorkoutDay.getTime() === this.props.today.getTime()) {
      body = [
        <h3 key={1}>It's a workout day!</h3>,
        <Vbox key={2}>
          <LinkButton to="/workout" className="default" label="Let's Go!" />
          <LinkButton to="/redo" label="Redo the Last Workout" />
        </Vbox>
      ];
    } else {
      const nextDay = this.getDay(this.props.nextWorkoutDay.getDay());
      const nextDate = this.dateOrdinal(this.props.nextWorkoutDay.getDate());
      body = (
        <div>
          <h3>
            {this.props.program.selectedDays.includes(this.props.today.getDay())
              ? "You're done for the day!"
              : 'Today is a rest day!'}
          </h3>

          <p>
            Come back on {nextDay} the {nextDate}.
          </p>
        </div>
      );
    }

    return (
      <Vbox>
        <NavigationBar
          leftIcon={<Pencil />}
          leftTo="/editProgram"
          title="Week-Strong"
          rightIcon={<Settings />}
          rightTo="/settings"
        />

        <Body justifyContent="space-between">
          <Vbox>
            <H2>
              Welcome back, {this.props.user.name.split(' ')[0]}
            </H2>

            <Schedule
              history={this.props.history}
              today={this.props.today}
              currentWeek={this.props.program.currentWeek}
            />
          </Vbox>

          {body}

          <Vbox>
            <LabelValue label="Streak" value={`${this.props.program.streak} days`} />

            {this.props.program.stats.map(stat => <LabelValue key={stat.name} label={stat.name} value={stat.total} />)}

            <LabelValue
              label="Days Remaining"
              value={`${this.props.program.days - this.props.program.completedDay} of ${this.props.program.days}`}
            />
            <ProgressBar progress={this.props.program.completedDay / this.props.program.days * 100} />
          </Vbox>
        </Body>
      </Vbox>
    );
  }
}

LandingPage.defaultProps = {
  user: {},
  program: {},
  today: new Date()
};

export default LandingPage;
