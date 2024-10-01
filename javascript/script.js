// Select the toggle button
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Check if the user has a saved preference in localStorage
const currentTheme = localStorage.getItem('theme');

// If a theme is stored, apply it
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

// Update the button text based on the current theme
themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

// Add event listener for the toggle button
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update the button text
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

  // Save the current theme in localStorage
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
