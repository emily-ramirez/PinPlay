import django from '../apis/django';

export const makePlaylist = (id, token) => async dispatch => {
  const response = await django.get('/pinplay_api/', {params:{
    user_id: id,
    auth_token: token,
    playlist_name: "My First Pinplay Playlist"
  }});

  dispatch({type:'MAKE_PLAYLIST', payload:response.data});
};

export const getID = (id) => {
  return ({
    type: 'GET_ID',
    payload:id
});
};