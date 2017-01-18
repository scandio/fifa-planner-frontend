import http from 'http';
import request from 'sync-request';
import axios from 'axios';
import { players, matches, results } from './dummy.data.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const server = "http://v22017014202143365.hotsrv.de:8080/rest/v1/";

const playerReducer = (state = [], action) => {
  if (action.type == 'UPDATE_PLAYERS') {
    return action.payload;
  }
  return state;
}

const matchReducer = (state = [], action) => {
  if (action.type == 'UPDATE_MATCHES') {
    return action.payload;
  }
  return state;
}

const resultReducer = (state = [], action) => {
  if (action.type == 'UPDATE_RESULTS') {
    return action.payload;
  }
  return state;
}

const matchdayReducer = (state = 1, action) => {
  if (action.type == 'UPDATE_MATCHDAY') {
    return action.payload;
  }
  return state;
}

const reducer = combineReducers({
  players: playerReducer,
  matches: matchReducer,
  results: resultReducer,
  matchday: matchdayReducer
});

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);




export default class Connector {

  constructor(dummy) {
    this.dummy = dummy;
  }

  getPlayers() {
    if (this.dummy) {
      done(players);
      return;
    }

    axios.get(server + 'teams')
      .then(response => {
        store.dispatch({ type: 'UPDATE_PLAYERS', payload: response.data })
      });
  }

  getMatches() {
    if (this.dummy) {
      done(matches);
      return;
    }
    axios.get(server + 'matches')
      .then(response => {
        store.dispatch({ type: 'UPDATE_MATCHES', payload: response.data })
      });
  }

  getResults() {
    if (this.dummy) {
      done(results);
      return;
    }
    axios.get(server + 'table')
      .then(response => {
        store.dispatch({ type: 'UPDATE_RESULTS', payload: response.data })
      });
  }

  updateMatch(id, home, away, homeGoals, awayGoals, matchday) {
    const params = {
      "id": id, "away": away, "home": home, "homeGoals": homeGoals, "awayGoals": awayGoals, "matchday": matchday
    };
    axios.post(server + 'matches', params)
      .then(response => {
        this.getMatches();
      })
  }
}