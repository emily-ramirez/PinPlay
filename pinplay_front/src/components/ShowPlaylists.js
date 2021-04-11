import React from 'react';
import {Link} from 'react-router-dom'
import './../pinplay.css'

const ShowPlaylists = () => {
  return(
    <div className={"container"}>
            <div className={"jumbotron"}>
                <h4>
                    Playlists will be displayed here in the future.</h4>
                <h4>
                    For now, click the button to go to the playlist generation page.
                </h4>
                <div className={"ClickHere"}>
                    <Link to={`/filters`} className="ui button primary">
                        <button type="button" className={"ClickHere"} data-toggle={"modal"} data-target={"#myModal"}>
                            Click here!
                        </button>
                    </Link></div>
            </div>
        </div>
  )
}

export default ShowPlaylists
