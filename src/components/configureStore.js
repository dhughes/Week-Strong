import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import merge from 'lodash/merge';
import { LocalDate } from 'js-joda';
import weekStrongApp from './reducers/reducers';
import history from '../util/history';

/**
 * This accepts a container of entities, a field in the entity type that is a date,
 * and the name of the key field for this type of entity. It parses the specified
 * date field using js-joda and returns the merged version back.
 * @param  {[type]} entities  [description]
 * @param  {[type]} dateField [description]
 * @param  {[type]} key       [description]
 * @return {[type]}           [description]
 */
function translateDates(entities, dateField, key) {
  // for each key in the collection of objects...
  return (
    Object.keys(entities)
      // get the specicific object. This transforms the collection of objects into an array of objects
      .map(key => entities[key])
      // parse the specified data field
      .map(entity => merge({}, entity, { [dateField]: LocalDate.parse(entity[dateField]) }))
      // reduce this back down to a collection of objects
      .reduce((acc, item) => merge({}, acc, { [item[key]]: item }), {})
  );
}

/**
 * This confusing-ass function parses out joda dates from the redux store that is
 * persisted to localStorage. It'd probably be better not to mess with the format
 * of dates in the store at all and to just parse them as needed in the app.
 * @param  {[type]} initialState   [description]
 * @param  {[type]} persistedState [description]
 * @return {[type]}                [description]
 */
function jodaMerge(initialState, persistedState) {
  const dateFixedPersistedState = Object.keys(persistedState.entities)
    .map(key => ({
      key,
      entities: persistedState.entities[key]
    }))
    .map(entities => {
      switch (entities.key) {
        case 'workout':
        case 'event':
        case 'test':
          return {
            key: entities.key,
            entities: translateDates(entities.entities, 'date', 'id')
          };
        case 'program':
          return {
            key: entities.key,
            // I need to find a better way to do this. I don't like nexting these translations as I've done.
            entities: translateDates(translateDates(entities.entities, 'nextWorkoutDate', 'id'), 'created', 'id')
          };
        default:
          return entities;
      }
    })
    // reduce back down to an objects
    .reduce((acc, item) => merge({}, acc, { [item.key]: item.entities }), {});

  return merge({}, initialState, merge({}, persistedState, { entities: dateFixedPersistedState }));
}

export default function configureStore() {
  const reducer = compose(mergePersistedState(jodaMerge))(weekStrongApp);
  const storage = adapter(window.localStorage);
  const enhancer = compose(
    applyMiddleware(ReduxThunk, createLogger(), routerMiddleware(history)),
    persistState(storage)
  );

  // create our redux store
  const store = createStore(reducer, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer = compose(mergePersistedState(jodaMerge))(require('./reducers/reducers'));
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
