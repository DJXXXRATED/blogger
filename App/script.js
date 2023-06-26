$('.song').on('click', function () {
  $('.song').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function() {
  var audioElements = $("audio"); // Get all audio elements on the page
  var currentAudio = audioElements[0]; // Initialize current audio element

  // Function to play or pause audio
  function toggleAudio(element) {
    if (element.paused) {
      element.play();
    } else {
      element.pause();
    }
  }

  // Function to update progress bar and current time
  function updateProgress(element) {
    var progressBar = $(element).siblings(".progress-wrapper").find(".progress-bar")[0];
    var currentTime = $(element).siblings(".times-row").find(".start-time")[0];
    
    // Calculate progress percentage
    var progress = (element.currentTime / element.duration) * 100;
    progressBar.style.width = progress + "%";
    
    // Convert current time to minutes and seconds format
    var minutes = Math.floor(element.currentTime / 60);
    var seconds = Math.floor(element.currentTime % 60);
    currentTime.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  // Add click event listeners to each song
  $(".song").each(function() {
    var audioElement = $(this).find("audio")[0];
    $(this).on("click", function() {
      toggleAudio(audioElement);
      currentAudio = audioElement; // Update current audio element
    });
  });

  // Update progress bar and current time every second
  setInterval(function() {
    updateProgress(currentAudio);
  }, 1000);

  // Previous song button
  $(".player-actions .action-button:nth-child(1)").on("click", function() {
    var currentIndex = audioElements.index(currentAudio);
    var previousAudio = audioElements[currentIndex - 1];
    
    if (previousAudio) {
      toggleAudio(currentAudio);
      currentAudio = previousAudio; // Update current audio element
      toggleAudio(currentAudio);
    }
  });

  // Play/pause button
  $(".player-actions .play-button").on("click", function() {
    toggleAudio(currentAudio);
    $(this).find("i").toggleClass("material-icons-play").toggleClass("material-icons-pause");
  });

  // Next song button
  $(".player-actions .action-button:nth-child(3)").on("click", function() {
    var currentIndex = audioElements.index(currentAudio);
    var nextAudio = audioElements[currentIndex + 1];
    
    if (nextAudio) {
      toggleAudio(currentAudio);
      currentAudio = nextAudio; // Update current audio element
      toggleAudio(currentAudio);
    }
  });
});

