// Payment Gateway Configuration
const PAYMENT_CONFIG = {
    // eSewa Configuration
    ESEWA: {
        MERCHANT_ID: 'EPAYTEST',
        MERCHANT_SECRET_KEY: 'your-secret-key',
        SUCCESS_URL: 'https://yourwebsite.com/success',
        FAILURE_URL: 'https://yourwebsite.com/failure',
        TEST_MODE: true,
        API_URL: 'https://uat.esewa.com.np/epay/main'
    },
    
    // Khalti Configuration
    KHALTI: {
        PUBLIC_KEY: 'test_public_key_dc74e0fd57cb46cd93832aee0a507256',
        SECRET_KEY: 'test_secret_key_dc74e0fd57cb46cd93832aee0a390afe',
        TEST_MODE: true,
        API_URL: 'https://khalti.com/api/v2/payment/verify/'
    },
    
    // ConnectIPS Configuration
    CONNECTIPS: {
        MERCHANT_ID: 'CONNECTIPSTEST',
        APP_ID: 'your-app-id',
        APP_NAME: 'ShopEase',
        TEST_MODE: true,
        API_URL: 'https://uat.connectips.com/connectipswebws/api/payment'
    }
};

// API Endpoints
const API_ENDPOINTS = {
    ESEWA: {
        INITIATE_PAYMENT: '/api/esewa/initiate',
        VERIFY_PAYMENT: '/api/esewa/verify'
    },
    KHALTI: {
        INITIATE_PAYMENT: '/api/khalti/initiate',
        VERIFY_PAYMENT: '/api/khalti/verify'
    },
    CONNECTIPS: {
        INITIATE_PAYMENT: '/api/connectips/initiate',
        VERIFY_PAYMENT: '/api/connectips/verify'
    }
};

export { PAYMENT_CONFIG, API_ENDPOINTS };
