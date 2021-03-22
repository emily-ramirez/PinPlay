import React from 'react';
import {connect} from 'react-redux';
import { SpotifyApiContext, User} from 'react-spotify-api'
import Cookies from 'js-cookie'
import {getID} from '../actions'

import { SpotifyAuth } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

class Header extends React.Component {

  storeLogin(id){
    this.props.getID(id)
  }
  render() {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div>
      <div className="background_header">
      <h1>PinPlay</h1>
      <div style={{float:'right'}}>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <User>
            {(user) =>
                  user && user.data ? (
                    <p>
                      <div>
                      {this.storeLogin(user.data.id)}
                      Logged in as {user.data.display_name}
                      </div>
                    </p>
                  ) : (
                    <p>Loading...</p>
                  )
            }
          </User>

        </SpotifyApiContext.Provider>
      ) : (
        // TODO: Replace 'localhost:3000' with 'pinplay.me'
        <SpotifyAuth
          redirectUri='http://pinplay.me/'
          clientID='b698366808af491eb20ed64dedd91914'
          scopes={['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private']}
        />
      )}
    </div>
    </div>
    <div className="header_color"></div>
    <div className="header_color2"></div>
    </div>
  )
      }
}

export default connect(null,{getID})(Header);
