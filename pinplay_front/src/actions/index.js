import django from '../apis/django'

export const makePlaylist = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({type:'MAKE_PLAYLIST', payload:response.data});
};