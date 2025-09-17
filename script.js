// Grab elements
const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const secretMessage = document.getElementById("secret-message");
const clickSound = document.getElementById("click-sound");

// Correct password (numbers with spaces)
const correctPassword = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Play click sound
  clickSound.play();

  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    // Correct password
    form.style.display = "none";
    document.querySelector(".logo").style.display = "none";
    secretMessage.classList.remove("hidden");
  } else {
    // Wrong password
    errorMsg.textContent = "Wrong password. Try again.";

    // Shake animation
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
    }, 300);

    // Refocus and select input
    passwordInput.focus();
    passwordInput.select();
  }
});
