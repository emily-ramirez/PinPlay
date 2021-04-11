import django from '../apis/django';
import history from '../history';

export const makePlaylist = (token, id, formValues) => async dispatch => {
  const response = await django.get('/pinplay_api/', {params:{
    user_id: id,
    spotify_token: token,
    playlist_name: "My Second Pinplay Playlist",
    location: formValues.city,
    explicit: formValues.explicit,
    genre: formValues.genre
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