// Function for flipping data attribute for dark mode implementation
// Grab the button from the HTML
const themeToggleBtn = document.getElementById('themeToggle');

// Check if the user has a saved theme in localStorage
const savedTheme = localStorage.getItem('userTheme');

// On page load, apply the saved theme (or default to dark if their OS is dark)
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Listen for a click on the button
themeToggleBtn.addEventListener('click', () => {
  // Check what theme is currently active
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Decide what the new theme should be
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Apply the new theme to the HTML tag
  document.documentElement.setAttribute('data-theme', targetTheme);

  // Swap the icons
    
  
  // Save the new theme to localStorage so it remembers for next time
  localStorage.setItem('userTheme', targetTheme);
});

// Confetti effect for clicking 'Apply Now' buttons!
const applyButtons = document.querySelectorAll('.applyBtn');

applyButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Prevent the fireworks from firing if they click the Dark Mode toggle (shared class)
    if (button.id === 'themeToggle') return;

    // Calculate where the clicked button is on the screen
    const rect = button.getBoundingClientRect();
    const xOrigin = (rect.left + (rect.width / 2)) / window.innerWidth;
    const yOrigin = (rect.top + (rect.height / 2)) / window.innerHeight;
    const isTopNav = yOrigin < 0.2; // check if the button is in the top nav (top 20% of the screen)

    // Confetti!!!
    confetti({
      particleCount: 100,      // How many particles
      spread: 70,              // How wide the burst is
      angle: isTopNav ? 270 : 90, // If it's the top nav, shoot down, otherwise up
      origin: { x: xOrigin, y: yOrigin }, // Start at the button
      zIndex: 9999,            // Ensure it appears on top of everything
      colors: ['#10477b', '#8ab4f8', '#ffffff'] // Matching the eCampus theme colors
    });
  });
  });