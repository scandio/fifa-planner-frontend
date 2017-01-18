export default (state = 1, action) => {
  switch (action.type){
    case 'INCREMENT_MATCHDAY':
      return state+1;
      break;
    case 'DECREMENT_MATCHDAY':
      return state-1;
      break;
    default:
      return state;
  }
}