document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name containing only letters and spaces.");
        return;
    }

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        return;
    }


    // Display success message
    var successMessage = document.getElementById("success-message");
    successMessage.innerHTML = `<br>
    Thank you, ${name}! Your message has been sent.`;

    // Reset form fields
    document.getElementById("contact-form").reset();

    // Clear success message after 5 seconds
    setTimeout(function() {
        successMessage.textContent = "";
    }, 5000);
});
