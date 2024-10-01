// Function to handle parallax effect
function parallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach((element) => {
    const scrollPosition = window.pageYOffset; // How much the user has scrolled
    const speed = element.getAttribute('data-speed') || 0.5; // Use a speed factor (default: 0.5)
    
    // Move the background based on scroll position and speed factor
    element.style.backgroundPositionY = `${scrollPosition * speed}px`;
  });
}

// Listen for scroll event
window.addEventListener('scroll', parallaxEffect);
