<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <router-link to="/" class="logo">
          <h1>PLY GO</h1>
        </router-link>
        <nav class="main-nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li class="cart-icon">
              <router-link to="/cart">
                <span class="material-icons">shopping_cart</span>
                <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view/>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>PLY GO</h3>
            <p>Your one-stop shop for authentic Pakistani snacks and treats.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/cart">Cart</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Payment Options</h3>
            <div class="payment-icons">
              <img src="/images/easypay.png" alt="EasyPaisa" class="payment-icon">
              <img src="/images/jazzcash.png" alt="JazzCash" class="payment-icon">
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; Copyright © 2025 Powered by Data Network Solutions (SMC-Private) Limited</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Comic Neue', 'Poppins', sans-serif;
  background-color: #f8fff8;
  color: #333;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2399da99' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 15px 0;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  border-bottom: 2px dashed #c5e1a5;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: white;
}

.logo h1 {
  font-size: 28px;
  font-weight: 700;
  text-shadow: 2px 2px 0 #388E3C;
  letter-spacing: 1px;
  transform: rotate(-2deg);
  display: inline-block;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.main-nav a:hover {
  color: #FFEB3B;
  transform: scale(1.1);
}

.cart-icon {
  position: relative;
}

.cart-icon .material-icons {
  font-size: 24px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #FFEB3B;
  color: #388E3C;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  animation: bounce 2s infinite;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 30px 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Footer styles */
.footer {
  background: linear-gradient(135deg, #2E7D32, #388E3C);
  color: white;
  padding: 40px 0 20px;
  margin-top: auto;
  border-top: 3px dashed #c5e1a5;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 18px;
  position: relative;
}

.footer-section h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 2px;
  background-color: #FFEB3B;
  border-radius: 10px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #FFEB3B;
  transform: translateX(5px);
  transition: transform 0.3s ease;
}

.payment-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.payment-icon {
  height: 30px;
  width: auto;
}

.copyright {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
  color: #aaa;
  font-size: 14px;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn:hover {
  background: linear-gradient(135deg, #43A047, #7CB342);
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);
}

.btn:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #4CAF50;
  color: #4CAF50;
  box-shadow: none;
}

.btn-outline:hover {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  border-color: transparent;
}

/* Form styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
}
</style>
