<template>
  <div class="checkout-page">
    <div class="container">
      <div class="page-header">
        <div class="title-wrapper">
          <span class="material-icons checkout-title-icon">shopping_bag</span>
          <h1>Checkout</h1>
        </div>
      </div>

      <div class="checkout-empty" v-if="cart.length === 0">
        <div class="empty-checkout-message">
          <div class="empty-checkout-circle">
            <span class="material-icons empty-checkout-icon">shopping_cart</span>
          </div>  
          <h2>Your cart is empty</h2>
          <p>You need to add items to your cart before checking out.</p>
          <div class="checkout-deco">
            <div class="deco-leaf leaf1"></div>
            <div class="deco-leaf leaf2"></div>
            <div class="deco-leaf leaf3"></div>
          </div>
          <router-link to="/" class="btn">
            <span class="material-icons">shopping_basket</span>
            Shop Now
          </router-link>
        </div>
      </div>

      <div class="checkout-content" v-else>
        <div class="checkout-steps">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="['step', {
              'active': currentStep === index,
              'completed': currentStep > index
            }]"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-label">{{ step }}</div>
            <span v-if="currentStep > index" class="material-icons step-check">check_circle</span>
          </div>
        </div>

        <!-- Step 1: Review Products -->
        <div v-if="currentStep === 0" class="checkout-step-content">
          <div class="checkout-products">
            <h2>Review Your Order</h2>

            <div class="checkout-product-list">
              <div
                v-for="item in cart"
                :key="item.id"
                class="checkout-product-item"
              >
                <div class="checkout-product-image">
                  <img :src="item.image" :alt="item.name">
                </div>
                <div class="checkout-product-info">
                  <h3>{{ item.name }}</h3>
                  <p class="checkout-product-price">Rs. {{ item.price.toLocaleString() }}</p>
                  <p class="checkout-product-quantity">Quantity: {{ item.quantity }}</p>
                </div>
                <div class="checkout-product-total">
                  Rs. {{ (item.price * item.quantity).toLocaleString() }}
                </div>
              </div>
            </div>

            <div class="checkout-total">
              <h3>Order Total: Rs. {{ cartTotal.toLocaleString() }}</h3>
            </div>

            <div class="step-actions">
              <router-link to="/cart" class="btn btn-outline">Back to Cart</router-link>
              <button @click="nextStep" class="btn">Continue to Information</button>
            </div>
          </div>
        </div>

        <!-- Step 2: Customer Information -->
        <div v-else-if="currentStep === 1" class="checkout-step-content">
          <div class="checkout-form">
            <h2>Your Information</h2>

            <form @submit.prevent="submitInfo">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="customerInfo.name"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="customerInfo.email"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="customerInfo.phone"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="address" class="form-label">Delivery Address</label>
                <textarea
                  id="address"
                  v-model="customerInfo.address"
                  class="form-input"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  id="city"
                  v-model="customerInfo.city"
                  class="form-input"
                  required
                >
              </div>

              <div class="payment-options">
                <h3>Select Payment Method</h3>

                <div class="payment-methods">
                  <div
                    :class="['payment-method', { selected: customerInfo.paymentMethod === 'easypaisa' }]"
                    @click="customerInfo.paymentMethod = 'easypaisa'"
                  >
                    <img src="/images/easypay.png" alt="EasyPaisa">
                    <span>EasyPaisa</span>
                  </div>

                  <div
                    :class="['payment-method', { selected: customerInfo.paymentMethod === 'jazzcash' }]"
                    @click="customerInfo.paymentMethod = 'jazzcash'"
                  >
                    <img src="/images/jazzcash.png" alt="JazzCash">
                    <span>JazzCash</span>
                  </div>
                </div>
              </div>

              <div class="step-actions">
                <button type="button" @click="prevStep" class="btn btn-outline">Back to Order Review</button>
                <button type="submit" class="btn">Continue to Payment</button>
              </div>
            </form>
          </div>
        </div>

        <!-- Step 3: Payment -->
        <div v-else-if="currentStep === 2" class="checkout-step-content">
          <div class="payment-instructions">
            <h2>Complete Your Payment</h2>

            <div class="payment-details">
              <div v-if="customerInfo.paymentMethod === 'easypaisa'" class="payment-method-details">
                <img src="/images/easypay.png" alt="EasyPaisa" class="payment-logo">
                <h3>Pay via EasyPaisa</h3>

                <div class="payment-steps">
                  <p>1. Open your EasyPaisa mobile app</p>
                  <p>2. Send Rs. {{ cartTotal.toLocaleString() }} to this number: <strong>0312-3456789</strong></p>
                  <p>3. Use your order reference: <strong>{{ orderReference }}</strong></p>
                  <p>4. Once payment is completed, click the button below</p>
                </div>
              </div>

              <div v-else-if="customerInfo.paymentMethod === 'jazzcash'" class="payment-method-details">
                <img src="/images/jazzcash.png" alt="JazzCash" class="payment-logo">
                <h3>Pay via JazzCash</h3>

                <div class="payment-steps">
                  <p>1. Open your JazzCash mobile app</p>
                  <p>2. Send Rs. {{ cartTotal.toLocaleString() }} to this number: <strong>0331-9876543</strong></p>
                  <p>3. Use your order reference: <strong>{{ orderReference }}</strong></p>
                  <p>4. Once payment is completed, click the button below</p>
                </div>
              </div>

              <div class="order-summary">
                <h3>Order Summary</h3>
                <p>Name: {{ customerInfo.name }}</p>
                <p>Email: {{ customerInfo.email }}</p>
                <p>Phone: {{ customerInfo.phone }}</p>
                <p>Address: {{ customerInfo.address }}, {{ customerInfo.city }}</p>
                <p>Total: Rs. {{ cartTotal.toLocaleString() }}</p>
                <p>Order Reference: {{ orderReference }}</p>
              </div>
            </div>

            <div class="step-actions">
              <button @click="prevStep" class="btn btn-outline">Back to Information</button>
              <button @click="completePayment" class="btn">Complete Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',
  data() {
    return {
      steps: ['Review Order', 'Information', 'Payment'],
      currentStep: 0,
      customerInfo: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        paymentMethod: 'easypaisa'
      },
      orderReference: ''
    };
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal'])
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    submitInfo() {
      if (!this.customerInfo.paymentMethod) {
        alert('Please select a payment method');
        return;
      }

      // Generate a random order reference
      this.orderReference = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

      this.nextStep();
    },
    completePayment() {
      // In a real application, you would verify the payment status here
      // For this demo, we're just simulating a successful payment
      this.$store.dispatch('clearCart');
      this.$router.push('/payment-success');
    }
  },
  created() {
    if (this.cart.length === 0) {
      this.$router.push('/cart');
    }
  }
}
</script>

<style scoped>
.checkout-page {
  padding: 40px 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.page-header {
  margin-bottom: 30px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.checkout-title-icon {
  font-size: 36px;
  color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.1);
  padding: 10px;
  border-radius: 50%;
  border: 2px dashed #c5e1a5;
}

.page-header h1 {
  font-size: 32px;
  position: relative;
  padding-bottom: 15px;
  color: #2E7D32;
}

.page-header h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  border-radius: 4px;
}

.checkout-empty {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.empty-checkout-message {
  max-width: 500px;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
  border: 2px dashed #c5e1a5;
}

.empty-checkout-circle {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
  animation: float 4s infinite ease-in-out;
}

.empty-checkout-icon {
  font-size: 50px;
  color: white;
}

.checkout-deco {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.deco-leaf {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
}

.leaf1 {
  top: 20%;
  left: 10%;
  animation: leafFloat 8s infinite ease-in-out;
}

.leaf2 {
  bottom: 15%;
  right: 10%;
  width: 40px;
  height: 40px;
  animation: leafFloat 6s infinite ease-in-out reverse;
}

.leaf3 {
  top: 60%;
  left: 20%;
  width: 25px;
  height: 25px;
  animation: leafFloat 7s infinite ease-in-out 1s;
}

@keyframes leafFloat {
  0%, 100% {
    transform: rotate(45deg) translate(0, 0);
  }
  50% {
    transform: rotate(30deg) translate(-10px, 10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.empty-checkout-message h2 {
  margin-bottom: 15px;
  font-size: 28px;
  color: #2E7D32;
  font-weight: 700;
}

.empty-checkout-message p {
  margin-bottom: 30px;
  color: #555;
  font-size: 16px;
  line-height: 1.5;
}

.checkout-steps {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  padding: 20px 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  position: relative;
  transition: all 0.3s ease;
}

.step:not(:last-child):after {
  content: '';
  position: absolute;
  top: 20px;
  right: -50px;
  width: 100px;
  height: 3px;
  background-color: #e8f5e9;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.step.active .step-number {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
}

.step.completed .step-number {
  background-color: #81C784;
  color: white;
}

.step.completed:after {
  background: linear-gradient(90deg, #81C784, #4CAF50);
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 2px dashed #c5e1a5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 10px;
  position: relative;
  transition: all 0.3s ease;
}

.step-check {
  position: absolute;
  top: -5px;
  right: -5px;
  color: #4CAF50;
  background: white;
  border-radius: 50%;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.step-label {
  font-size: 14px;
  font-weight: 500;
  color: #388E3C;
  margin-top: 5px;
}

.checkout-step-content {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.15);
  padding: 30px;
  margin-bottom: 40px;
  border: 2px solid #e8f5e9;
  position: relative;
  overflow: hidden;
}

.checkout-step-content::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.checkout-step-content h2 {
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
  color: #2E7D32;
  font-weight: 700;
  display: inline-block;
}

.checkout-step-content h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 3px;
}

.checkout-product-list {
  margin-bottom: 30px;
}

.checkout-product-item {
  display: flex;
  align-items: center;
  padding: 18px 15px;
  border-bottom: 1px dashed #c5e1a5;
  background-color: rgba(232, 245, 233, 0.2);
  margin-bottom: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.checkout-product-item:hover {
  background-color: rgba(232, 245, 233, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
}

.checkout-product-image {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 15px;
  border: 2px solid #e8f5e9;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.15);
}

.checkout-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.checkout-product-info {
  flex: 1;
}

.checkout-product-info h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.checkout-product-price, .checkout-product-quantity {
  font-size: 14px;
  color: #558B2F;
  margin: 5px 0;
  background-color: rgba(197, 225, 165, 0.3);
  padding: 2px 8px;
  border-radius: 20px;
  display: inline-block;
}

.checkout-product-total {
  font-weight: 700;
  font-size: 16px;
  min-width: 120px;
  text-align: right;
  color: #2E7D32;
  background-color: rgba(165, 214, 167, 0.2);
  padding: 8px 12px;
  border-radius: 20px;
}

.checkout-total {
  text-align: right;
  padding: 20px;
  border-top: 2px dashed #c5e1a5;
  margin-bottom: 30px;
  background-color: rgba(76, 175, 80, 0.05);
  border-radius: 10px;
}

.checkout-total h3 {
  font-size: 22px;
  color: #2E7D32;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.checkout-total h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgba(139, 195, 74, 0.3), #8BC34A, #4CAF50);
  border-radius: 2px;
}

.step-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;
}

.checkout-form h2 {
  margin-bottom: 30px;
}

.payment-options {
  margin-top: 30px;
}

.payment-options h3 {
  margin-bottom: 20px;
  font-size: 18px;
}

.payment-methods {
  display: flex;
  gap: 20px;
}

.payment-method {
  border: 2px dashed #c5e1a5;
  border-radius: 16px;
  padding: 15px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
}

.payment-method:hover {
  border-color: #8BC34A;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
}

.payment-method img {
  height: 40px;
  margin-bottom: 10px;
}

.payment-method.selected {
  border-color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.05);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  transform: translateY(-5px);
}

.payment-method-details {
  text-align: center;
  margin-bottom: 30px;
}

.payment-logo {
  height: 60px;
  margin-bottom: 20px;
}

.payment-steps {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  background-color: rgba(232, 245, 233, 0.5);
  border-radius: 16px;
  border: 2px dashed #c5e1a5;
  position: relative;
  overflow: hidden;
}

.payment-steps::after {
  content: '';
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.payment-steps p {
  margin-bottom: 10px;
}

.order-summary {
  margin-top: 40px;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 25px;
  border-radius: 16px;
  border: 2px solid #a5d6a7;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
}

.order-summary::before {
  content: '';
  position: absolute;
  top: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.order-summary h3 {
  margin-bottom: 20px;
  color: #2E7D32;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  font-size: 20px;
}

.order-summary h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 2px;
}

.order-summary p {
  margin-bottom: 12px;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #558B2F;
  font-weight: 500;
}

@media (max-width: 768px) {
  .checkout-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .step {
    flex-direction: row;
    width: 100%;
  }

  .step:not(:last-child):after {
    display: none;
  }

  .step-number {
    margin-right: 10px;
    margin-bottom: 0;
  }

  .payment-methods {
    flex-direction: column;
  }

  .payment-method {
    width: 100%;
  }

  .step-actions {
    flex-direction: column;
    gap: 10px;
  }

  .step-actions button, .step-actions a {
    width: 100%;
  }
}
</style>
