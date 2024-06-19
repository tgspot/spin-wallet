document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the DOM is fully loaded

    // Example: Toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Example: Smooth scroll to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Example: Handle form submission
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Example: Validate form inputs
        const emailInput = document.querySelector('#email');
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            // Example: Show error message
            showError('Please enter a valid email address.');
            return;
        }

        // Example: Submit form data
        const formData = new FormData(this);

        fetch('https://api.example.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Example: Handle successful form submission
            console.log('Form submission successful:', data);
            showSuccess('Form submitted successfully!');
        })
        .catch(error => {
            // Example: Handle errors
            console.error('Error submitting form:', error);
            showError('Failed to submit form. Please try again.');
        });
    });

    // Example: Utility function for email validation
    function isValidEmail(email) {
        // Implement your email validation logic
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    // Example: Utility function to show error message
    function showError(message) {
        const errorElement = document.querySelector('.error-message');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Example: Utility function to show success message
    function showSuccess(message) {
        const successElement = document.querySelector('.success-message');
        successElement.textContent = message;
        successElement.style.display = 'block';

        // Hide success message after 3 seconds
        setTimeout(function() {
            successElement.style.display = 'none';
        }, 3000);
    }
});
