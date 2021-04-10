import React from 'react';
import {connect} from 'react-redux';
import Cookies from 'js-cookie'

import 'react-spotify-auth/dist/index.css'
import {Field, reduxForm} from 'redux-form';
import PlaylistForm from './PlaylistForm';
import {makePlaylist} from '../actions';

class Filters extends React.Component{

  onSubmit = (formValues) => {
    const token = Cookies.get('spotifyAuthToken');
    const user_id = this.props.userID
    this.props.makePlaylist(token, user_id, formValues)
  }

  getPlaylistLink() {
    return `https://open.spotify.com/embed/playlist/${this.props.playlistID}`
  }
  
  render(){
    const token = Cookies.get('spotifyAuthToken');
    return(
      <div>
      {this.props.userID ? (
        <div>
          <PlaylistForm onSubmit={this.onSubmit}/>
        </div>
      ) : (
      <div>
        Please log in to continue.
        NOTE: You may need to reload the page when you log in.
      </div>
      )}
      
    </div>
    )
    
  }
}
const mapStateToProps = (state, ownProps) => {
  return{playlistID:state.playlist.playlistID, userID:state.auth.userID};
};

export default connect(mapStateToProps, {makePlaylist})(Filters);

/*const token = Cookies.get('spotifyAuthToken');
  return(
    
    )
*/
/*

*/