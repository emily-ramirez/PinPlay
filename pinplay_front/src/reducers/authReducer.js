const INITIAL_STATE = {
  userID: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'GET_ID':
        return {...state, userID: action.payload};
      default:
          return state;
  }
}