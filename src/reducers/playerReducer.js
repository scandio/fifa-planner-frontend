export default (state = [], action) => {
  if (action.type == 'UPDATE_PLAYERS_SUCCESS') {
    return action.payload.data;
  }
  return state;
}