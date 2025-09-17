const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const secretMessage = document.getElementById("secret-message");

// Correct password (as numbers separated by spaces)
const correctPassword = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    form.style.display = "none";
    secretMessage.classList.remove("hidden");
  } else {
    errorMsg.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");

    // Re-focus and select text
    passwordInput.focus();
    passwordInput.select();

    setTimeout(() => {
      passwordInput.classList.remove("shake");
    }, 300);
  }
});
