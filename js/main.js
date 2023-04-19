// Get the header element
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');

// Listen for the 'scroll' event on the window object
wrapper.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollTop = wrapper.scrollTop;
  if (scrollTop > 0) {
    header.classList.add('header_bg');
  } else {
    header.classList.remove('header_bg');
  }
});

function toggleMute() {
  var video = document.getElementById("sncf-video");
  var sound = document.getElementById("sncf-sound");
  
  if (video.muted) {
    sound.innerHTML = '<i class="fas fa-volume-mute px-1"></i> Sound Off';
  } else {
    sound.innerHTML = '<i class="fas fa-volume-up px-1"></i> Sound On';
  }
  video.pause();
  video.currentTime = '0';
  video.muted = !video.muted;
  video.play();
};

