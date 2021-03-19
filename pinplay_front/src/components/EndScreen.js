import React from 'react';
import {Link} from 'react-router-dom';

class EndScreen extends React.Component{

  render() {
    return(
      <div>

        <div class="playlist_embedd">
        <iframe class="embedded-playlist" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0"
                allowtransparency="true" allow="encrypted-media">
        </iframe>
        </div>

        
        <div class="site_button">
        <button type="button">
            <Link to={`/`} className="ui button primary">
              Update Playlist
            </Link>
        </button>
        </div>
      </div>
    )
  }
}

export default EndScreen;