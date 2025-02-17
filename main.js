// Sample product data (in a real application, this would come from an API)
import AuthService from './services/auth-service.js';

export const products = [
    // Electronics
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "headphone.avif",
        category: "Electronics",
        rating: 4.5,
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "4K Smart TV",
        price: 40000,
        image: "4k smart tv.webp",
        category: "Electronics",
        rating: 4.8,
        description: "55-inch 4K Ultra HD Smart LED TV"
    },
    {
        id: 3,
        name: "VIVO Smartphone",
        price: 899.99,
        image: "smartphone.jpeg",
        category: "Electronics",
        rating: 4.7,
        description: "Latest model smartphone with advanced camera system"
    },
    {
        id: 7,
        name: "Gaming Monitor",
        price: 39.99,
        image: "gaming mn.jpg",
        category: "Electronics",
        rating: 4.6,
        description: "27-inch Gaming Monitor with 144Hz refresh rate"
    },
    // Fashion
    {
        id: 4,
        name: "Leather Jacket",
        price: 199.99,
        image: "lather jacket.webp",
        category: "Fashion",
        rating: 4.3,
        description: "Classic leather jacket for men"
    },
    {
        id: 5,
        name: "Summer Dress",
        price: 59.99,
        image: "sumer dr.webp",
        category: "Fashion",
        rating: 4.4,
        description: "Floral print summer dress"
    },
    {
        id: 9,
        name: "Fashion Collection",
        price: 79.99,
        image: "shirt pen.jpg",
        category: "Fashion",
        rating: 4.4,
        description: "Latest Fashion Collection"
    },
    // Home & Decor
    {
        id: 6,
        name: "Table Lamp",
        price: 49.99,
        image: "table lam.jpg",
        category: "Home & Decor",
        rating: 4.2,
        description: "Modern LED table lamp"
    },
    // Books
    {
        id: 8,
        name: "Best Seller Book",
        price: 89.99,
        image: "richdad book.jpeg",
        category: "Books",
        rating: 4.7,
        description: "International Best Seller Book"
    },
    // Beauty & Personal Care
    {
        id: 15,
        name: "Luxury Skincare Set",
        price: 2999.99,
        image: "skincare-set.jpg",
        category: "Beauty & Personal Care",
        rating: 4.7,
        description: "Complete skincare routine with cleanser, toner, serum, and moisturizer"
    },
    {
        id: 16,
        name: "Professional Hair Dryer",
        price: 1499.99,
        image: "hairdryer.jpg",
        category: "Beauty & Personal Care",
        rating: 4.6,
        description: "Salon-grade hair dryer with multiple heat and speed settings"
    },
    {
        id: 17,
        name: "Organic Makeup Kit",
        price: 1999.99,
        image: "makeup-kit.jpg",
        category: "Beauty & Personal Care",
        rating: 4.8,
        description: "Complete makeup set with natural and organic ingredients"
    },
    {
        id: 18,
        name: "Electric Facial Cleansing Brush",
        price: 899.99,
        image: "facial-brush.jpg",
        category: "Beauty & Personal Care",
        rating: 4.5,
        description: "Deep cleansing facial brush with multiple attachments"
    },
    // Toys & Games
    {
        id: 19,
        name: "LEGO City Police Station",
        price: 3499.99,
        image: "lego-police.jpg",
        category: "Toys & Games",
        rating: 4.9,
        description: "Build your own police station with vehicles and minifigures"
    },
    {
        id: 20,
        name: "Remote Control Car",
        price: 1299.99,
        image: "rc-car.jpg",
        category: "Toys & Games",
        rating: 4.6,
        description: "High-speed RC car with rechargeable battery"
    },
    {
        id: 21,
        name: "Educational Science Kit",
        price: 999.99,
        image: "science-kit.jpg",
        category: "Toys & Games",
        rating: 4.7,
        description: "Fun experiments for kids to learn about science"
    },
    {
        id: 22,
        name: "Board Game Collection",
        price: 1499.99,
        image: "board-games.jpg",
        category: "Toys & Games",
        rating: 4.8,
        description: "Set of classic family board games"
    },
    // Jewelry & Watches
    {
        id: 23,
        name: "Diamond Engagement Ring",
        price: 49999.99,
        image: "diamond-ring.jpg",
        category: "Jewelry & Watches",
        rating: 4.9,
        description: "1 carat diamond ring in 18k white gold setting"
    },
    {
        id: 24,
        name: "Luxury Watch",
        price: 15999.99,
        image: "luxury-watch.jpg",
        category: "Jewelry & Watches",
        rating: 4.8,
        description: "Automatic movement watch with leather strap"
    },
    {
        id: 25,
        name: "Pearl Necklace Set",
        price: 7999.99,
        image: "pearl-set.jpg",
        category: "Jewelry & Watches",
        rating: 4.7,
        description: "Freshwater pearl necklace and earring set"
    },
    {
        id: 26,
        name: "Gold Bracelet",
        price: 12999.99,
        image: "gold-bracelet.jpg",
        category: "Jewelry & Watches",
        rating: 4.6,
        description: "22k gold bracelet with intricate design"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const featuredProductsContainer = document.getElementById('featuredProducts');
let currentCategory = 'all';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    initializeCategories();
    initializeSearch();
    initializeCart();

    updateCartCount();
    updateWishlistCount();
    AuthService.initializeAuth();

    // Carousel Configuration
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000,
        wrap: true,
        touch: true
    });

    // Add animation to carousel items when they slide
    document.getElementById('heroCarousel').addEventListener('slide.bs.carousel', function (e) {
        const activeSlide = e.relatedTarget;
        const caption = activeSlide.querySelector('.carousel-caption');
        
        // Reset animations
        caption.querySelectorAll('.animate__animated').forEach(element => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 50);
        });
    });
});

// Initialize Categories
function initializeCategories() {
    const categories = ['all', ...new Set(products.map(product => product.category))];
    const categoryContainer = document.querySelector('.category-buttons');
    
    if (categoryContainer) {
        categoryContainer.innerHTML = categories.map(category => `
            <button class="btn ${category === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2"
                    onclick="filterByCategory('${category}')">
                ${category === 'all' ? 'All Products' : category}
            </button>
        `).join('');
    }

    // Add click handlers to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            if (category) {
                filterByCategory(category);
                // Scroll to products section
                document.getElementById('featuredProducts').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Filter products by category
function filterByCategory(category) {
    currentCategory = category;
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    updateProductDisplay(filteredProducts);
    
    // Update active button state
    document.querySelectorAll('.category-buttons .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
        if (btn.textContent.trim() === (category === 'all' ? 'All Products' : category)) {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');
        }
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    updateProductDisplay(products);
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

// Update products display
function updateProductDisplay(productsToShow) {
    if (!featuredProductsContainer) return;

    const productHTML = productsToShow.map(product => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="product-card card h-100">
                <a href="product-details.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product-details.html?id=${product.id}" class="product-title-link">
                        <h5 class="card-title">${product.name}</h5>
                    </a>
                    <p class="card-text text-muted mb-1">${product.category}</p>
                    <div class="rating mb-2">${generateStarRating(product.rating)}</div>
                    <p class="card-text flex-grow-1">${product.description}</p>
                    <div class="product-price mb-2">${formatNepaliPrice(product.price)}</div>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="btn btn-outline-danger" onclick="addToWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    featuredProductsContainer.innerHTML = productHTML;
}

// Generate star rating
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

// Search functionality
function initializeSearch() {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        // Update products display
        updateProductDisplay(filteredProducts);
    });
}

// Cart functionality
function initializeCart() {
    // Initialize cart from localStorage if exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
            showNotification(`Increased quantity of ${product.name} in cart!`, 'info');
        } else {
            cart.push({ ...product, quantity: 1 });
            showNotification(`${product.name} added to cart!`, 'success');
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        const badge = cartIcon.querySelector('.badge') || document.createElement('span');
        badge.className = 'badge';
        badge.textContent = cart.length;
        if (!cartIcon.querySelector('.badge')) {
            cartIcon.appendChild(badge);
        }
        badge.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

// Wishlist functionality
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        if (!wishlist.some(item => item.id === productId)) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            showNotification(`${product.name} added to wishlist!`, 'success');
            updateWishlistCount();
            
            setTimeout(() => {
                window.location.href = 'wishlist.html';
            }, 1500);
        } else {
            showNotification(`${product.name} is already in your wishlist!`, 'info');
        }
    }
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistIcon = document.querySelector('.fa-heart');
    if (wishlistIcon) {
        const badge = wishlistIcon.querySelector('.badge') || document.createElement('span');
        badge.className = 'badge';
        badge.textContent = wishlist.length;
        if (!wishlistIcon.querySelector('.badge')) {
            wishlistIcon.appendChild(badge);
        }
        badge.style.display = wishlist.length > 0 ? 'block' : 'none';
    }
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    const icon = document.createElement('i');
    switch(type) {
        case 'success':
            icon.className = 'fas fa-check-circle';
            break;
        case 'info':
            icon.className = 'fas fa-info-circle';
            break;
        case 'warning':
            icon.className = 'fas fa-exclamation-circle';
            break;
    }
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    
    notification.appendChild(icon);
    notification.appendChild(messageSpan);
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Newsletter subscription
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // In a real application, this would make an API call
    if (email) {
        showNotification('Thank you for subscribing!');
        e.target.reset();
    }
});
