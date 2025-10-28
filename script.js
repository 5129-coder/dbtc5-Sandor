const correctPasswords = [
  "ACR333",
  "admin",
  "FIvesanDOR",
  "OpEn_S3samee",
  "pasSword",
  "CHAM.OF.SECR~"
];

const input = document.getElementById("pwd");
const button = document.getElementById("submitBtn");
const error = document.getElementById("err");
const welcome = document.getElementById("welcome");
const welcomeText = document.getElementById("welcomeText");
const clickSound = document.getElementById("clickSound");
const stage = document.querySelector(".stage");

button.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const value = input.value.trim();
  if (correctPasswords.includes(value)) {
    document.querySelector(".panel").style.display = "none";
    error.textContent = "";
    welcomeText.textContent = "access granted to the chamber of secrets, kindly show this text to the agent";
    welcome.classList.add("show");
  } else {
    error.textContent = "Incorrect password. Try again.";
    stage.classList.add("shake");
    setTimeout(() => stage.classList.remove("shake"), 300);
  }
});
