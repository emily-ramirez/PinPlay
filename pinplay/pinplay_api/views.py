from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from pinplay_api.utils import CreatePlaylist


class PlaylistView(APIView):

    def get(self, request):
        '''
        '''
        playlist = request.query_params.get('playlist')

        return Response(status=status.HTTP_204_NO_CONTENT)
