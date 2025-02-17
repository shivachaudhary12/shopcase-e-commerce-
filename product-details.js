// Extended product data with specifications and features
const productSpecifications = {
    1: { // Wireless Headphones
        dimensions: "18 x 15 x 7.7 mm",
        weight: "280g",
        batteryLife: "20 hours",
        chargingTime: "2 hours",
        connectivity: "Bluetooth 5.0",
        features: [
            "Active Noise Cancellation with up to 35dB reduction",
            "Touch Controls for volume and track control",
            "Voice Assistant Support (Siri, Google Assistant)",
            "Foldable Design for easy portability",
            "Water Resistant IPX4 rating",
            "Quick Charge: 5 minutes for 2 hours playback",
            "Multipoint connection - connect to two devices"
        ],
        specifications: {
            "Battery Capacity": "1000mAh",
            "Driver Size": "40mm Dynamic",
            "Frequency Response": "20Hz - 20kHz",
            "Impedance": "32 Ohm",
            "Bluetooth Version": "5.0",
            "Wireless Range": "10m",
            "Audio Codec": "SBC, AAC, aptX",
            "Microphone": "Dual beamforming mics"
        }
    },
    2: { // 4K Smart TV
        dimensions: "1229 x 708 x 88 mm",
        weight: "15.6 kg",
        displayType: "LED",
        resolution: "3840 x 2160",
        features: [
            "4K Ultra HD Resolution",
            "HDR10+ Support",
            "Smart TV with Built-in WiFi",
            "Voice Control Compatible",
            "Multiple HDMI and USB Ports",
            "Gaming Mode with Low Latency",
            "Screen Mirroring Support",
            "Energy Efficient Design"
        ],
        specifications: {
            "Screen Size": "55 inches",
            "Resolution": "4K Ultra HD (3840 x 2160)",
            "Refresh Rate": "120Hz",
            "HDR": "HDR10+, HLG",
            "Smart Platform": "Android TV 11.0",
            "Audio Output": "20W (10W x 2)",
            "HDMI Ports": "4 (HDMI 2.1)",
            "USB Ports": "3 (USB 3.0)",
            "WiFi": "Dual Band 2.4G/5G"
        }
    },
    3: { // Smartphone
        dimensions: "146.7 x 71.5 x 7.4 mm",
        weight: "174g",
        displayType: "AMOLED",
        batteryCapacity: "4500mAh",
        features: [
            "Triple Camera System with AI Enhancement",
            "5G Connectivity Support",
            "In-Display Fingerprint Scanner",
            "Fast Charging 65W Support",
            "Wireless Charging 15W",
            "120Hz Refresh Rate Display",
            "Gorilla Glass Protection",
            "Dual SIM Support"
        ],
        specifications: {
            "Processor": "Snapdragon 8 Gen 1",
            "RAM": "8GB LPDDR5",
            "Storage": "256GB UFS 3.1",
            "Display": "6.5\" AMOLED 120Hz",
            "Main Camera": "50MP + 12MP + 8MP",
            "Front Camera": "32MP",
            "Battery": "4500mAh",
            "OS": "Android 13",
            "Water Resistance": "IP68"
        }
    },
    4: { // Leather Jacket
        dimensions: "Available in S, M, L, XL, XXL",
        weight: "1.2kg",
        material: "Genuine Leather",
        features: [
            "100% Genuine Leather Construction",
            "YKK Zippers Throughout",
            "Quilted Interior Lining",
            "Multiple Interior Pockets",
            "Adjustable Waist Straps",
            "Removable Thermal Liner",
            "Ventilation Zippers",
            "Reinforced Stitching"
        ],
        specifications: {
            "Material": "Premium Cowhide Leather",
            "Lining": "100% Polyester",
            "Closure": "YKK Metal Zipper",
            "Pockets": "6 (4 outer, 2 inner)",
            "Care": "Professional Clean Only",
            "Season": "All Season",
            "Style": "Classic Motorcycle",
            "Color": "Vintage Brown"
        }
    },
    5: { // Summer Dress
        dimensions: "Available in XS to XL",
        weight: "200g",
        material: "95% Cotton, 5% Elastane",
        features: [
            "Breathable Cotton Blend Fabric",
            "Adjustable Shoulder Straps",
            "Hidden Side Pockets",
            "Elastic Waistband",
            "Machine Washable",
            "UV Protection UPF 30+",
            "Wrinkle-Resistant Material",
            "Eco-Friendly Dyes Used"
        ],
        specifications: {
            "Material": "Cotton Blend",
            "Pattern": "Floral Print",
            "Length": "Midi Length",
            "Closure": "Side Zipper",
            "Care": "Machine Wash Cold",
            "Season": "Spring/Summer",
            "Style": "A-Line Dress",
            "Occasions": "Casual, Beach, Party"
        }
    },
    6: { // Table Lamp
        dimensions: "25 x 25 x 45 cm",
        weight: "1.1kg",
        material: "Metal, Glass",
        features: [
            "Touch-Sensitive Controls",
            "3 Brightness Levels",
            "Color Temperature Adjustment",
            "USB Charging Port",
            "Memory Function",
            "Energy Efficient LED",
            "360° Adjustable Head",
            "Anti-Glare Design"
        ],
        specifications: {
            "Bulb Type": "LED Integrated",
            "Wattage": "12W",
            "Lumens": "800lm",
            "Color Temperature": "2700K-6500K",
            "Power Source": "AC 100-240V",
            "USB Port": "5V/2.1A Output",
            "Lifespan": "50,000 hours",
            "Material": "Aluminum + Glass"
        }
    },
    7: { // Gaming Monitor
        dimensions: "61.1 x 36.5 x 6.1 cm",
        weight: "4.8kg",
        displayType: "IPS",
        features: [
            "144Hz Refresh Rate",
            "1ms Response Time",
            "AMD FreeSync Premium",
            "HDR 400 Support",
            "Height Adjustable Stand",
            "Blue Light Filter",
            "Multiple Gaming Modes",
            "Flicker-Free Technology"
        ],
        specifications: {
            "Screen Size": "27 inches",
            "Resolution": "2560 x 1440 (QHD)",
            "Panel Type": "IPS",
            "Refresh Rate": "144Hz",
            "Response Time": "1ms GtG",
            "Ports": "HDMI 2.0 x2, DP 1.4",
            "Speakers": "2x 2W",
            "VESA Mount": "100x100mm"
        }
    },
    8: { // Best Seller Book
        dimensions: "15.2 x 22.9 cm",
        weight: "380g",
        material: "Premium Paper",
        features: [
            "International Best Seller",
            "Award-Winning Author",
            "Includes Bonus Chapter",
            "High-Quality Paper",
            "Available in Multiple Formats",
            "Eco-Friendly Printing",
            "Includes Discussion Guide",
            "Collector's Edition"
        ],
        specifications: {
            "Format": "Hardcover",
            "Pages": "384",
            "Language": "English",
            "Publisher": "Premium Press",
            "Edition": "First Edition",
            "ISBN": "978-0-123456-78-9",
            "Paper Quality": "90 GSM",
            "Print Type": "Offset Print"
        }
    },
    9: { // Fashion Collection
        dimensions: "Various Sizes",
        weight: "Varies by Item",
        material: "Mixed Materials",
        features: [
            "Premium Quality Fabrics",
            "Trendy Seasonal Designs",
            "Sustainable Materials Used",
            "Exclusive Patterns",
            "Comfortable Fit",
            "Easy Care Instructions",
            "Mix and Match Options",
            "Limited Edition Pieces"
        ],
        specifications: {
            "Materials": "Cotton, Silk, Linen",
            "Sizes Available": "XS to XXL",
            "Care": "Various Methods",
            "Collection": "Summer 2025",
            "Style": "Contemporary",
            "Origin": "Ethical Manufacturing",
            "Sustainability": "Eco-Certified",
            "Packaging": "Recyclable"
        }
    }
};

// Sample review data with more realistic reviews
const productReviews = {
    1: [
        {
            rating: 5,
            user: "John D.",
            date: "2024-01-15",
            comment: "Excellent sound quality and comfortable to wear for long periods. The noise cancellation is impressive!"
        },
        {
            rating: 4,
            user: "Sarah M.",
            date: "2024-01-10",
            comment: "Great battery life and the quick charge feature is very handy. Could use better touch controls."
        },
        {
            rating: 5,
            user: "Mike R.",
            date: "2024-01-05",
            comment: "Best headphones I've owned. The sound quality is amazing and they're very comfortable."
        }
    ],
    2: [
        {
            rating: 5,
            user: "David L.",
            date: "2024-01-18",
            comment: "Picture quality is stunning! The 4K resolution makes everything look incredibly detailed."
        },
        {
            rating: 4,
            user: "Emily W.",
            date: "2024-01-12",
            comment: "Smart features work great. Android TV interface is smooth, but could use more app options."
        },
        {
            rating: 5,
            user: "Robert K.",
            date: "2024-01-08",
            comment: "Gaming on this TV is amazing. The low latency mode makes a huge difference!"
        }
    ],
    3: [
        {
            rating: 5,
            user: "Lisa M.",
            date: "2024-01-20",
            comment: "Camera quality exceeds expectations. The night mode photos are incredible!"
        },
        {
            rating: 5,
            user: "James P.",
            date: "2024-01-16",
            comment: "Lightning-fast performance and the 120Hz display is buttery smooth."
        },
        {
            rating: 4,
            user: "Anna S.",
            date: "2024-01-11",
            comment: "Great phone overall. Battery life is excellent, but the size is a bit large for my hands."
        }
    ],
    4: [
        {
            rating: 5,
            user: "Tom H.",
            date: "2024-01-19",
            comment: "Premium quality leather and excellent craftsmanship. Worth every penny!"
        },
        {
            rating: 4,
            user: "Rachel B.",
            date: "2024-01-14",
            comment: "Beautiful jacket, runs slightly large. Consider sizing down."
        },
        {
            rating: 5,
            user: "Mark D.",
            date: "2024-01-09",
            comment: "Perfect for both casual and semi-formal occasions. Very versatile!"
        }
    ],
    5: [
        {
            rating: 5,
            user: "Sophie L.",
            date: "2024-01-17",
            comment: "Perfect summer dress! The fabric is light and breathable."
        },
        {
            rating: 4,
            user: "Emma T.",
            date: "2024-01-13",
            comment: "Love the pockets! Pattern is beautiful but slightly see-through in bright sunlight."
        },
        {
            rating: 5,
            user: "Nina R.",
            date: "2024-01-07",
            comment: "Fits perfectly and the material quality is excellent. Ordering another color!"
        }
    ],
    6: [
        {
            rating: 5,
            user: "Chris M.",
            date: "2024-01-16",
            comment: "Perfect desk lamp! The adjustable color temperature is great for different times of day."
        },
        {
            rating: 4,
            user: "Patricia K.",
            date: "2024-01-12",
            comment: "Love the USB charging port feature. Touch controls are a bit sensitive."
        },
        {
            rating: 5,
            user: "Daniel W.",
            date: "2024-01-08",
            comment: "Excellent build quality and the LED is very energy efficient."
        }
    ],
    7: [
        {
            rating: 5,
            user: "Alex G.",
            date: "2024-01-20",
            comment: "Amazing gaming monitor! The 144Hz refresh rate makes a huge difference in FPS games."
        },
        {
            rating: 5,
            user: "Kevin P.",
            date: "2024-01-15",
            comment: "Colors are vibrant and the response time is excellent. No ghosting at all!"
        },
        {
            rating: 4,
            user: "Maria L.",
            date: "2024-01-10",
            comment: "Great monitor overall. Built-in speakers could be better though."
        }
    ],
    8: [
        {
            rating: 5,
            user: "Jennifer R.",
            date: "2024-01-18",
            comment: "Couldn't put it down! The bonus chapter adds so much to the story."
        },
        {
            rating: 5,
            user: "Michael B.",
            date: "2024-01-14",
            comment: "Paper quality is excellent and the collector's edition is worth the extra cost."
        },
        {
            rating: 4,
            user: "Sarah T.",
            date: "2024-01-09",
            comment: "Engaging story but the font size could be slightly larger."
        }
    ],
    9: [
        {
            rating: 5,
            user: "Laura M.",
            date: "2024-01-19",
            comment: "Love the sustainable materials used. The designs are trendy yet timeless!"
        },
        {
            rating: 4,
            user: "Helen K.",
            date: "2024-01-15",
            comment: "Great quality and style. Some pieces run slightly small."
        },
        {
            rating: 5,
            user: "Paul S.",
            date: "2024-01-11",
            comment: "The mix and match options are fantastic. Very versatile collection!"
        }
    ]
};

import { products } from './main.js';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) {
        loadProductDetails(productId);
    } else {
        window.location.href = 'index.html';
    }
});

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

function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const specs = productSpecifications[productId];
    const reviews = productReviews[productId] || [];
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Load main product details with enhanced layout
    document.getElementById('productDetails').innerHTML = `
        <div class="col-md-6">
            <div class="product-image-gallery">
                <div class="main-image mb-3">
                    <img src="${product.image}" class="img-fluid rounded shadow" alt="${product.name}">
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="product-info">
                <nav aria-label="breadcrumb" class="mb-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="index.html#${product.category.toLowerCase()}">${product.category}</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${product.name}</li>
                    </ol>
                </nav>
                <h1 class="product-title mb-3">${product.name}</h1>
                <div class="rating mb-3">
                    ${generateStarRating(product.rating)}
                    <span class="text-muted ms-2">(${reviews.length} reviews)</span>
                </div>
                <div class="product-price mb-4">
                    <h2 class="text-primary">${formatNepaliPrice(product.price)}</h2>
                </div>
                <div class="product-description mb-4">
                    <h5>Description</h5>
                    <p class="text-muted">${product.description}</p>
                </div>
                <div class="product-actions d-flex gap-3 mb-4">
                    <button class="btn btn-primary btn-lg flex-grow-1" onclick="buyNow(${product.id})">
                        <i class="fas fa-bolt me-2"></i>Buy Now
                    </button>
                    <button class="btn btn-outline-primary btn-lg flex-grow-1" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-danger btn-lg" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Load specifications with improved styling
    if (specs) {
        const specRows = Object.entries(specs.specifications).map(([key, value]) => `
            <tr>
                <td class="fw-bold text-dark" style="width: 40%;">${key}</td>
                <td class="text-muted">${value}</td>
            </tr>
        `).join('');
        
        document.getElementById('specificationsTable').innerHTML = `
            <tbody class="border-top">${specRows}</tbody>
        `;

        // Load features with icons and better styling
        const featuresList = specs.features.map(feature => `
            <li class="list-group-item border-0 py-2">
                <i class="fas fa-check-circle text-success me-2"></i>
                <span class="text-dark">${feature}</span>
            </li>
        `).join('');
        
        document.getElementById('featuresList').innerHTML = featuresList;
    }

    // Enhanced review section
    if (reviews.length > 0) {
        const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
        document.getElementById('averageRating').textContent = avgRating.toFixed(1);
        document.getElementById('overallStars').innerHTML = generateStarRating(avgRating);
        document.getElementById('totalReviews').textContent = `Based on ${reviews.length} Reviews`;

        // Generate rating bars with percentages
        const ratingCounts = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
        reviews.forEach(review => ratingCounts[review.rating]++);

        const ratingBarsHTML = Object.entries(ratingCounts).reverse().map(([rating, count]) => {
            const percentage = (count / reviews.length) * 100;
            return `
                <div class="rating-bar d-flex align-items-center mb-2">
                    <div class="rating-label me-2">${rating} <i class="fas fa-star text-warning"></i></div>
                    <div class="progress flex-grow-1" style="height: 8px;">
                        <div class="progress-bar bg-warning" style="width: ${percentage}%"></div>
                    </div>
                    <div class="rating-count ms-2 text-muted">${count} (${percentage.toFixed(1)}%)</div>
                </div>
            `;
        }).join('');
        
        document.getElementById('ratingBars').innerHTML = ratingBarsHTML;

        // Load review list with verified badge and helpful button
        const reviewsHTML = reviews.map(review => `
            <div class="review-item border-bottom py-3">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <div class="d-flex align-items-center gap-2">
                            <strong>${review.user}</strong>
                            <span class="badge bg-success">Verified Purchase</span>
                        </div>
                        <div class="rating-stars">
                            ${generateStarRating(review.rating)}
                        </div>
                    </div>
                    <small class="text-muted">${review.date}</small>
                </div>
                <p class="mb-2">${review.comment}</p>
                <button class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-thumbs-up me-1"></i> Helpful
                </button>
            </div>
        `).join('');
        
        document.getElementById('reviewsList').innerHTML = reviewsHTML;
    }
}

// Buy Now functionality
window.buyNow = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Update order summary
    const orderSummaryHtml = `
        <div class="mb-3">
            <h6>Product Details</h6>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="mb-0">${product.name}</p>
                    <small class="text-muted">Quantity: 1</small>
                </div>
                <span>${formatNepaliPrice(product.price)}</span>
            </div>
        </div>
    `;
    
    // Update shipping form content
    const shippingFormContent = `
        <div class="col-md-6">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" required>
            <div class="invalid-feedback">Please enter your first name.</div>
        </div>
        <div class="col-md-6">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" required>
            <div class="invalid-feedback">Please enter your last name.</div>
        </div>
        <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
            <div class="invalid-feedback">Please enter a valid email.</div>
        </div>
        <div class="col-md-6">
            <label class="form-label">Phone</label>
            <input type="tel" class="form-control" id="phone" pattern="[0-9]{10}" placeholder="98XXXXXXXX" required>
            <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>
        <div class="col-12">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" id="address" required>
            <div class="invalid-feedback">Please enter your address.</div>
        </div>
        <div class="col-md-4">
            <label class="form-label">Province</label>
            <select class="form-select" id="province" required>
                <option value="">Choose...</option>
                <option>Province 1</option>
                <option>Madhesh</option>
                <option>Bagmati</option>
                <option>Gandaki</option>
                <option>Lumbini</option>
                <option>Karnali</option>
                <option>Sudurpashchim</option>
            </select>
            <div class="invalid-feedback">Please select a province.</div>
        </div>
        <div class="col-md-4">
            <label class="form-label">City</label>
            <input type="text" class="form-control" id="city" required>
            <div class="invalid-feedback">Please enter your city.</div>
        </div>
        <div class="col-md-4">
            <label class="form-label">ZIP</label>
            <input type="text" class="form-control" id="zipCode" required>
            <div class="invalid-feedback">Please enter ZIP code.</div>
        </div>
        <div class="col-12">
            <div class="card mt-3">
                <div class="card-body">
                    ${orderSummaryHtml}
                    <hr>
                    <div class="d-flex justify-content-between">
                        <span>Shipping Fee</span>
                        <span>Rs. 100</span>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <strong>Total Amount</strong>
                        <strong>${formatNepaliPrice(product.price + 100)}</strong>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('shippingFormContent').innerHTML = shippingFormContent;

    // Show shipping modal
    const shippingModal = new bootstrap.Modal(document.getElementById('shippingModal'));
    shippingModal.show();
};

// Initialize shipping form validation
document.addEventListener('DOMContentLoaded', function() {
    const shippingForm = document.getElementById('shippingForm');
    const placeOrderBtn = document.getElementById('placeOrderBtn');

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function() {
            if (!shippingForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                shippingForm.classList.add('was-validated');
                return;
            }

            // Collect form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                province: document.getElementById('province').value,
                city: document.getElementById('city').value,
                zipCode: document.getElementById('zipCode').value
            };

            // Here you would typically send this data to your backend
            // For demo purposes, we'll just show a success message
            showNotification('Order placed successfully! We will contact you soon.', 'success');
            
            // Close modal and reset form
            const shippingModal = bootstrap.Modal.getInstance(document.getElementById('shippingModal'));
            shippingModal.hide();
            shippingForm.reset();
            shippingForm.classList.remove('was-validated');
        });
    }
});

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${'<i class="fas fa-star text-warning"></i>'.repeat(fullStars)}
        ${hasHalfStar ? '<i class="fas fa-star-half-alt text-warning"></i>' : ''}
        ${'<i class="far fa-star text-warning"></i>'.repeat(emptyStars)}
    `;
}
