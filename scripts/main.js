document.addEventListener('DOMContentLoaded', function() {
    // Toggle between login and register forms
    const showRegisterForm = document.getElementById('show-register-form');
    const showLoginForm = document.getElementById('show-login-form');
    const loginFormContainer = document.querySelector('.form-container:nth-child(1)');
    const registerFormContainer = document.querySelector('.form-container:nth-child(2)');

    showRegisterForm.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    showLoginForm.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
    });

    // Handle form submission for login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Add your login logic here (e.g., API call)
    });

    // Handle form submission for register
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        // Add your register logic here (e.g., API call)
    });

    // Slot game logic
    const spinButton = document.getElementById('spin-button');
    const slots = document.querySelectorAll('.slot');
    const result = document.getElementById('result');

    spinButton.addEventListener('click', function() {
        const values = Array.from(slots).map(() => Math.floor(Math.random() * 3));
        slots.forEach((slot, index) => {
            slot.textContent = values[index];
        });

        if (values.every(val => val === values[0])) {
            result.textContent = 'You win!';
        } else {
            result.textContent = 'Try again.';
        }
    });

    // Fetch user balance and transactions
    const balanceElement = document.getElementById('balance');
    const transactionsElement = document.getElementById('transactions');

    function fetchDashboardData() {
        // Example: Fetch data from API
        fetch('https://api.example.com/dashboard', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_TOKEN_HERE'
            }
        })
        .then(response => response.json())
        .then(data => {
            balanceElement.textContent = `$${data.balance.toFixed(2)}`;
            transactionsElement.innerHTML = '';
            data.transactions.forEach(transaction => {
                const li = document.createElement('li');
                li.textContent = `${transaction.date}: $${transaction.amount.toFixed(2)}`;
                transactionsElement.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching dashboard data:', error);
        });
    }

    // Initial fetch of dashboard data
    fetchDashboardData();
});
