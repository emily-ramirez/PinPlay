import requests
import json


# Notes:
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

def validate_user( user_info ):
    pass
    # result = call on Spotify API
        # need research
    
    # return request == GOOD_HTTP_RESPONSE && auth_token == GOOD_HTTP_RESPONSE
 
def create_playlist( user_info, playlist_info, settings_flags=None ):
    # initially creates empty playlist and add songs to playlist

    # must be in this format:
        # user_info = [user_ID, auth_token]
        # playlist_info = [name, description, public_flag]

    # call to Spotify API using user account id 
    query = 'https://api.spotify.com/v1/users/{}/playlists'.format(user_info[0])

    # collects all playlist info to pass into request
    data = json.dumps({
        'name': playlist_info[0],
        'description': playlist_info[1],
        'public': playlist_info[2]
    })

    # uses token to verify authorization
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {}'.format(user_info[1])
    }

    # completes request to Spotify API
    response = requests.post(
        query,
        data=data,
        headers=headers
    )

    response = response.json()

    # get playlist_id from Spotify API call
    playlist_id = response['id']

    # get song list from shazam
        # code: song_list = find_songs( settings_flags )
        # need to pass song_list into get_song_uris, currently hardcoded
    song_list = song_list = [('Crew', 'Brent Faiyaz'), ('Si Una Vez', 'Selena')]

    # search for song uri using song info
    song_uris_list = get_song_uris(song_list, user_info)

    # add all song uris to empty playlist
    add_songs(song_uris_list, playlist_id, user_info, playlist_info)

    return 'Created new playlist'

def find_songs( location )
    pass

    # purpose: find songs that match criteria specified by user
    # for future use: we may use more parameters/criteria than location. 
    # We will need to include those values as parameters and build
    # functionality for them
    # need research

    # api call to shazam to get list of top shazammed songs for chosen
    # location
    # song_list = shazam_api_call


    # may not be necessary
        # only needed if shazam API call cannot return songs based on other
        # criteria, e.g. filter out explicit songs
    # filtered_song_list = filter_song_list( settings, song_list )

    
    # return song_list

def get_song_uris(song_list, user_info):
    # collects all uris using song info and returns list
    # song_list must be in format [(song, artist)]

    # create list to add all uris
    song_uris_list = []

    # loop over all songs in song list
    for song in song_list:
        # call to Spotify API using song name and artist
        query = 'https://api.spotify.com/v1/search?q={},{}&type=track%2Cartist&limit=1'.format(song[0], song[1])

        # uses token to verify authorization
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {}'.format(user_info[1])
        }

        # completes request to Spotify API
        response = requests.get(
            query,
            headers=headers
        )

        response = response.json()

        # collect song uri
        song_uri = response['tracks']['items'][0]['uri']

        # append to song list
        song_uris_list.append(song_uri)

    return song_uris_list

def add_songs( song_uris_list, playlist_id, user_info, playlist_info ):
    # add songs to any playlist using playlist id

    # call to Spotify API
    query = 'https://api.spotify.com/v1/playlists/{}/tracks'.format(playlist_id)

    # collects all song uris to pass into request
    data = json.dumps(song_uris_list)

    # uses token to verify authorization
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {}'.format(user_info[1])
    }

    # completes request to Spotify API, songs are now added to playlist
    response = requests.post(
        query,
        data=data,
        headers=headers
    )
