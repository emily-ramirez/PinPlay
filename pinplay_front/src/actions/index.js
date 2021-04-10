import django from '../apis/django';
import history from '../history';

export const makePlaylist = (token, id, formValues) => async dispatch => {
  const response = await django.get('/pinplay_api/', {params:{
    user_id: id,
    auth_token: token,
    playlist_name: "My Second Pinplay Playlist",
    location: formValues.city,
    genre: formValues.genre,
    explicit: formValues.explicit
  }});

  dispatch({type:'MAKE_PLAYLIST', payload:response.data});
  history.push(`/endscreen/${response.data}`)
};

export const getID = (id) => {
  return ({
    type: 'GET_ID',
    payload:id
  });
};