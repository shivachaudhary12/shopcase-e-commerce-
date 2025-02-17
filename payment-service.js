import { PAYMENT_CONFIG, API_ENDPOINTS } from '../config.js';

class PaymentService {
    // eSewa Payment Processing
    static async processEsewaPayment(orderData) {
        try {
            const params = {
                amt: orderData.orderTotal,
                psc: 0,
                pdc: 0,
                txAmt: 0,
                tAmt: orderData.orderTotal,
                pid: `ORDER_${Date.now()}`,
                scd: PAYMENT_CONFIG.ESEWA.MERCHANT_ID,
                su: PAYMENT_CONFIG.ESEWA.SUCCESS_URL,
                fu: PAYMENT_CONFIG.ESEWA.FAILURE_URL
            };

            // Create form and submit to eSewa
            const form = document.createElement('form');
            form.setAttribute('method', 'POST');
            form.setAttribute('action', PAYMENT_CONFIG.ESEWA.API_URL);

            for (const key in params) {
                const hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
            form.submit();

            return { success: true };
        } catch (error) {
            console.error('eSewa payment error:', error);
            throw new Error('eSewa payment failed. Please try again.');
        }
    }

    // Khalti Payment Processing
    static async processKhaltiPayment(orderData) {
        try {
            const khaltiConfig = {
                publicKey: PAYMENT_CONFIG.KHALTI.PUBLIC_KEY,
                productIdentity: `PROD_${Date.now()}`,
                productName: "ShopEase Order",
                productUrl: "https://yourwebsite.com",
                eventHandler: {
                    onSuccess(payload) {
                        // Verify transaction with your backend
                        this.verifyKhaltiPayment(payload);
                    },
                    onError(error) {
                        console.log(error);
                    },
                    onClose() {
                        console.log('Khalti widget is closing');
                    }
                },
                amount: orderData.orderTotal * 100 // Amount in paisa
            };

            // Initialize Khalti payment widget
            const checkout = new KhaltiCheckout(khaltiConfig);
            checkout.show({ amount: khaltiConfig.amount });

            return { success: true };
        } catch (error) {
            console.error('Khalti payment error:', error);
            throw new Error('Khalti payment failed. Please try again.');
        }
    }

    // Verify Khalti Payment
    static async verifyKhaltiPayment(payload) {
        try {
            const response = await fetch(API_ENDPOINTS.KHALTI.VERIFY_PAYMENT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Key ${PAYMENT_CONFIG.KHALTI.SECRET_KEY}`
                },
                body: JSON.stringify({
                    token: payload.token,
                    amount: payload.amount
                })
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Khalti verification error:', error);
            throw new Error('Payment verification failed');
        }
    }

    // ConnectIPS Payment Processing
    static async processConnectIPSPayment(orderData) {
        try {
            const params = {
                merchantId: PAYMENT_CONFIG.CONNECTIPS.MERCHANT_ID,
                appId: PAYMENT_CONFIG.CONNECTIPS.APP_ID,
                appName: PAYMENT_CONFIG.CONNECTIPS.APP_NAME,
                txnId: `TXN_${Date.now()}`,
                txnDate: new Date().toISOString(),
                txnCurrency: 'NPR',
                txnAmount: orderData.orderTotal,
                referenceId: `REF_${Date.now()}`,
                remarks: 'ShopEase Order Payment',
                particulars: 'Order Payment'
            };

            // Create form and submit to ConnectIPS
            const form = document.createElement('form');
            form.setAttribute('method', 'POST');
            form.setAttribute('action', PAYMENT_CONFIG.CONNECTIPS.API_URL);

            for (const key in params) {
                const hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
            form.submit();

            return { success: true };
        } catch (error) {
            console.error('ConnectIPS payment error:', error);
            throw new Error('ConnectIPS payment failed. Please try again.');
        }
    }
}

export default PaymentService;
