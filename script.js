const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const darkModeIsOn = document.body.classList.contains("dark-mode");
  themeButton.textContent = darkModeIsOn
    ? "Switch to light mode"
    : "Switch to dark mode";
  themeButton.setAttribute("aria-pressed", darkModeIsOn);
});
