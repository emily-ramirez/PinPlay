  # def main(  ):
  #     tracklist_file = open_CSV( "Shazam_Phoenix.csv" )
  #     track_arr = parse_CSV( tracklist_file )
  #     print_arr( track_arr )



  ƒ open_CSV( file_path ):
      return open( file_path, "r" )


  ƒ parse_CSV( open_csv_file ):
      csv_arr = []
      newline_char = "\n"
      row_song_stripped = ""
      space_comma = ", "
      strip_index = 0


      for row in open_csv_file:

          # break items in row into individual units on commas
          row_list = row.split(",")
          track_popularity = row_list[0]


          # if the row begins with an integer value, we want to consider it
              # excludes items such as header
          if track_popularity.isdigit():
              row_artist = row_list[1]
              row_song = row_list[2]


              # some artists have features in the Phoenix file, i.e. the Bruno
              # Mars track, the first track in the file. Because of this
              # we want to combine those featured artists into the same item as
              # the lead artist. This is a hack because it requires that we know
              # ahead of time if a row in the file has a set of artists
              # separated into two units by commas.
              if len( row_list ) > 3:
                  row_artist_tuple = ( row_list[1], row_list[2] )
                  row_artist = space_comma.join( row_artist_tuple )
                  row_song = row_list[3]


              # strip the line of the newline character, \n
              row_song_no_newline = row_song.strip( newline_char )


              # removes double quotes
              row_song_stripped = row_song_no_newline[1:-1]
              row_artist_stripped = row_artist[1:-1]



              # package each row's relevant info as a tuple
                  # this form of tuple seems to be the most atomic value
                  # capable of being used by spotify API
                  # e.g. ( song_name, artist_name )
              row_tuple = ( row_song_stripped, row_artist_stripped )


              # append the song/artist tuple to the existing array of tuples
              csv_arr.append( row_tuple )


      # returns entire array of tuples
          # can be adapted to return individual tuple for future deliverables
      return csv_arr


  # def print_arr( arrToPrint ):
  #     for tuple in arrToPrint:
  #         print( tuple )




  # if __name__ == "__main__":
  #     main()





