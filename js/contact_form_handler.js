document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        let errors = '';
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!name || !email || !message) {
            errors += 'Error: All fields are required.\n';
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            errors += 'Error: Invalid email address.\n';
        }

        if (errors) {
            alert(errors); // Display errors in a user-friendly way
            return;
        }

        // Sanitize input
        name = DOMPurify.sanitize(name);
        email = DOMPurify.sanitize(email);
        message = DOMPurify.sanitize(message);

        // Prepare form data for sending
        let formData = {
            name: name,
            email: email,
            message: message
        };

        // Send form data via Fetch API
        fetch('contact_form_handler.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you! Your message has been sent successfully.');
                window.location.href = 'index.html'; // Redirect to thank-you page
            } else {
                alert('Error: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
