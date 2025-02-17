import AuthService from './services/auth-service.js';

class LoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.loginButton = document.getElementById('loginButton');
        this.loginText = document.getElementById('loginText');
        this.loginSpinner = document.getElementById('loginSpinner');
        this.loginError = document.getElementById('loginError');
        this.rememberMe = document.getElementById('rememberMe');

        this.setupEventListeners();
        this.checkRememberedUser();
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.emailInput.addEventListener('input', () => this.clearErrors());
        this.passwordInput.addEventListener('input', () => this.clearErrors());
    }

    checkRememberedUser() {
        const rememberedUser = localStorage.getItem('rememberedUser');
        if (rememberedUser) {
            const user = JSON.parse(rememberedUser);
            this.emailInput.value = user.email;
            this.rememberMe.checked = true;
        }
    }

    showLoading() {
        this.loginButton.disabled = true;
        this.loginText.style.display = 'none';
        this.loginSpinner.style.display = 'inline-block';
    }

    hideLoading() {
        this.loginButton.disabled = false;
        this.loginText.style.display = 'inline-block';
        this.loginSpinner.style.display = 'none';
    }

    showError(message) {
        this.loginError.textContent = message;
        this.loginError.style.display = 'block';
    }

    clearErrors() {
        this.loginError.style.display = 'none';
    }

    validateForm() {
        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value;

        if (!email) {
            this.showError('Please enter your email address');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        if (!password) {
            this.showError('Please enter your password');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.clearErrors();

        if (!this.validateForm()) {
            return;
        }

        this.showLoading();

        try {
            const email = this.emailInput.value.trim();
            const password = this.passwordInput.value;
            const rememberMe = this.rememberMe.checked;
            
            const success = AuthService.login({ email, password, rememberMe });
            
            if (success) {
                // Redirect to previous page or home
                const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || 'index.html';
                window.location.href = redirectUrl;
            } else {
                throw new Error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            this.showError(error.message || 'An error occurred during login');
            this.hideLoading();
        }
    }
}

// Initialize the login form
const loginForm = new LoginForm();
