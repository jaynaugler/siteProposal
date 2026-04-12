// Function for flipping data attribute for dark mode implementation
// Grab the button from the HTML
const themeToggleBtn = document.getElementById("themeToggle");

// Check if the user has a saved theme in localStorage
const savedTheme = localStorage.getItem("userTheme");

// On page load, apply the saved theme (or default to dark if their OS is dark)
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggleBtn.checked = savedTheme === "dark";
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggleBtn.checked = true;
}

// Listen for a click on the button
themeToggleBtn.addEventListener("change", () => {
  // Check what theme is currently active
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // Decide what the new theme should be
  const targetTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply the new theme to the HTML tag
  document.documentElement.setAttribute("data-theme", targetTheme);

  // Swap the icons

  // Save the new theme to localStorage so it remembers for next time
  localStorage.setItem("userTheme", targetTheme);
});

// Confetti effect for clicking 'Apply Now' buttons!
const applyButtons = document.querySelectorAll(".applyBtn");

applyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Prevent the fireworks from firing if they click the Dark Mode toggle (shared class)
    if (button.id === "themeToggle") return;

    // Calculate where the clicked button is on the screen
    const rect = button.getBoundingClientRect();
    const xOrigin = (rect.left + rect.width / 2) / window.innerWidth;
    const yOrigin = (rect.top + rect.height / 2) / window.innerHeight;
    const isTopNav = yOrigin < 0.2; // check if the button is in the top nav (top 20% of the screen)

    // Confetti!!!
    confetti({
      particleCount: 100, // How many particles
      spread: 120, // How wide the burst is
      angle: isTopNav ? 270 : 90, // If it's the top nav, shoot down, otherwise up
      origin: { x: xOrigin, y: yOrigin }, // Start at the button
      zIndex: 9999, // Ensure it appears on top of everything
      colors: ["#10477b", "#8ab4f8", "#ffffff"], // Matching the eCampus theme colors
    });
  });
});

// Functionality for progress bar on portfolio page
const bar = document.getElementById("reading-progress");
window.addEventListener("scroll", () => {
  // how far was scrolled
  const scrolled = window.scrollY;
  // document.documentElement.scrollHeight — the total height of the entire page
  // window.innerHeight — the visible viewport height
  // calculate how much can be scrolled
  const total = document.documentElement.scrollHeight - window.innerHeight;
  // safety check and percentage calculation of progress bar
  const progress = total > 0 ? Math.min((scrolled / total) * 100, 100) : 0;
  bar.style.width = progress + "%";
});

// Side bar navigation
const sidebar = document.getElementById("sidebar");
const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function openSidebar() {
  sidebar.classList.add("sidebar--open");
  sidebarOverlay.classList.add("sidebar-overlay--visible");
}

function closeSidebar() {
  sidebar.classList.remove("sidebar--open");
  sidebarOverlay.classList.remove("sidebar-overlay--visible");
}

sidebarOpen?.addEventListener("click", openSidebar);
sidebarClose?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

const menuToggle = document.getElementById("menuToggle");
// Mobile menu
menuToggle.addEventListener("click", () => {
  const navMenu = document.querySelector(".navbar-menu");
  navMenu.classList.toggle("is-open");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("ph-list");
  icon.classList.toggle("ph-x");

  const isOpen = icon.classList.contains("ph-x");
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
