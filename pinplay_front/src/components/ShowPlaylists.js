import React from 'react';
import {Link} from 'react-router-dom'
const ShowPlaylists = () => {
  return(
    <div>
      Playlists will be displayed here in the future.
      For now, click the button to your right to go to the playlist generation page.
      <button type="button">
        <Link to={`/filters`} className="ui button primary">
          Click here!
        </Link>
      </button>
    </div>
  )
}

export default ShowPlaylists