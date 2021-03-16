def main(  ):
    tracklist_file = open_CSV( "Shazam_Phoenix.csv" )
    track_arr = parse_CSV( tracklist_file )
    print_arr( track_arr )



def open_CSV( file_path ):
    return open( file_path, "r" )


def parse_CSV( open_csv_file ):
    csv_arr = []
    newline_char = "\n"
    space_comma = ", "


    for row in open_csv_file:
        row_list = row.split(",")
        track_popularity = row_list[0]


        if track_popularity.isdigit():
            row_artist = row_list[1]
            row_song = row_list[2] 

            if len( row_list ) > 3:
                row_artist_tuple = ( row_list[1], row_list[2] )
                row_artist = space_comma.join( row_artist_tuple )
                row_song = row_list[3]


            row_song_stripped = row_song.strip( newline_char )

            row_tuple = ( row_song_stripped, row_artist )
            csv_arr.append( row_tuple )


    return csv_arr


def print_arr( arrToPrint ):
    for tuple in arrToPrint:
        print( tuple )




if __name__ == "__main__":
    main()
