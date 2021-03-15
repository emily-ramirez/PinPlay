import React from 'react'
import { SpotifyApiContext, User} from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div>
      <div className="background_header">
      <h1>PinPlay</h1>
      <div style={{float:'right'}}>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          { /*Your Spotify Code here*/ }
          <p>You are authorized with token: {token}</p>
          <User>
            {(user) =>
                  user && user.data ? (
                    <p>
                      <div>
                      Logged in as {user.data.display_name}
                      </div>
                      <div>
                      Email is {user.data.email}
                      </div>
                      <div>
                      URI is {user.data.uri}
                      </div>
                      <div>
                      URL is {user.data.external_urls.spotify}
                      </div>
                      <img src={user.data.images[0].url}></img>
                    </p>
                  ) : (
                    <p>Loading...</p>
                  )
            }
          </User>

        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/'
          clientID='b698366808af491eb20ed64dedd91914'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
        />
      )}
    </div>
    </div>
    <div className="header_color"></div>
    <div className="header_color2"></div>
    </div>
    
    
    /*
    */
  )
};

export default App;