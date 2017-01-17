import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducer = combineReducers({
  players: playerReducer,
  matches: matchReducer,
  results: resultReducer,
  matchday: matchdayReducer
});

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);