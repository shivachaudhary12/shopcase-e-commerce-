// Account functionality
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    loadUserProfile();
    loadOrders();
    loadAddresses();
    initializeFormListeners();
});

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        showLoginForm();
    }
}

function showLoginForm() {
    const accountContent = document.querySelector('.account-section .row');
    accountContent.innerHTML = `
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#register">Register</a>
                        </li>
                    </ul>
                    
                    <div class="tab-content mt-3">
                        <div class="tab-pane fade show active" id="login">
                            <form id="loginForm">
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" name="email" id="loginEmail" class="form-control" required>
                                    <div class="invalid-feedback">Please enter a valid email address</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" name="password" id="loginPassword" class="form-control" required minlength="6">
                                    <div class="invalid-feedback">Password must be at least 6 characters long</div>
                                </div>
                                <div id="loginError" class="alert alert-danger d-none mb-3"></div>
                                <button type="submit" class="btn btn-primary w-100">Login</button>
                            </form>
                        </div>
                        
                        <div class="tab-pane fade" id="register">
                            <form id="registerForm">
                                <div class="mb-3">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" required>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    initializeAuthForms();
}

function initializeAuthForms() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error states
            this.classList.remove('was-validated');
            document.getElementById('loginError').classList.add('d-none');
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            // Validate form
            if (!email || !password) {
                this.classList.add('was-validated');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('loginError').textContent = 'Please enter a valid email address';
                document.getElementById('loginError').classList.remove('d-none');
                return;
            }
            
            // Password validation
            if (password.length < 6) {
                document.getElementById('loginError').textContent = 'Password must be at least 6 characters long';
                document.getElementById('loginError').classList.remove('d-none');
                return;
            }
            
            // In a real application, this would make an API call
            // For demo purposes, we'll check against hardcoded credentials
            try {
                showNotification('Logging in...', 'info');
                
                // Simulated credential check
                if (email === 'admin@example.com' && password === 'admin123') {
                    setTimeout(() => {
                        const user = {
                            id: 1,
                            email: email,
                            name: 'Admin User',
                            isLoggedIn: true
                        };
                        
                        localStorage.setItem('user', JSON.stringify(user));
                        showNotification('Login successful!', 'success');
                        window.location.reload();
                    }, 1000);
                } else {
                    document.getElementById('loginError').textContent = 'Login failed. Please check your credentials.';
                    document.getElementById('loginError').classList.remove('d-none');
                    showNotification('Login failed', 'error');
                }
            } catch (error) {
                document.getElementById('loginError').textContent = 'An error occurred during login. Please try again.';
                document.getElementById('loginError').classList.remove('d-none');
            }
        });
    }

    document.getElementById('registerForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
        
        if (!name || !email || !password || !confirmPassword) {
            showNotification('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match');
            return;
        }
        
        // In a real application, this would make an API call
        // For demo purposes, we'll simulate a successful registration
        const user = {
            id: 1,
            email: email,
            name: name,
            isLoggedIn: true
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        showNotification('Registration successful!');
        window.location.reload();
    });
}

function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;

    // Load user data into profile form
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        const [firstName, ...lastNameParts] = user.name.split(' ');
        document.getElementById('firstName').value = firstName;
        document.getElementById('lastName').value = lastNameParts.join(' ');
        document.getElementById('email').value = user.email;
    }
}

function loadOrders() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;

    // In a real application, this would fetch orders from an API
    // For demo purposes, we'll show sample orders
    ordersList.innerHTML = `
        <div class="alert alert-info">
            No orders found. Start shopping to see your orders here!
        </div>
    `;
}

function loadAddresses() {
    const addressesList = document.getElementById('addressesList');
    if (!addressesList) return;

    const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    
    if (addresses.length === 0) {
        addressesList.innerHTML = `
            <div class="alert alert-info">
                No addresses saved. Add a new address to get started!
            </div>
        `;
        return;
    }

    const addressesHTML = addresses.map((address, index) => `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${address.type}</h5>
                <p class="card-text">
                    ${address.street}<br>
                    ${address.city}, ${address.state} ${address.zip}<br>
                    ${address.country}
                </p>
                <button class="btn btn-sm btn-danger" onclick="deleteAddress(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');

    addressesList.innerHTML = addressesHTML;
}

function addNewAddress() {
    // Show address form modal
    const modal = `
        <div class="modal fade" id="addressModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Address</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addressForm">
                            <div class="mb-3">
                                <label class="form-label">Address Type</label>
                                <select class="form-select" required>
                                    <option value="Home">Home</option>
                                    <option value="Work">Work</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Street Address</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control" required>
                                </div>
                                <div class="col">
                                    <label class="form-label">State</label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">ZIP Code</label>
                                    <input type="text" class="form-control" required>
                                </div>
                                <div class="col">
                                    <label class="form-label">Country</label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveAddress()">Save Address</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modal);
    
    // Show modal
    const addressModal = new bootstrap.Modal(document.getElementById('addressModal'));
    addressModal.show();
}

function saveAddress() {
    const form = document.getElementById('addressForm');
    const address = {
        type: form.querySelector('select').value,
        street: form.querySelectorAll('input')[0].value,
        city: form.querySelectorAll('input')[1].value,
        state: form.querySelectorAll('input')[2].value,
        zip: form.querySelectorAll('input')[3].value,
        country: form.querySelectorAll('input')[4].value
    };

    const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addresses.push(address);
    localStorage.setItem('addresses', JSON.stringify(addresses));

    // Close modal and reload addresses
    bootstrap.Modal.getInstance(document.getElementById('addressModal')).hide();
    document.getElementById('addressModal').remove();
    loadAddresses();
    showNotification('Address saved successfully!');
}

function deleteAddress(index) {
    const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addresses.splice(index, 1);
    localStorage.setItem('addresses', JSON.stringify(addresses));
    loadAddresses();
    showNotification('Address deleted successfully!');
}

function initializeFormListeners() {
    // Profile form submission
    document.getElementById('profileForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        user.name = `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`;
        user.email = document.getElementById('email').value;
        user.phone = document.getElementById('phone').value;
        
        localStorage.setItem('user', JSON.stringify(user));
        showNotification('Profile updated successfully!');
    });

    // Settings form submission
    document.getElementById('settingsForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Settings saved successfully!');
    });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
    showNotification('Logged out successfully');
    window.location.href = 'index.html';
}
