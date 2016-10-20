import http from 'http';
import request from 'sync-request';

var results = [{
  "id": 1,
  "name": "Maxi",
  "played": 2,
  "won": 2,
  "drawn": 0,
  "lost": 0,
  "for": 4,
  "against": 2,
  "points": 6
},
{
  "id": 2,
  "name": "Stefan",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
},
{
  "id": 3,
  "name": "Benny",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
},
{
  "id": 4,
  "name": "Leo",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
}];

var results2 = [{
  "id": 1,
  "name": "Maxi",
  "played": 3,
  "won": 3,
  "drawn": 0,
  "lost": 0,
  "for": 6,
  "against": 2,
  "points": 6
},
{
  "id": 2,
  "name": "Stefan",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
},
{
  "id": 3,
  "name": "Benny",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
},
{
  "id": 4,
  "name": "Leo",
  "played": 2,
  "won": 0,
  "drawn": 1,
  "lost": 1,
  "for": 2,
  "against": 3,
  "points": 1
}];

var players = [
  { "id": 0, "name": "Stefan" },
  { "id": 1, "name": "Maxi" },
  { "id": 2, "name": "Alex" },
  { "id": 3, "name": "Benny" },
  { "id": 4, "name": "Leo" },
  { "id": 5, "name": "Markus" },
  { "id": 6, "name": "Mariusz" },
  { "id": 7, "name": "Max" },
  { "id": 8, "name": "Daniel" },
  { "id": 9, "name": "Joschka" }
];

var matches = [{"id":1,"home":0,"away":1,"matchday":1,"homeGoals":null,"awayGoals":null},{"id":2,"home":0,"away":3,"matchday":3,"homeGoals":null,"awayGoals":null},{"id":3,"home":0,"away":5,"matchday":5,"homeGoals":null,"awayGoals":null},{"id":4,"home":1,"away":2,"matchday":3,"homeGoals":null,"awayGoals":null},{"id":5,"home":1,"away":4,"matchday":5,"homeGoals":null,"awayGoals":null},{"id":6,"home":1,"away":5,"matchday":2,"homeGoals":null,"awayGoals":null},{"id":7,"home":2,"away":0,"matchday":2,"homeGoals":null,"awayGoals":null},{"id":8,"home":2,"away":3,"matchday":5,"homeGoals":null,"awayGoals":null},{"id":9,"home":3,"away":1,"matchday":4,"homeGoals":null,"awayGoals":null},{"id":10,"home":3,"away":4,"matchday":2,"homeGoals":null,"awayGoals":null},{"id":11,"home":4,"away":0,"matchday":4,"homeGoals":null,"awayGoals":null},{"id":12,"home":4,"away":2,"matchday":1,"homeGoals":null,"awayGoals":null},{"id":13,"home":5,"away":2,"matchday":4,"homeGoals":null,"awayGoals":null},{"id":14,"home":5,"away":3,"matchday":1,"homeGoals":null,"awayGoals":null},{"id":15,"home":5,"away":4,"matchday":3,"homeGoals":null,"awayGoals":null}]
;

let host = "192.168.11.129:8080";
let path = "/rest/v1/";
export function getPlayers(dummy = false) {
  if (dummy) {
    return players;
  }
  let url = path + 'teams';
  var res = request('GET', 'http://' + host + url);;
  return JSON.parse(res.getBody());
}

export function getMatches(dummy = false) {
  if (dummy) {
    return matches;
  }
  let url = path + 'matches';
  var res = request('GET', 'http://' + host + url);
  return JSON.parse(res.getBody());
}

export function getResults(dummy = false) {
  if (dummy) {
    return [];
  }
  let url = path + 'table';
  var res = request('GET', 'http://' + host + url);
  return JSON.parse(res.getBody());
}

export function getNewResults() {
  return results2;
}

export function updateMatch(id, home, away, homeGoals, awayGoals, matchday) {
  let url = path + 'matches';
  let jsonstr = {
    "id": id, "away": away, "home": home, "homeGoals": homeGoals, "awayGoals": awayGoals, "matchday": matchday
  };
  console.log(jsonstr);
  var res = request('POST', 'http://' + host + url, {
    json: jsonstr
  });
}

export function updatePlayer() {
  return [{
    "id": 4,
    "home": 1,
    "away": 3,
    "matchday": 3,
    "homescore": undefined,
    "awayscore": undefined
  },
  {
    "id": 5,
    "home": 2,
    "away": 4,
    "matchday": 3,
    "homescore": 1,
    "awayscore": 0
  }];
}