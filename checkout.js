// Get cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orderTotal = 0;

// Initialize the checkout page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderSummary();
    initializePaymentMethods();
    setupPlaceOrderButton();
});

// Load order summary
function loadOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const shippingCost = 100; // Rs. 100 shipping cost

    orderItemsContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        orderItemsContainer.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <span class="fw-bold">${item.name}</span>
                    <br>
                    <small class="text-muted">Quantity: ${item.quantity}</small>
                </div>
                <span>Rs. ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });

    orderTotal = subtotal + shippingCost;
    subtotalElement.textContent = `Rs. ${subtotal.toFixed(2)}`;
    totalElement.textContent = `Rs. ${orderTotal.toFixed(2)}`;
}

// Initialize payment methods
function initializePaymentMethods() {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const paymentDetails = document.querySelectorAll('.payment-details');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            // Hide all payment details first
            paymentDetails.forEach(detail => detail.classList.add('d-none'));

            // Show the selected payment method's details
            const selectedDetails = document.getElementById(`${this.value}Details`);
            if (selectedDetails) {
                selectedDetails.classList.remove('d-none');
            }
        });
    });
}

// Setup place order button
function setupPlaceOrderButton() {
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.addEventListener('click', handlePlaceOrder);
}

// Handle place order
async function handlePlaceOrder() {
    // Validate form
    const form = document.getElementById('checkoutForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Get selected payment method
    const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
    if (!selectedPayment) {
        showNotification('Please select a payment method', 'error');
        return;
    }

    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        province: document.getElementById('province').value,
        paymentMethod: selectedPayment.value,
        orderTotal: orderTotal,
        items: cart
    };

    try {
        // Show loading state
        placeOrderBtn.disabled = true;
        placeOrderBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Processing...';

        // Process payment based on selected method
        let paymentResult = await processPayment(formData);
        
        if (paymentResult.success) {
            // Clear cart
            localStorage.removeItem('cart');
            
            // Show success message
            showNotification('Order placed successfully! Thank you for shopping with us.', 'success');
            
            // Redirect to order confirmation page after 2 seconds
            setTimeout(() => {
                window.location.href = 'order-confirmation.html';
            }, 2000);
        } else {
            throw new Error(paymentResult.message || 'Payment failed');
        }
    } catch (error) {
        showNotification(error.message || 'Failed to place order. Please try again.', 'error');
    } finally {
        // Reset button state
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = 'Place Order';
    }
}

// Process payment based on selected method
async function processPayment(orderData) {
    try {
        switch(orderData.paymentMethod) {
            case 'esewa':
                return await PaymentService.processEsewaPayment(orderData);
            case 'khalti':
                return await PaymentService.processKhaltiPayment(orderData);
            case 'connectips':
                return await PaymentService.processConnectIPSPayment(orderData);
            case 'bankTransfer':
                return processBankTransfer(orderData);
            case 'cod':
                return processCashOnDelivery(orderData);
            default:
                throw new Error('Invalid payment method');
        }
    } catch (error) {
        console.error('Payment processing error:', error);
        throw error;
    }
}

// Payment processing functions for each method
async function processEsewaPayment(orderData) {
    const esewaId = document.querySelector('#esewaDetails input').value;
    if (!esewaId) {
        throw new Error('Please enter your eSewa ID');
    }
    return await PaymentService.processEsewaPayment(orderData);
}

async function processKhaltiPayment(orderData) {
    const khaltiNumber = document.querySelector('#khaltiDetails input').value;
    if (!khaltiNumber) {
        throw new Error('Please enter your Khalti mobile number');
    }
    return await PaymentService.processKhaltiPayment(orderData);
}

async function processConnectIPSPayment(orderData) {
    return await PaymentService.processConnectIPSPayment(orderData);
}

async function processBankTransfer(orderData) {
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.querySelector('#bankDetails input[placeholder="Account Number"]').value;
    const accountHolder = document.querySelector('#bankDetails input[placeholder="Account Holder Name"]').value;

    if (!bankName || !accountNumber || !accountHolder) {
        throw new Error('Please fill in all bank details');
    }
    // Here you would process bank transfer details
    return { success: true };
}

async function processCashOnDelivery(orderData) {
    // Simple validation for COD
    if (orderData.orderTotal > 50000) {
        throw new Error('Cash on Delivery is not available for orders above Rs. 50,000');
    }
    return { success: true };
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    notification.style.zIndex = '1000';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}
