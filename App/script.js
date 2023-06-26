$('.song').on('click', function () {
  $('.song').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function() {
  // Add click event listener to each song
  $('.song').on('click', function() {
    $('.song').removeClass('active');
    $(this).addClass('active');

    // Get the audio source of the clicked song
    var audioSource = $(this).find('.song-source').attr('src');

    // Update the audio player source and play the song
    $('#audio-player').attr('src', audioSource);
    $('#audio-player')[0].play();
  });
});
