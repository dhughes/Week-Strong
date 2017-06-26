import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import PrivateRoute from './container/PrivateRoute';
import LandingPage from './container/LandingPage';
import CreateProgram from './container/CreateProgram';
import Exercise from './container/Exercise';
import SetDuration from './container/SetDuration';
import Summary from './container/Summary';
import Root from './presentational/styled/Root';
import SplashPage from './presentational/SplashPage';
import colors from '../util/colors';
import history from '../util/history';
import weekStrongApp from './reducers/reducers';
import { fetchExercises } from './actions/actions';

// create our redux store
let store = createStore(weekStrongApp, applyMiddleware(thunkMiddleware, createLogger()));
store.dispatch(fetchExercises());

const App = props =>
  <Provider store={store}>
    <ThemeProvider theme={colors}>
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/SplashPage" component={SplashPage} />
            <Route exact path="/CreateProgram" component={CreateProgram} />
            <Route exact path="/Exercise/:id" component={Exercise} />
            <Route exact path="/SetDuration" component={SetDuration} />
            <Route exact path="/Summary" component={Summary} />
            <PrivateRoute exact path="/" component={LandingPage} />
          </Switch>
        </Root>
      </Router>
    </ThemeProvider>
  </Provider>;

export default App;

// class AppX extends Component {
//   constructor(props) {
//     super(props);
//     this.state = state;
//   }
//   handleTakeTestLater = () => {
//     this.setState({ loggedIn: true, user: { id: null, name: null, email: null } });
//     history.push('/');
//   };
//   handleLoginSubmit = (email, password) => {
//     this.setState({ loggedIn: true });
//     history.push('/');
//   };
//   handleCreateProfileSubmit = (name, email, password) => {
//     this.setState({ loggedIn: true, user: { id: 123, name: name, email: email, password: password } });
//     history.push('/');
//   };
//   handleAddToProgram = exercise => {
//     let exercises = this.state.program.exercises ? this.state.program.exercises.slice() : [];
//     exercises = exercises.filter(selectedExercise => selectedExercise.id !== exercise.id);
//     exercises.push(exercise);
//     this.setState({ program: { exercises } });
//     history.push('/getStarted');
//   };
//   handleRemoveExercise = id => {
//     let exercises = this.state.program.exercises ? this.state.program.exercises.slice() : [];
//     exercises = exercises.filter(selectedExercise => selectedExercise.id !== id);
//     this.setState({ program: { exercises } });
//   };
//   render() {
//     let routes = [];
//     let key = 0;
//     if (this.state.loggedIn && !this.state.program.fitnessTest.complete) {
//       // user is logged in
//       routes = [
//         <Route
//           key={++key}
//           exact
//           path="/"
//           component={() => (
//             <FitnessTestIncompleteLandingPage
//               user={this.state.user}
//               program={this.state.program}
//               history={this.state.history}
//               today={this.state.today}
//               nextWorkoutDay={this.state.nextWorkoutDay}
//             />
//           )}
//         />
//       ];
//     } else if (this.state.loggedIn) {
//       // user is logged in
//       routes = [
//         <Route
//           key={++key}
//           exact
//           path="/"
//           component={() => (
//             <LandingPage
//               user={this.state.user}
//               program={this.state.program}
//               history={this.state.history}
//               today={this.state.today}
//               nextWorkoutDay={this.state.nextWorkoutDay}
//             />
//           )}
//         />
//       ];
//     } else {
//       // user is not logged in
//       routes = [
//         <Route key={++key} exact path="/" component={() => <LoggedOutLandingPage />} />,
//         <Route key={++key} exact path="/login" component={() => <LoginPage onLoginSubmit={this.handleLoginSubmit} />} />
//       ];
//     }
//
//     return (
//       <ThemeProvider theme={colors}>
//         <Router history={history}>
//           <Root>
//             <Switch>
//               {routes}
//               <Route
//                 exact
//                 path="/getStarted"
//                 component={() => (
//                   <GetStarted
//                     exercises={this.state.exercises}
//                     selectedExercises={this.state.program.exercises}
//                     handleRemoveExercise={this.handleRemoveExercise}
//                   />
//                 )}
//               />
//               <Route
//                 exact
//                 path="/exercise/:id"
//                 component={props => (
//                   <Exercise
//                     exercise={this.state.exercises.find(
//                       exercise => exercise.id === parseInt(props.match.params.id, 10)
//                     )}
//                     selected={
//                       this.state.program.exercises
//                         ? this.state.program.exercises.find(
//                             exercise => exercise.id === parseInt(props.match.params.id, 10)
//                           )
//                         : undefined
//                     }
//                     onAddToProgram={this.handleAddToProgram}
//                   />
//                 )}
//               />
//               <Route
//                 exact
//                 path="/setDuration"
//                 component={() => (
//                   <SetDuration
//                     selectedExerciseCount={this.state.program.exercises.length}
//                     days={this.state.program.selectedDays}
//                     weeks={this.state.program.days / 3}
//                   />
//                 )}
//               />
//               <Route
//                 exact
//                 path="/summary"
//                 component={() => (
//                   <Summary
//                     weeks={this.state.program.days / 3}
//                     selectedExercises={this.state.program.exercises}
//                     onTakeTestLater={this.handleTakeTestLater}
//                   />
//                 )}
//               />
//               <Route
//                 exact
//                 path="/createProfile"
//                 component={() => <CreateProfile onCreateProfileSubmit={this.handleCreateProfileSubmit} />}
//               />
//               <Route
//                 exact
//                 path="/fitnessTest"
//                 component={() => (
//                   <FitnessTest exercises={this.state.exercises} selectedExercises={this.state.program.exercises} />
//                 )}
//               />
//
//             </Switch>
//           </Root>
//         </Router>
//       </ThemeProvider>
//     );
//   }
// }
