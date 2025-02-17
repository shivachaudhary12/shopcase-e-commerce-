class AuthService {
    static isLoggedIn() {
        try {
            const authData = localStorage.getItem('authData');
            return authData ? JSON.parse(authData).isLoggedIn : false;
        } catch {
            return false;
        }
    }

    static register(userData) {
        try {
            // Get existing users or initialize empty array
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if email already exists
            if (users.some(user => user.email === userData.email)) {
                throw new Error('Email already registered');
            }

            // Hash the password before storing
            const hashedPassword = this.hashPassword(userData.password);
            const userToStore = {
                ...userData,
                password: hashedPassword
            };

            // Add new user
            users.push(userToStore);
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            return false;
        }
    }

    static login(userData) {
        try {
            // Get users from storage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === userData.email);

            if (!user) {
                throw new Error('Invalid email or password');
            }

            // Verify password
            const hashedPassword = this.hashPassword(userData.password);
            if (hashedPassword !== user.password) {
                throw new Error('Invalid email or password');
            }

            // Set auth data
            const authData = {
                isLoggedIn: true,
                user: {
                    email: user.email,
                    name: user.name
                },
                loginTime: new Date().getTime()
            };
            localStorage.setItem('authData', JSON.stringify(authData));
            
            // Remember user if requested
            if (userData.rememberMe) {
                localStorage.setItem('rememberedUser', JSON.stringify({ email: user.email }));
            } else {
                localStorage.removeItem('rememberedUser');
            }

            this.updateAuthUI();
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    static logout() {
        try {
            // Clear auth data but keep users and remembered user
            const users = localStorage.getItem('users');
            const rememberedUser = localStorage.getItem('rememberedUser');
            localStorage.clear();
            if (users) localStorage.setItem('users', users);
            if (rememberedUser) localStorage.setItem('rememberedUser', rememberedUser);
            
            // Redirect immediately without waiting
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            // If error occurs, force redirect
            window.location.href = 'login.html';
        }
    }

    static getCurrentUser() {
        try {
            const authData = localStorage.getItem('authData');
            return authData ? JSON.parse(authData).user : null;
        } catch {
            return null;
        }
    }

    static hashPassword(password) {
        // Simple hash function for demo purposes
        // In production, use a proper cryptographic hash function
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    static updateAuthUI() {
        const isLoggedIn = this.isLoggedIn();
        const logoutBtn = document.getElementById('logoutBtn');
        const accountLink = document.querySelector('a[href="account.html"]');
        
        if (logoutBtn) {
            logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
            if (isLoggedIn) {
                logoutBtn.onclick = (e) => {
                    e.preventDefault();
                    this.logout();
                };
            }
        }

        if (accountLink && !isLoggedIn) {
            accountLink.href = 'login.html';
        }
    }

    static initializeAuth() {
        // Add logout event listener
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = (e) => {
                e.preventDefault();
                this.logout();
            };
        }

        // Update UI based on auth state
        this.updateAuthUI();

        // Quick check for protected routes
        const currentPage = location.pathname.split('/').pop();
        if (['account.html', 'checkout.html', 'wishlist.html'].includes(currentPage) && !this.isLoggedIn()) {
            window.location.href = 'login.html';
        }
    }

    static showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
        notification.style.zIndex = '1000';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize immediately without waiting for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AuthService.initializeAuth());
} else {
    AuthService.initializeAuth();
}

export default AuthService;
