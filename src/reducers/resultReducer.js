export default (state = [], action) => {
  if (action.type == 'UPDATE_RESULTS_SUCCESS') {
    return action.payload.data;
  }
  return state;
}