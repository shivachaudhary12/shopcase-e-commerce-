import AuthService from './services/auth-service.js';

const initRegisterForm = () => {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    registerForm.onsubmit = async (e) => {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const address = document.getElementById('address').value.trim();
        const terms = document.getElementById('terms').checked;

        // Validate form
        if (!validateForm(password, confirmPassword)) {
            return;
        }

        // Create user data object
        const userData = {
            firstName,
            lastName,
            email,
            phone,
            address,
            createdAt: new Date().toISOString()
        };

        // Register and login the user
        if (AuthService.register(userData)) {
            // Auto login after registration
            AuthService.login(userData);
            // Redirect to home page
            location.replace('index.html');
        }
    };
};

function validateForm(password, confirmPassword) {
    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('Password must contain at least 8 characters, including uppercase, lowercase, and numbers');
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return false;
    }

    return true;
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger alert-dismissible fade show mt-3';
    errorDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById('registerForm');
    form.insertAdjacentElement('beforebegin', errorDiv);

    // Remove error after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Initialize immediately without waiting for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRegisterForm);
} else {
    initRegisterForm();
}
