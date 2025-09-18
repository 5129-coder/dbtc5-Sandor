document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "19 21 3 8 1 19 13 1 18 20 20 5 1 13";

  const input = document.getElementById("pwd");
  const btn = document.getElementById("submitBtn");
  const err = document.getElementById("err");
  const welcome = document.getElementById("welcome");
  const welcomeText = document.getElementById("welcomeText");
  const loading = document.getElementById("loading");
  const loadingVideo = document.getElementById("loadingVideo");

  const clickSound = document.getElementById("click-sound");

  function showWelcome() {
    document.querySelector(".stage").style.display = "none";
    document.querySelector(".logo").style.display = "none";

    // show loading video
    loading.classList.add("show");
    loadingVideo.currentTime = 0;
    loadingVideo.play();

    // after video ends, show welcome text
    loadingVideo.onended = () => {
      loading.classList.remove("show");
      welcome.classList.add("show");
      welcomeText.textContent = "";

      const text = "check under your table";
      let i = 0;
      const interval = setInterval(() => {
        welcomeText.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 80);
    };
  }

  function shake(el) {
    el.style.animation = "shake 0.3s";
    el.addEventListener("animationend", () => {
      el.style.animation = "";
    }, { once: true });
  }

  function attempt() {
    clickSound.currentTime = 0; // rewind
    clickSound.play(); // play click

    if (input.value.trim() === PASSWORD) {
      err.textContent = "";
      showWelcome();
    } else {
      err.textContent = "Wrong password. Try again.";
      shake(input);
      input.select();
    }
  }

  btn.addEventListener("click", attempt);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
  });

  input.focus();
});
