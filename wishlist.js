// Wishlist functionality
document.addEventListener('DOMContentLoaded', function() {
    loadWishlistItems();
});

function loadWishlistItems() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-heart fa-3x mb-3 text-muted"></i>
                <h3>Your wishlist is empty</h3>
                <p>Save items you like to your wishlist</p>
                <a href="index.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        return;
    }

    const itemsHTML = wishlist.map((item, index) => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card product-card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="product-title">${item.name}</h5>
                    <div class="product-rating">
                        ${generateStarRating(item.rating)}
                    </div>
                    <p class="product-price">$${item.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary btn-sm" onclick="moveToCart(${index})">
                            Add to Cart
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="removeFromWishlist(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    wishlistContainer.innerHTML = itemsHTML;
}

function removeFromWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    loadWishlistItems();
    updateWishlistCount(wishlist.length);
    showNotification('Item removed from wishlist');
}

function moveToCart(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const item = { ...wishlist[index], quantity: 1 };
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
        cart.push(item);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Remove from wishlist
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update display
    loadWishlistItems();
    updateWishlistCount(wishlist.length);
    updateCartCount(cart.length);
    showNotification('Item moved to cart');
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-warning"></i>';
    }

    return starsHTML;
}

// Add this function to update wishlist count in the header
function updateWishlistCount(count) {
    const wishlistCountElement = document.querySelector('.wishlist-count');
    if (wishlistCountElement) {
        wishlistCountElement.textContent = count;
        wishlistCountElement.style.display = count > 0 ? 'block' : 'none';
    }
}

// Add this function to show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-info position-fixed top-0 end-0 m-3';
    notification.style.zIndex = '1000';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
