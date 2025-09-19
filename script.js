/* Elements */
const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const loader = document.getElementById("loader");
const secretMessage = document.getElementById("secret-message");
const secretText = document.getElementById("secret-text");
const clickSound = document.getElementById("click-sound");

/* Config */
const CORRECT = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";
const MESSAGE = "check under your table";
const LOADING_MS = 1200; // loader duration

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

/* Show loader and then reveal secret message */
function showLoaderThenReveal(){
  loader.classList.remove("hidden");
  loader.setAttribute("aria-hidden","false");

  setTimeout(()=>{
    loader.classList.add("hidden");
    loader.setAttribute("aria-hidden","true");

    secretMessage.classList.remove("hidden");
    secretMessage.setAttribute("aria-hidden","false");

    typeWriter(MESSAGE, secretText, 50, ()=>{
      const c = document.createElement("span");
      c.className="cursor";
      secretText.appendChild(c);
    });

  }, LOADING_MS);
}

/* Form submit */
form.addEventListener("submit", e=>{
  e.preventDefault();
  playClick();

  if(passwordInput.value.trim() === CORRECT){
    form.style.display="none";
    document.querySelector(".logo").style.display="none";
    showLoaderThenReveal();
  } else {
    errorMsg.textContent = "Wrong password. Try again.";
    passwordInput.classList.add("shake");
    setTimeout(()=>passwordInput.classList.remove("shake"), 350);
    passwordInput.focus();
    passwordInput.select();
  }
});

/* Play click on button mousedown */
form.querySelector('button[type="submit"]').addEventListener("mousedown", playClick);

/* Play click when typing */
passwordInput.addEventListener("keydown", playClick);
