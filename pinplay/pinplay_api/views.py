from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from pinplay_api.utils import create_playlist


class PlaylistView(APIView):

    def get(self, request):
        # creates playlist using user info and playlist info

        # our API call format:
            # http http://127.0.0.1:8000/pinplay_api/ user_id==username auth_token==token playlist_name==name
            # put in your own values (username, token, name), no quotes

        user_id = request.query_params.get('user_id')
        auth_token = request.query_params.get('auth_token')

        playlist_name = request.query_params.get('playlist_name')

        user_info = [user_id, auth_token]
        playlist_info = [playlist_name, None, False]

        output = create_playlist(user_info, playlist_info)

        resp = Response(output)
        resp['Access-Control-Allow-Origin'] = '*'

        return resp
