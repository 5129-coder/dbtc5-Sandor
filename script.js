document.addEventListener("DOMContentLoaded", () => {
  // numeric-alphabet password for "such a smart team"
  const PASSWORD = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";

  const input = document.getElementById("pwd");
  const btn = document.getElementById("submitBtn");
  const err = document.getElementById("err");
  const welcome = document.getElementById("welcome");
  const welcomeText = document.getElementById("welcomeText");

  // typewriter reveal for welcome
  function showWelcome() {
    document.querySelector(".stage").style.display = "none";
    welcome.classList.add("show");
    welcomeText.textContent = "";

    const text = "check under your table";
    let i = 0;
    const interval = setInterval(() => {
      welcomeText.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80);
  }

  // shake animation for wrong input
  function shake(el) {
    el.style.animation = "shake 0.3s";
    el.addEventListener("animationend", () => {
      el.style.animation = "";
    }, { once: true });
  }

  // check password attempt
  function attempt() {
    if (input.value.trim() === PASSWORD) {
      err.textContent = "";
      showWelcome();
    } else {
      err.textContent = "Wrong password. Try again.";
      shake(input);
      input.select();
    }
  }

  // button click
  btn.addEventListener("click", attempt);

  // enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
  });

  // autofocus
  input.focus();
});
