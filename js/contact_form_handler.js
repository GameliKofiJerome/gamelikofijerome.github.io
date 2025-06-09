document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = DOMPurify.sanitize(document.getElementById("name").value.trim());
    let email = DOMPurify.sanitize(document.getElementById("email").value.trim());
    let message = DOMPurify.sanitize(document.getElementById("message").value.trim());

    let errors = [];

    if (!name || !email || !message) {
      errors.push("All fields are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Invalid email format.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const formData = { name, email, message };

    fetch("php/contact_form_handler.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Thank you! Your message has been sent.");
        window.location.href = "thank_you.html";
      } else {
        alert("Error: " + data.error);
      }
    })
    .catch(error => {
      console.error("Fetch Error:", error);
      alert("An error occurred. Please try again later.");
    });
  });
});