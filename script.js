function checkPassword() {
  const input = document.getElementById("password").value;
  const notification = document.getElementById("notification");
  const loginBox = document.getElementById("login-box");
  const complete = document.getElementById("complete");

  if (input === "5sandor") {
    notification.style.display = "block";
    setTimeout(() => {
      loginBox.style.display = "none";
      complete.style.display = "block";
    }, 1000);
  } else {
    alert("❌ Incorrect Password. Try again.");
  }
}

// Allow pressing Enter instead of clicking button
document.getElementById("password").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
