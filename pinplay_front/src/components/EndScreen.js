import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import './../pinplay.css'
class EndScreen extends React.Component{

  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.playlistID)
    const playlistLink = `https://open.spotify.com/embed/playlist/${this.props.playlistID}`
    return(
     <div className={"container"} id={"Playlist"}>
                <div class="playlist_embed">
                    <div className={"row"} id={"TitleBar"}>
                        <h4 id={"TitleText"}>
                            Your generated playlist:
                        </h4>
                    </div>
                    <div className={"row"}>
                    <div className={"col-*-*"}>
                        <iframe class="embedded-playlist" src={playlistLink}
                                allowtransparency="true" allow="encrypted-media" title={this.props.playlistID}>
                        </iframe>
                    </div>
                    <div className={"row"} id={"NewPlaylist"}>
                        <Link to={`/filters`} className="ui button primary">
                            <button type="button">
                                Create New Playlist
                            </button>
                        </Link>
                    </div>
                    </div>
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
