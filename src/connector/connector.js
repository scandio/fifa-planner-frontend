import http from 'http';
import request from 'sync-request';
import axios from 'axios';
import {players, matches, results} from './dummy.data.js';


const server = "192.168.11.129:8080/rest/v1/";

export default class Connector {

  constructor(dummy){
    this.dummy = dummy;
  }

  _doRequest(path, method, params, callback){

    axios({
      method: method,
      url: 'http://'+server + path,
      data: params
    })
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  getPlayers(done) {
    if (this.dummy) {
      done(players);
      return;
    }
    this._doRequest('teams', 'GET', null, (response) => done(response.data));
  }

  getMatches(done) {
    if (this.dummy) {
      done(matches);
      return;
    }
    this._doRequest('matches', 'GET', null, (response) => done(response.data));
  }

  getResults(done) {
    if (this.dummy) {
      done(results);
      return;
    }
    this._doRequest('table', 'GET', null, (response) => done(response.data));
  }

  updateMatch(id, home, away, homeGoals, awayGoals, matchday, done) {
    const params = {
      "id": id, "away": away, "home": home, "homeGoals": homeGoals, "awayGoals": awayGoals, "matchday": matchday
    };
    this._doRequest('matches', 'POST', params, (response) => done());
  }

  addPlayer(name, done) {
    this._doRequest('teams/'+name, 'POST', null, (response) => done());
  }
}