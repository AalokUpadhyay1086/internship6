function countChars() {
  document.getElementById("charCount").textContent =
    document.getElementById("message").value.length;
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameErr = document.getElementById("nameError");
  const emailErr = document.getElementById("emailError");
  const messageErr = document.getElementById("messageError");
  const successMsg = document.getElementById("successMessage");

  nameErr.textContent = emailErr.textContent = messageErr.textContent = successMsg.textContent = "";
  let valid = true;

  if (name === "") {
    nameErr.textContent = "Name is required.";
    valid = false;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(email)) {
    emailErr.textContent = "Enter a valid email.";
    valid = false;
  }

  if (message.length < 10) {
    messageErr.textContent = "At least 10 characters required.";
    valid = false;
  }

  const linkRegex = /(https?:\/\/|www\.)/i;
  if (linkRegex.test(message)) {
    messageErr.textContent = "Links are not allowed.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Submitted successfully! 🎉";
    confetti();
  }

  return false; // prevent actual submission
}
