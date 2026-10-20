const themeButton = document.getElementById("theme-button");
const themeStorageKey = "portfolio-theme";
const savedTheme = localStorage.getItem(themeStorageKey);

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

function updateThemeButton() {
  const darkModeIsOn = document.body.classList.contains("dark-mode");
  themeButton.textContent = darkModeIsOn
    ? "Switch to light mode"
    : "Switch to dark mode";
  themeButton.setAttribute("aria-pressed", darkModeIsOn);
}

updateThemeButton();

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const darkModeIsOn = document.body.classList.contains("dark-mode");
  localStorage.setItem(themeStorageKey, darkModeIsOn ? "dark" : "light");
  updateThemeButton();
});
