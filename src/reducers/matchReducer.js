export default (state = [], action) => {
  switch (action.type){
    case 'UPDATE_MATCHES_SUCCESS':
      return action.payload.data;
      break;
  }
  return state;
}