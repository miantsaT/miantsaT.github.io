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
