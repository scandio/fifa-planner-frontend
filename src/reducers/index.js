import { combineReducers } from 'redux';

import matchday from './matchdayReducer';
import matches from './matchReducer';
import players from './playerReducer';
import results from './resultReducer';

export default combineReducers({
    matchday,
    matches,
    players,
    results
});