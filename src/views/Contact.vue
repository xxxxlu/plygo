<template>
  <div class="contact-page">
    <div class="container">
      <div class="page-header">
        <div class="header-icon-wrapper">
          <span class="material-icons header-icon">contact_support</span>
        </div>
        <h1>Contact Us</h1>
        <p>Have questions about our products or your order? Reach out to us!</p>
        <div class="header-decoration">
          <div class="deco-leaf leaf1"></div>
          <div class="deco-leaf leaf2"></div>
        </div>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="card-decoration">
              <div class="deco-circle circle1"></div>
              <div class="deco-circle circle2"></div>
            </div>
            <h2>Contact Information</h2>

            <div class="info-item">
              <div class="icon-background">
                <span class="material-icons">email</span>
              </div>
              <div>
                <h3>Email</h3>
                <p class="info-text">plygo@plygo.shop</p>
              </div>
            </div>

            <div class="payment-methods">
              <h3>We Accept</h3>
              <div class="payment-icons">
                <img src="/images/easypay.png" alt="EasyPaisa" class="payment-icon">
                <img src="/images/jazzcash.png" alt="JazzCash" class="payment-icon">
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-header">
              <span class="material-icons form-icon">mail_outline</span>
              <h2>Send Us a Message</h2>
            </div>

            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" v-model="form.name" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" v-model="form.email" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" v-model="form.subject" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" v-model="form.message" class="form-input" rows="5" required></textarea>
            </div>

            <button type="submit" class="btn send-btn">
              <span class="material-icons">send</span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">check_circle</span>
        <p>Your message has been sent successfully!</p>
        <div class="notification-bubbles">
          <div class="bubble b1"></div>
          <div class="bubble b2"></div>
          <div class="bubble b3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      showMessage: false,
      messageTimeout: null
    }
  },
  methods: {
    submitForm() {
      // In a real application, you would send the form data to a server
      // For this demo, we're just simulating success
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);

      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  },
  beforeDestroy() {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 40px 0 60px;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  padding: 30px 0;
}

.header-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.header-icon {
  font-size: 50px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
}

.page-header h1 {
  font-size: 36px;
  margin-bottom: 15px;
  color: #2E7D32;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 3px;
}

.page-header p {
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
  display: inline-block;
}

.header-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
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
  top: 20%;
  left: 10%;
  animation: leafFloat 8s infinite ease-in-out;
}

.leaf2 {
  bottom: 15%;
  right: 10%;
  width: 50px;
  height: 50px;
  animation: leafFloat 6s infinite ease-in-out reverse;
}

@keyframes leafFloat {
  0%, 100% {
    transform: rotate(45deg) translate(0, 0);
  }
  50% {
    transform: rotate(30deg) translate(-10px, 10px);
  }
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  position: relative;
}

.info-card, .contact-form {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
  padding: 30px;
  border: 2px solid #e8f5e9;
  position: relative;
  overflow: hidden;
}

.info-card h2, .contact-form h2 {
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
  color: #2E7D32;
  font-weight: 700;
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.form-icon {
  margin-right: 15px;
  font-size: 28px;
  color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.1);
  padding: 10px;
  border-radius: 50%;
}

.contact-form h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 3px;
}

.card-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(129, 199, 132, 0.15) 0%, rgba(129, 199, 132, 0) 70%);
}

.circle1 {
  width: 150px;
  height: 150px;
  top: -50px;
  right: -50px;
}

.circle2 {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 20px;
}

.info-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  background-color: rgba(232, 245, 233, 0.3);
  padding: 15px;
  border-radius: 12px;
  border-left: 3px solid #a5d6a7;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
  background-color: rgba(232, 245, 233, 0.5);
}

.icon-background {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.info-item .material-icons {
  font-size: 20px;
  color: white;
}

.info-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #2E7D32;
  font-weight: 600;
}

.info-text {
  color: #558B2F;
  margin: 0 0 5px 0;
  padding: 3px 10px;
  background-color: rgba(197, 225, 165, 0.2);
  border-radius: 20px;
  display: inline-block;
  font-weight: 500;
}

.payment-methods {
  background-color: rgba(232, 245, 233, 0.3);
  padding: 15px;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  border-left: 3px solid #a5d6a7;
}

.payment-methods h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #2E7D32;
  font-weight: 600;
}

.payment-icons {
  display: flex;
  gap: 15px;
}

.payment-icon {
  height: 40px;
  width: auto;
}

.contact-form-container {
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
}

.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
  filter: drop-shadow(0 8px 15px rgba(76, 175, 80, 0.3));
}

.notification-content {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 15px 20px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.notification-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
}

.b1 {
  width: 15px;
  height: 15px;
  top: 10px;
  right: 10px;
  animation: float 3s infinite ease-in-out;
}

.b2 {
  width: 10px;
  height: 10px;
  bottom: 10px;
  right: 30px;
  animation: float 4s infinite ease-in-out 1s;
}

.b3 {
  width: 8px;
  height: 8px;
  top: 50%;
  right: 55px;
  animation: float 3.5s infinite ease-in-out 0.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.success-icon {
  margin-right: 10px;
  font-size: 24px;
  z-index: 1;
}

.notification-content p {
  z-index: 1;
  font-weight: 500;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2E7D32;
  padding-left: 5px;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e8f5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
}

.form-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .info-card, .contact-form {
    margin-bottom: 20px;
  }
}
</style>
