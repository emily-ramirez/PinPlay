import React from 'react';
import {connect} from 'react-redux';
class EndScreen extends React.Component{

  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.playlistID)
    const playlistLink = `https://open.spotify.com/embed/playlist/${this.props.playlistID}`
    return(
      <div>
        <div class="playlist_embed">
          <div>
            Your generated playlist:
          </div>
          <iframe class="embedded-playlist" src={playlistLink}
                allowtransparency="true" allow="encrypted-media" title={this.props.playlistID}>
        </iframe>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{playlistID:ownProps.match.params.id};
};

export default connect(mapStateToProps, null)(EndScreen);

/*
<div class="site_button">
        <button type="button">
            <Link to={`/`} className="ui button primary">
              Update Playlist
            </Link>
        </button>
*/