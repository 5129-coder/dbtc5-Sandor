function checkPassword() {
  const input = document.getElementById("password").value;
  const loginBox = document.getElementById("login-box");
  const welcome = document.getElementById("welcome");
  const errorMessage = document.getElementById("error-message");

  if (input === "fivesandor") {
    // Hide login with fade out
    loginBox.style.display = "none";
    // Show welcome text with fade in
    welcome.style.display = "flex";
    welcome.style.justifyContent = "center";
    welcome.style.alignItems = "center";
    welcome.style.height = "100vh";
  } else {
    errorMessage.style.display = "block";
  }
}

// Allow pressing Enter instead of clicking button
document.getElementById("password").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
