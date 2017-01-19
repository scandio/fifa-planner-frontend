import axios from 'axios';
const server = "http://v22017014202143365.hotsrv.de:8080/rest/v1/";

export function getPlayers() {
    return {
        type: 'UPDATE_PLAYERS',
        payload: {
            request:{
                url:'/teams'
            }
        }
    }

}

export function getMatches() {
    return {
        type: 'UPDATE_MATCHES',
        payload: {
            request:{
                url:'/matches'
            }
        }
    }
}

export function getResults() {
    return {
        type: 'UPDATE_RESULTS',
        payload: {
            request:{
                url:'/table'
            }
        }
    }
}

export function updateMatch(match, homeGoals, awayGoals) {
    const params = {
        "id": match.id, "away": match.away, "home": match.home, "homeGoals": homeGoals, "awayGoals": awayGoals, "matchday": match.matchday
    };
    return (dispatch) => {
		dispatch({
            type: 'SAVE_MATCH',
            payload: {
                request:{
                    url:'/matches',
                    method: 'post',
                    data: params
                }
            }
        }).then((response) => {
            dispatch(getMatches());
            dispatch(getResults());
        });
        
	} 
}

export function getMatchday() {
    return { type: 'GET_MATCHDAY' }
}

export function incrementMatchday() {
    return { type: 'INCREMENT_MATCHDAY' }
}

export const decrementMatchday = () => {
    return { type: 'DECREMENT_MATCHDAY' }
}