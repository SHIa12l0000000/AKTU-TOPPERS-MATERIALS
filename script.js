// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Change button icon
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "☀️ Light Mode";
  } else {
    this.textContent = "🌙 Dark Mode";
  }
});
