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
const LOADING_MS = 1500; // how long loader shows before reveal (ms)

/* play sound safely (bail silently if unavailable) */
function playClick() {
  try {
    clickSound.currentTime = 0;
    clickSound.play();
  } catch (e) { /* ignore autoplay restrictions or missing file */ }
}

/* Keypress sound for typing vibe */
passwordInput.addEventListener("keydown", function() {
  playClick();
});

/* Typewriter helper */
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

/* Show loader then reveal message */
function showLoaderThenReveal() {
  // Show loader overlay
  loader.classList.remove("hidden");
  loader.setAttribute("aria-hidden", "false");

  // After LOADING_MS reveal the message
  setTimeout(() => {
    loader.classList.add("hidden");
    loader.setAttribute("aria-hidden", "true");

    // Reveal secret message with typewriter and cursor
    secretMessage.classList.remove("hidden");
    secretMessage.setAttribute("aria-hidden", "false");
    typeWriter(MESSAGE, secretText, 55, () => {
      // add blinking cursor
      const c = document.createElement("span");
      c.className = "cursor";
      c.style.display = "inline-block";
      c.style.width = "8px";
      c.style.height = "20px";
      c.style.background = "#0f0";
      c.style.marginLeft = "8px";
      c.style.verticalAlign = "middle";
      c.style.animation = "blink 0.9s step-end infinite";
      secretText.appendChild(c);
    });
  }, LOADING_MS);
}

/* Submit handler */
form.addEventListener("submit", function(e) {
  e.preventDefault();
  playClick();

  const val = passwordInput.value.trim();

  if (val === CORRECT) {
    // correct: hide form & logo, then show loader
    form.style.display = "none";
    const logo = document.querySelector(".logo");
    if (logo) logo.style.display = "none";

    // small fade or quick flicker can be added here; show loader
    showLoaderThenReveal();
  } else {
    // incorrect
    errorMsg.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");
    setTimeout(() => passwordInput.classList.remove("shake"), 360);
    passwordInput.focus();
    passwordInput.select();
  }
});

/* Allow clicking the button to play sound (immediate click sound on mouse) */
const submitButton = form.querySelector('button[type="submit"]');
if (submitButton) {
  submitButton.addEventListener("mousedown", playClick);
}
