// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
    updateCartSummary();
});

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x mb-3 text-muted"></i>
                <h3>Your cart is empty</h3>
                <p>Browse our products and add items to your cart</p>
                <a href="index.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        return;
    }

    const itemsHTML = cartItems.map((item, index) => `
        <div class="cart-item card mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
                    </div>
                    <div class="col-md-4">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text text-muted">${item.category}</p>
                    </div>
                    <div class="col-md-2">
                        <div class="quantity-control">
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="mx-2">${item.quantity || 1}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p class="card-text">${formatNepaliPrice((item.price * (item.quantity || 1)))}</p>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    cartContainer.innerHTML = itemsHTML;
}

// Format price in Nepali Rupees
function formatNepaliPrice(price) {
    // Convert number to string with 2 decimal places
    const priceStr = Number(price).toFixed(2);
    // Split into whole and decimal parts
    const [whole, decimal] = priceStr.split('.');
    // Add commas for thousands in Nepali format (2,00,000)
    const wholePart = whole.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))*(\d{3})?$)/g, ',');
    // Return formatted price with Rs symbol
    return `Rs ${wholePart}${decimal ? '.' + decimal : ''}`;
}

function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = (cart[index].quantity || 1) + change;
    
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartSummary();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartSummary();
    updateCartCount(cart.length);
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const shipping = subtotal > 0 ? 10 : 0; // Free shipping over certain amount could be implemented
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = formatNepaliPrice(subtotal);
    document.getElementById('shipping').textContent = formatNepaliPrice(shipping);
    document.getElementById('tax').textContent = formatNepaliPrice(tax);
    document.getElementById('total').textContent = formatNepaliPrice(total);
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.isLoggedIn) {
        showNotification('Please login to proceed with checkout');
        window.location.href = 'account.html';
        return;
    }

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
        cartCountElement.style.display = count > 0 ? 'block' : 'none';
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-info position-fixed top-0 end-0 m-3';
    notification.style.zIndex = '1000';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
