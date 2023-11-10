document.getElementById("login-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "nyoom" && password === "moon") {
    window.location.href = "./html/main-page.html";
  } else {
    errorMessage.textContent = "Incorrect username or password";
    errorMessage.style.display = "block";
  }
});
