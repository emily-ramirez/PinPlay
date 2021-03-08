

class CreatePlaylist:
# From frontend:
# potential display
    # just location
        # NYC, Phoenix, LA ( type doesnt matter )
            # hardcoded option

    # user_ID
    # auth_token
    # playlist name
    # playlist description
    # public flag
    # settings ( only need the actual settings, not the boolean itself )
        # set of booleans
            # e.g. location_flag = True
            # settings_flags = ( public_flag, explicit_flag, weather_flag, location_flag, ... )
 

        # location ( database used here )
            # save info, in database, on just a few cities
        # explicit_flag


# NEED RESEARCH: 
    # 1. how to get user_ID and token (Spotify)
    # 2. how to verify if user_ID and token are valid (Spotify)
    #    - https://developer.spotify.com/documentation/general/guides/authorization-guide/
    # 3. - how to call Shazam API, 
    #    - what it can return
    #    - what format the return comes in 
    # 4. how to get playlist_ID (Spotify)
    # 5. how to look up songs on spotify and get song_id
    # 6. how to add song to playlist (Spotify)

# ideas for tuples    
user_info = ( user_ID, auth_token )
playlist_info = ( name, description )


# order: first
def validate_user( user_info ):
    # result = call on Spotify API
        # need research
    
    # return request == GOOD_HTTP_RESPONSE && auth_token == GOOD_HTTP_RESPONSE
        
        


# order: second
def create_playlist( user_info, playlist_info, settings_flags ):
    # initialize variables
        # This is the format for the spotify API to create an empty playlist
        #  request body = {
        #     "name": playlist_name,
        #     "description": playlist_desc,
        #     "public": public_flag
        #  }

    # responseResult = call Spotify API
        # This function creates empty playlist
        # we think that this will return an HTTP response, need research


    # get song list from shazam
        # code: song_list = find_songs( settings_flags )


    # playlist_id = get_playlist_id(  )


    # add songs to empty playlist
        # code: add_songs( song_list )


    # return "Playlist created"



def get_playlist_id(  )
    # need research
        # we need to figure out how actually get the playlist_id




# purpose: find songs that match criteria specified by user
    # for future use: we may use more parameters/criteria than location. 
    # We will need to include those values as parameters and build
    # functionality for them
def find_songs( location )
    # need research

    # api call to shazam to get list of top shazammed songs for chosen
    # location
    song_list = shazam_api_call


    # may not be necessary
        # only needed if shazam API call cannot return songs based on other
        # criteria, e.g. filter out explicit songs
    filtered_song_list = filter_song_list( settings, song_list )

    
    return song_list





def add_songs( song_list, playlist_info )

    position = 0
    song_ID = None


    for song in song_list:

        # call spotify API to get song info
            # purpose: need to translate info shazam returned into info that
            # spotify can use 
            # code: song_id = call to spotify API( song info from shazam? )

        # spotify API call to add that song to the playlist
            # appears at this moment as though we need to add every song
            # individually
            # Things we need: 

            position++
 
