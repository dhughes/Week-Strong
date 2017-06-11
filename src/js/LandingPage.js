import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox, Hbox } from './Box';
import Body from './Body';
import NavigationBar from './NavigationBar';
import { Pencil, Settings } from './Icon';
import Day, { getDay } from './Day';
import LinkButton from './LinkButton';
import ProgressBar from './ProgressBar';
import LabelValue from './LabelValue';
import theme from './theme';

const H2 = styled.h2`
  font-size: 1.4rem;
  text-align: center;
`;

const Schedule = styled(Hbox)`
  color: black;
  width: 100vw;
  margin-left: -1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  white-space: nowrap;
  overflow: scroll;
  box-sizing: border-box;

  & > div{
    padding: 0 0.5rem;
    border-right: 1px solid ${theme.separator};
  }

  & > div:first-child{
    margin-left: 1em;
  }

  & > div:last-child{
    margin-right: 1em;
    border-right: 0;
  }
`;

const Week = styled(Vbox)`
  width: 100vw;
  box-sizing: border-box;
  margin:0;

  & > div{
    font-size: 0.9rem;
    color: ${theme.hintText};
  }
`;

const WeekDays = styled(Hbox)`
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekScrollPosition: undefined
    };
    this.weeks = {};
  }

  getNextWorkoutDay = (today, selectedDays) => {
    // clone the date so we don't modify it
    today = new Date(today);
    const dayOfWeek = today.getDay();
    const nextWorkoutDay = selectedDays.find(e => e > dayOfWeek);
    const daysAway = nextWorkoutDay - dayOfWeek;
    return new Date(today.setDate(today.getDate() + daysAway));
  };

  // todo: test this
  dateOrdinal = date => {
    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3:
        return date + 'rd';
      default:
        return date + 'th';
    }
  };

  componentDidMount() {
    if (this.state.weekScrollPosition === undefined) {
      const weekWidth = this.weeks[1].offsetWidth;

      // set the scroll position for the schedule to show the current week.
      this.schedule.scrollLeft = (this.props.program.currentWeek - 1) * weekWidth;
    }
  }

  addRefForWeek(week) {
    return component => (this.weeks[week] = component);
  }

  render() {
    let weekComponents = [];
    let dayComponents = [];
    let x = 1;

    for (let week of this.props.history) {
      for (let day of week) {
        dayComponents.push(<Day key={day.date} {...day} today={this.props.today} />);
      }
      weekComponents.push(
        <Week key={x} innerRef={this.addRefForWeek(x)} weeks={this.props.history.length}>
          <div>Week {x}</div>
          <WeekDays justifyContent="space-between">{dayComponents}</WeekDays>
        </Week>
      );
      dayComponents = [];
      x++;
    }

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
      const nextDay = getDay(this.props.nextWorkoutDay.getDay());
      const nextDate = this.dateOrdinal(this.props.nextWorkoutDay.getDate());
      body = (
        <div>
          <h3>
            {this.props.program.selectedDays.includes(this.props.today.getDay())
              ? "You're done for the day!"
              : 'Today is a rest day!'}
          </h3>

          <p>Come back on {nextDay} the {nextDate}.</p>
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
            <H2>Welcome back, {this.props.user.name.split(' ')[0]}</H2>

            <Schedule innerRef={schedule => (this.schedule = schedule)}>
              {weekComponents}
            </Schedule>
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
