const INITIAL_STATE = {
  playlistID: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'MAKE_PLAYLIST':
        return {...state, playlistID: action.payload};
      default:
          return state;
  }
}