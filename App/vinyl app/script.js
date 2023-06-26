(function($) {
  $(document).ready(function() {
    // Playlist
    var playlist = [
      {
        artist: 'DJXXXRATED',
        album: 'Make Yourself',
        song: 'BOUNCE',
        <audio controls>
  <source src="https://drive.google.com/uc?export=download&amp;id=1Xtna_xD5p9ZjiTqy_kswT5xxfJ6lKXhu" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
      },
      {
        artist: 'Artist 2',
        album: 'Album 2',
        song: 'Song 2',
        src: 'path/to/song2.mp3'
      },
      // Add more songs to the playlist as needed
    ];

    // Index of the currently playing song
    var currentSongIndex = 0;

    // Pause/Play functionality
    var playButton = $('.control-play'),
      album = $('.album');

    playButton.on('click', function() {
      $('.music-player-container').toggleClass('is-playing');
    });

    // Update the song information
    function updateSongInfo() {
      var currentSong = playlist[currentSongIndex];
      $('.artist-name').text(currentSong.artist);
      $('.album-title').text(currentSong.album);
      $('.song-title').text(currentSong.song);

      // Update audio source
      var audio = $('audio');
      audio.attr('src', currentSong.src);
    }

    // Next song functionality
    var nextButton = $('.control-forwards');
    nextButton.on('click', function() {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
      updateSongInfo();
    });

    // Previous song functionality
    var backButton = $('.control-back');
    backButton.on('click', function() {
      currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
      updateSongInfo();
    });

    // Initialize the first song
    updateSongInfo();
  });
})(jQuery);
