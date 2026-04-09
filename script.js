


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
  
  // Save the new theme to localStorage so it remembers for next time
  localStorage.setItem('userTheme', targetTheme);
});