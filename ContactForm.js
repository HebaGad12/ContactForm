document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !phone || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  if (!/^\d{6,15}$/.test(phone)) {
    status.textContent = "Please enter a valid phone number.";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Message sent successfully!";
  status.style.color = "#5c4d00";

  document.getElementById("contactForm").reset();
});
