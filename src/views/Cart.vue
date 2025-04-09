<template>
  <div class="cart-page">
    <div class="container">
      <div class="page-header">
        <div class="title-wrapper">
          <span class="material-icons cart-title-icon">shopping_cart</span>
          <h1>Shopping Cart</h1>
        </div>
      </div>

      <div class="cart-empty" v-if="cart.length === 0">
        <div class="empty-cart-message">
          <div class="empty-cart-circle">
            <span class="material-icons empty-cart-icon">shopping_cart</span>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <div class="empty-cart-illustration">
            <div class="illustration-bubble bubble1"></div>
            <div class="illustration-bubble bubble2"></div>
            <div class="illustration-bubble bubble3"></div>
          </div>
          <router-link to="/" class="btn">
            <span class="material-icons">storefront</span>
            Continue Shopping
          </router-link>
        </div>
      </div>

      <div class="cart-content" v-else>
        <div class="cart-items">
          <div class="cart-header">
            <div class="cart-header-product">Product</div>
            <div class="cart-header-price">Price</div>
            <div class="cart-header-quantity">Quantity</div>
            <div class="cart-header-total">Total</div>
            <div class="cart-header-action"></div>
          </div>

          <CartItem
            v-for="item in cart"
            :key="item.id"
            :item="item"
          />
        </div>

        <div class="cart-summary">
          <h2>Order Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>Rs. {{ cartTotal.toLocaleString() }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div class="summary-row total">
            <span>Total</span>
            <span>Rs. {{ cartTotal.toLocaleString() }}</span>
          </div>

          <div class="summary-actions">
            <router-link to="/checkout" class="btn proceed-to-checkout">
              <span class="material-icons">payment</span>
              Proceed to Checkout
            </router-link>
            <button @click="clearCart" class="btn btn-outline clear-cart">
              <span class="material-icons">delete_sweep</span>
              Clear Cart
            </button>
          </div>

          <div class="cart-note">
            <p>Maximum order value: Rs. 50,000</p>
            <p>All prices inclusive of taxes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '../components/CartItem.vue';

export default {
  name: 'CartPage',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal'])
  },
  methods: {
    clearCart() {
      if (confirm('Are you sure you want to clear all items from your cart?')) {
        this.$store.dispatch('clearCart');
      }
    }
  }
}
</script>

<style scoped>
.cart-page {
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

.cart-title-icon {
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

.cart-empty {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.empty-cart-message {
  max-width: 500px;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
  border: 2px dashed #c5e1a5;
}

.empty-cart-circle {
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

.empty-cart-icon {
  font-size: 50px;
  color: white;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.empty-cart-illustration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.illustration-bubble {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px dashed rgba(76, 175, 80, 0.3);
}

.bubble1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation: bubbleFloat 7s infinite ease-in-out;
}

.bubble2 {
  width: 120px;
  height: 120px;
  bottom: 10%;
  right: 5%;
  animation: bubbleFloat 5s infinite ease-in-out 1s;
}

.bubble3 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation: bubbleFloat 6s infinite ease-in-out 0.5s;
}

@keyframes bubbleFloat {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -15px);
  }
  50% {
    transform: translate(15px, 10px);
  }
  75% {
    transform: translate(-10px, 15px);
  }
}

.empty-cart-message h2 {
  margin-bottom: 15px;
  font-size: 28px;
  color: #2E7D32;
  font-weight: 700;
}

.empty-cart-message p {
  margin-bottom: 30px;
  color: #555;
  font-size: 16px;
  line-height: 1.5;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.cart-items {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.15);
  overflow: hidden;
  border: 2px solid #e8f5e9;
}

.cart-header {
  display: flex;
  background: linear-gradient(to right, #e8f5e9, #f1f8e9);
  padding: 15px;
  font-weight: 600;
  border-bottom: 2px dashed #c5e1a5;
  color: #2E7D32;
}

.cart-header-product {
  flex: 2;
}

.cart-header-price, .cart-header-quantity, .cart-header-total {
  flex: 1;
  text-align: center;
}

.cart-header-action {
  width: 60px;
}

.cart-summary {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.15);
  padding: 25px;
  height: fit-content;
  border: 2px solid #e8f5e9;
  position: relative;
  overflow: hidden;
}

.cart-summary::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.cart-summary h2 {
  font-size: 22px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px dashed #c5e1a5;
  color: #2E7D32;
  font-weight: 700;
  position: relative;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  padding: 5px 0;
  position: relative;
  z-index: 1;
}

.summary-row.total {
  font-size: 22px;
  font-weight: 700;
  color: #2E7D32;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 2px dashed #c5e1a5;
  background-color: rgba(76, 175, 80, 0.05);
  padding: 15px 10px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.summary-actions {
  margin-top: 25px;
}

.proceed-to-checkout, .clear-cart {
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
  font-weight: bold;
}

.proceed-to-checkout {
  padding: 14px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.clear-cart {
  font-size: 14px;
  border-width: 2px;
}

.cart-note {
  margin-top: 25px;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  padding: 10px 15px;
  background-color: rgba(76, 175, 80, 0.05);
  border-radius: 10px;
  border-left: 3px solid #8BC34A;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-header {
    display: none;
  }
}
</style>
