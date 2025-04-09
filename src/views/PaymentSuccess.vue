<template>
  <div class="payment-success">
    <div class="container">
      <div class="success-card">
        <div class="success-icon">
          <span class="material-icons">check_circle</span>
        </div>
        <div class="confetti">
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
        </div>
        <h1>Payment Successful!</h1>
        <p class="message">Thank you for your purchase. Your order has been placed successfully.</p>

        <div class="next-steps">
          <div class="steps-header">
            <span class="material-icons steps-icon">list_alt</span>
            <h2>What's Next?</h2>
          </div>
          <ul>
            <li><span class="check-icon">✓</span> You will receive an email confirmation shortly.</li>
            <li><span class="check-icon">✓</span> Your order will be processed within 24 hours.</li>
            <li><span class="check-icon">✓</span> Delivery typically takes 2-4 business days.</li>
          </ul>
          <div class="decoration">
            <div class="deco-circle"></div>
            <div class="deco-circle"></div>
          </div>
        </div>

        <div class="actions">
          <router-link to="/" class="btn">
            <span class="material-icons">shopping_bag</span>
            Continue Shopping
          </router-link>
        </div>
        <div class="footer-decoration">
          <div class="deco-leaf leaf1"></div>
          <div class="deco-leaf leaf2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccessPage'
}
</script>

<style scoped>
.payment-success {
  padding: 60px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.success-card {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 3px solid #e8f5e9;
}

.success-icon {
  font-size: 80px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.success-icon .material-icons {
  font-size: 80px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 3px 5px rgba(76, 175, 80, 0.3));
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #2E7D32;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 3px;
}

.message {
  font-size: 18px;
  margin-bottom: 30px;
  color: #558B2F;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 15px 25px;
  border-radius: 50px;
  display: inline-block;
  font-weight: 500;
}

.next-steps {
  text-align: left;
  background-color: rgba(232, 245, 233, 0.6);
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 30px;
  position: relative;
  border-left: 4px solid #81C784;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
}

.steps-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.steps-icon {
  font-size: 24px;
  color: white;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  padding: 8px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0 3px 8px rgba(76, 175, 80, 0.2);
}

.next-steps h2 {
  font-size: 22px;
  color: #2E7D32;
  font-weight: 600;
  margin: 0;
}

.next-steps ul {
  padding-left: 10px;
  list-style-type: none;
}

.next-steps li {
  margin-bottom: 15px;
  color: #558B2F;
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(76, 175, 80, 0.1);
  display: flex;
  align-items: center;
}

.check-icon {
  color: #4CAF50;
  font-weight: bold;
  margin-right: 10px;
  background-color: rgba(76, 175, 80, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(129, 199, 132, 0.15) 0%, rgba(129, 199, 132, 0) 70%);
}

.next-steps .deco-circle:nth-child(1) {
  width: 120px;
  height: 120px;
  top: -20px;
  right: -20px;
}

.next-steps .deco-circle:nth-child(2) {
  width: 80px;
  height: 80px;
  bottom: 10px;
  left: 30px;
}

.actions .btn {
  padding: 15px 30px;
  font-size: 16px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  border: none;
  z-index: 99;
}

.actions .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
}

.actions .btn:active {
  transform: translateY(0);
}

.footer-decoration {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.deco-leaf {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
}

.leaf1 {
  bottom: 20px;
  left: 30px;
  animation: leafFloat 6s infinite ease-in-out;
}

.leaf2 {
  bottom: 35px;
  right: 40px;
  width: 30px;
  height: 30px;
  animation: leafFloat 5s infinite ease-in-out reverse;
}

@keyframes leafFloat {
  0%, 100% {
    transform: rotate(45deg) translate(0, 0);
  }
  50% {
    transform: rotate(30deg) translate(-5px, 5px);
  }
}

/* Confetti Animation */
.confetti {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.confetti-piece {
  position: absolute;
  width: 10px;
  height: 20px;
  background: #81C784;
  top: -20px;
  opacity: 0;
}

.confetti-piece:nth-child(1) {
  left: 10%;
  transform: rotate(15deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0s;
  animation-duration: 1.5s;
}

.confetti-piece:nth-child(2) {
  left: 20%;
  transform: rotate(90deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.2s;
  animation-duration: 1.8s;
}

.confetti-piece:nth-child(3) {
  left: 40%;
  transform: rotate(45deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.4s;
  animation-duration: 1.4s;
  background: #4CAF50;
}

.confetti-piece:nth-child(4) {
  left: 60%;
  transform: rotate(120deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.3s;
  animation-duration: 1.7s;
}

.confetti-piece:nth-child(5) {
  left: 80%;
  transform: rotate(60deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.5s;
  animation-duration: 1.6s;
  background: #8BC34A;
}

.confetti-piece:nth-child(6) {
  left: 90%;
  transform: rotate(30deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.1s;
  animation-duration: 1.9s;
}

.confetti-piece:nth-child(7) {
  left: 30%;
  transform: rotate(0deg);
  animation: makeItRain 1s infinite ease-out;
  animation-delay: 0.6s;
  animation-duration: 1.3s;
  background: #AED581;
}

@keyframes makeItRain {
  0% {opacity: 0; transform-origin: 0 0; transform: translateY(0%) rotate(0deg);}
  10% {opacity: 0.5; transform-origin: 10% 10%; transform: translateY(10%) rotate(5deg);}
  50% {opacity: 1; transform-origin: 50% 50%; transform: translateY(50%) rotate(45deg);}
  90% {opacity: 0.5; transform-origin: 90% 90%; transform: translateY(90%) rotate(90deg);}
  100% {opacity: 0; transform-origin: 100% 100%; transform: translateY(100%) rotate(120deg);}
}

@media (max-width: 576px) {
  .success-card {
    padding: 30px 20px;
  }

  .success-icon {
    font-size: 60px;
  }

  .success-icon .material-icons {
    font-size: 60px;
  }

  h1 {
    font-size: 24px;
  }

  .message {
    font-size: 16px;
  }
}
</style>
