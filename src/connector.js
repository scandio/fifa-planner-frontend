import http from 'http';
import request from 'sync-request';
import axios from 'axios';

var results = [{
  "id": 1,
  "name": "Maxi",
  "played": 2,
  "won": 2,
  "drawn": 0,
  "lost": 0,
  "goals": 4,
  "against": 2,
  "points": 6,
  "diff": 2
},
{
  "id": 2,
  "name": "Stefan",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "goals": 2,
  "against": 3,
  "points": 1,
  "diff": -1
},
{
  "id": 3,
  "name": "Benny",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "goals": 2,
  "against": 3,
  "points": 1,
  "diff": -1
},
{
  "id": 4,
  "name": "Leo",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "goals": 2,
  "against": 3,
  "points": 1,
  "diff": -1
}];

var players = [
  { "id": 0, "name": "Stefan", "hasFifaBadge": false },
  { "id": 1, "name": "Maxi", "hasFifaBadge": true },
  { "id": 2, "name": "Alex", "hasFifaBadge": false },
  { "id": 3, "name": "Benny", "hasFifaBadge": false },
  { "id": 4, "name": "Leo", "hasFifaBadge": false },
  { "id": 5, "name": "Markus", "hasFifaBadgebadge": false },
  { "id": 6, "name": "Mariusz", "hasFifaBadge": false },
  { "id": 7, "name": "Max", "hasFifaBadge": false },
  { "id": 8, "name": "Daniel", "hasFifaBadge": false },
  { "id": 9, "name": "Joschka", "hasFifaBadge": false }
];

var matches = [{ "id": 1, "home": 0, "away": 1, "matchday": 1, "homeGoals": null, "awayGoals": null }, { "id": 2, "home": 0, "away": 3, "matchday": 3, "homeGoals": null, "awayGoals": null }, { "id": 3, "home": 0, "away": 5, "matchday": 5, "homeGoals": null, "awayGoals": null }, { "id": 4, "home": 1, "away": 2, "matchday": 3, "homeGoals": null, "awayGoals": null }, { "id": 5, "home": 1, "away": 4, "matchday": 5, "homeGoals": null, "awayGoals": null }, { "id": 6, "home": 1, "away": 5, "matchday": 2, "homeGoals": null, "awayGoals": null }, { "id": 7, "home": 2, "away": 0, "matchday": 2, "homeGoals": null, "awayGoals": null }, { "id": 8, "home": 2, "away": 3, "matchday": 5, "homeGoals": null, "awayGoals": null }, { "id": 9, "home": 3, "away": 1, "matchday": 4, "homeGoals": null, "awayGoals": null }, { "id": 10, "home": 3, "away": 4, "matchday": 2, "homeGoals": null, "awayGoals": null }, { "id": 11, "home": 4, "away": 0, "matchday": 4, "homeGoals": null, "awayGoals": null }, { "id": 12, "home": 4, "away": 2, "matchday": 1, "homeGoals": null, "awayGoals": null }, { "id": 13, "home": 5, "away": 2, "matchday": 4, "homeGoals": null, "awayGoals": null }, { "id": 14, "home": 5, "away": 3, "matchday": 1, "homeGoals": null, "awayGoals": null }, { "id": 15, "home": 5, "away": 4, "matchday": 3, "homeGoals": null, "awayGoals": null }]
  ;


let server = "192.168.11.129:8080/rest/v1/";

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
      return players;
    }
    this._doRequest('teams', 'GET', null, (response) => done(response.data));
  }

  getMatches(done) {
    if (this.dummy) {
      return matches;
    }
    this._doRequest('matches', 'GET', null, (response) => done(response.data));
  }

  getResults(done) {
    if (this.dummy) {
      return results;
    }
    this._doRequest('table', 'GET', null, (response) => done(response.data));
  }

  updateMatch(id, home, away, homeGoals, awayGoals, matchday, done) {
    let params = {
      "id": id, "away": away, "home": home, "homeGoals": homeGoals, "awayGoals": awayGoals, "matchday": matchday
    };
    this._doRequest('matches', 'POST', params, (response) => done());
  }
}