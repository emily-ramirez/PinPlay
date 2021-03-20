import React from 'react';
import {connect} from 'react-redux';
import { SpotifyApiContext, User} from 'react-spotify-api'
import Cookies from 'js-cookie'
import {makePlaylist} from '../actions'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

class PlaylistFilters extends React.Component{

  onClick() {
    const token = Cookies.get('spotifyAuthToken');
    const user_id = this.props.userID;
    this.props.makePlaylist(user_id, token)
  }

  getPlaylistLink() {
    return `https://open.spotify.com/embed/playlist/${this.props.playlistID}`
  }
  render(){
  const token = Cookies.get('spotifyAuthToken');
  return(
    <div>
      {token ? (
      <div>
        {this.props.playlistID ? (
        <div>
          <div>
            Your generated playlist:
          </div>
          <iframe class="embedded-playlist" src={this.getPlaylistLink()}
                allowtransparency="true" allow="encrypted-media">
        </iframe>
        </div>
      ) : (
        <div>
          <button onClick={this.onClick.bind(this)} class="ui button primary">
            Generate A Playlist!
          </button>
        </div>
      )}
      </div>
      ) : (
      <div>
        Please log in to continue.
      </div>
      )}
      
    </div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  return{playlistID:state.playlist.playlistID, userID:state.auth.userID};
};

export default connect(mapStateToProps, {makePlaylist})(PlaylistFilters);