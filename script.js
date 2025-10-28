/* Elements */
const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const secretMessage = document.getElementById("secret-message");
const secretText = document.getElementById("secret-text");
const clickSound = document.getElementById("click-sound");

/* Config */
const CORRECT = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";
const MESSAGE = "check under your table";

/* Play click sound */
function playClick() {
  try {
    clickSound.currentTime = 0;
    clickSound.play();
  } catch (e) {}
}

/* Typewriter effect */
function typeWriter(text, el, speed=50, cb){
  el.textContent = "";
  let i=0;
  const t = setInterval(()=>{
    el.textContent += text.charAt(i);
    i++;
    if(i>=text.length){
      clearInterval(t);
      if(cb) cb();
    }
  }, speed);
}

/* Reveal secret message */
function revealSecret(){
  secretMessage.classList.remove("hidden");
  secretMessage.setAttribute("aria-hidden","false");

  typeWriter(MESSAGE, secretText, 50, ()=>{
    const c = document.createElement("span");
    c.className="cursor";
    secretText.appendChild(c);
  });
}

/* Form submit */
form.addEventListener("submit", e=>{
  e.preventDefault();
  playClick();

  if(passwordInput.value.trim() === CORRECT){
    form.style.display="none";
    document.querySelector(".logo").style.display="none";
    revealSecret();
  } else {
    errorMsg.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");
    setTimeout(()=>passwordInput.classList.remove("shake"), 350);
    passwordInput.focus();
    passwordInput.select();
  }
});

/* Play click on button press */
form.querySelector('button[type="submit"]').addEventListener("mousedown", playClick);

/* Play click while typing */
passwordInput.addEventListener("keydown", playClick);
