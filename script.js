<script>
document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "19 21 3 8 1 19 13 1 18 20 20 5 1 13"; // numeric-alphabet password
  const input = document.getElementById("pwd");       // password input
  const btn = document.getElementById("submitBtn");  // check button
  const err = document.getElementById("err");        // error message container
  const welcome = document.getElementById("welcome"); // full-screen message
  const welcomeText = document.getElementById("welcomeText");

  // function to reveal the welcome message with a typewriter effect
  function showWelcome() {
    document.querySelector(".stage").style.display = "none"; // hide the form
    welcome.classList.add("show");                            // show overlay
    welcomeText.textContent = "";                             // reset text

    let i = 0;
    const text = "check under your table";
    const interval = setInterval(() => {
      welcomeText.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80); // typewriter speed
  }

  // shake animation for wrong input
  function shake(el) {
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(0)' }
    ], { duration: 300, iterations: 1 });
  }

  // check password
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

  // press Enter to submit
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
  });

  input.focus(); // autofocus on load
});
</script>
