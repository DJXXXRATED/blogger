$('.song').on('click', function () {
  $('.song').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function() {
  // Existing code
  
  // Add click event listener to each song
  $('.song').on('click', function() {
    $('.song').removeClass('active');
    $(this).addClass('active');
  });
});
