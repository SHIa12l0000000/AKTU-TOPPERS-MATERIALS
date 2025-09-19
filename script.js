// Run after page load
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-theme");

  // Check saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️ Light Mode";
  }

  // Toggle theme on button click
  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      this.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      this.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});
