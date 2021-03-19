import { SpotifyApiContext, User} from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const Header = () => {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div>
      <div className="background_header">
      <h1>PinPlay</h1>
      <div style={{float:'right'}}>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          { /*Your Spotify Code here*/ }
          
          <User>
            {(user) =>
                  user && user.data ? (
                    <p>
                      <div>
                      Logged in as {user.data.display_name}
                      </div>
                      <div>
                        Token: {token}
                      </div>
                      <div>
                        Username: {user.data.id}
                      </div>
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
          scopes={[Scopes.userReadPrivate, 'user-read-email', 'playlist-modify-public', 'playlist-modify-private']} // either style will work
        />
      )}
    </div>
    </div>
    <div className="header_color"></div>
    <div className="header_color2"></div>
    </div>
  )
}

export default Header;