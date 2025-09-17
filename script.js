// Correct password (numbers with spaces)
const correctPassword = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";

const form = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const errorDiv = document.getElementById("error");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (passwordInput.value === correctPassword) {
    // Hide form
    form.style.display = "none";
    // Show message
    message.classList.remove("hidden");
    message.classList.add("typewriter");
  } else {
    // Wrong password
    errorDiv.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");
    setTimeout(() => passwordInput.classList.remove("shake"), 300);
    passwordInput.focus();
    passwordInput.select();
  }
});
