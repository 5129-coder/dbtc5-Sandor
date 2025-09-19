/* Elements */
const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const secretMessage = document.getElementById("secret-message");
const secretText = document.getElementById("secret-text");
const loader = document.getElementById("loader");
const clickSound = document.getElementById("click-sound");

/* Config */
const CORRECT = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";
const MESSAGE = "check under your table";
const LOADING_MS = 1500; // loader duration

/* Play click sound */
function playClick() {
  try {
    clickSound.currentTime = 0;
    clickSound.play();
  } catch (e) {}
}

/* Typewriter effect */
function typeWriter(text, el, speed = 55, cb) {
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(t);
      if (cb) cb();
    }
  }, speed);
}

/* Show loader then reveal secret message */
function showLoaderThenReveal() {
  loader.classList.remove("hidden");
  loader.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    loader.classList.add("hidden");
    loader.setAttribute("aria-hidden", "true");

    secretMessage.classList.remove("hidden");
    secretMessage.setAttribute("aria-hidden", "false");

    typeWriter(MESSAGE, secretText, 45, () => {
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.style.display = "inline-block";
      cursor.style.width = "6px";
      cursor.style.height = "16px";
      cursor.style.background = "#0f0";
      cursor.style.marginLeft = "5px";
      cursor.style.verticalAlign = "middle";
      cursor.style.animation = "blink 0.9s step-end infinite";
      secretText.appendChild(cursor);
    });
  }, LOADING_MS);
}

/* Submit handler */
form.addEventListener("submit", function(e) {
  e.preventDefault();
  playClick();

  const val = passwordInput.value.trim();

  if (val === CORRECT) {
    // Correct: hide form & logo
    form.style.display = "none";
    const logo = document.querySelector(".logo");
    if (logo) logo.style.display = "none";

    // Show loader and then secret
    showLoaderThenReveal();
  } else {
    // Wrong password
    errorMsg.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");
    setTimeout(() => passwordInput.classList.remove("shake"), 360);
    passwordInput.focus();
    passwordInput.select();
  }
});

/* Click sound for typing */
passwordInput.addEventListener("keydown", playClick);
const submitButton = form.querySelector('button[type="submit"]');
submitButton.addEventListener("mousedown", playClick);
