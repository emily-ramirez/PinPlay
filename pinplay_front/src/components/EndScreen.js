import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//THIS IS A MESSS
//CURRENTLY UNUSED
class EndScreen extends React.Component{

  render() {
    console.log(this.props.playlistID)
    const playlistLink = `https://open.spotify.com/embed/playlist/${this.props.playlistID}`
    return(
      <div>

        <div class="playlist_embedd">
        
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