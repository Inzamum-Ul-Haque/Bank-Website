document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;

  // this is not suggested, verify shouldn't be in the client side
  if (email === "sontan@bap.com" && password === "secret") {
    window.location = "bank.html";
  } else {
    alert("You are an invalid user");
  }
});
