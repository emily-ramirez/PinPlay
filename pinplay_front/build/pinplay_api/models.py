from django.db import models


class Playlist(models.Model):
    playlist_name = models.CharField(max_length=20)

#class CSV_data( models.models ):
    #song_title = 
    #song_artist = 
#    def __str__(self):
#        return self.playlist_name
