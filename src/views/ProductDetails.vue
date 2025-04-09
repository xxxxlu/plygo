<template>
  <div class="product-details">
    <div class="container" v-if="product">
      <div class="breadcrumb">
        <router-link to="/"><span class="material-icons home-icon">home</span> Home</router-link> 
        <span class="breadcrumb-divider">•</span> 
        <span class="current-page">{{ product.name }}</span>
      </div>

      <div class="product-container">
        <div class="product-image-wrapper">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="image-decoration">
            <div class="deco-circle deco1"></div>
            <div class="deco-circle deco2"></div>
            <div class="deco-leaf leaf1"></div>
          </div>
        </div>

        <div class="product-info">
          <div class="product-header">
            <h1 class="product-name">{{ product.name }}</h1>
            <p class="product-price">Rs. {{ product.price.toLocaleString() }}</p>
            <div v-if="product.price < 500" class="special-badge">Special!</div>
          </div>
          <p class="product-description">{{ product.description }}</p>

          <div class="quantity-selector">
            <label for="quantity">Quantity:</label>
            <div class="quantity-controls">
              <button
                @click="quantity > 1 ? quantity-- : null"
                class="quantity-btn"
              >-</button>
              <input
                type="number"
                id="quantity"
                v-model.number="quantity"
                min="1"
                class="quantity-input"
              >
              <button
                @click="quantity++"
                class="quantity-btn"
              >+</button>
            </div>
          </div>

          <button @click="addToCart" class="btn add-to-cart-btn">
            <span class="material-icons cart-icon">shopping_cart</span>
            Add to Cart
          </button>

          <div class="product-meta">
            <p class="product-category">Category: <span>{{ formatCategory(product.category) }}</span></p>
          </div>
        </div>
      </div>

      <div class="related-products" v-if="relatedProducts.length > 0">
        <h2>Related Products</h2>
        <div class="products-grid">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="product-item"
          >
            <ProductCard :product="relatedProduct" @added="showAddedMessage" />
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-else-if="notFound">
      <div class="error-message">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <router-link to="/" class="btn">Back to Home</router-link>
      </div>
    </div>

    <div class="container" v-else>
      <div class="loading">
        <p>Loading product details...</p>
      </div>
    </div>

    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">check_circle</span>
        <p>Item added to cart successfully!</p>
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
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'ProductDetailsPage',
  components: {
    ProductCard
  },
  data() {
    return {
      quantity: 1,
      notFound: false,
      showMessage: false,
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['getProductById', 'products']),
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return this.getProductById(this.productId);
    },
    relatedProducts() {
      if (!this.product) return [];

      return this.products.filter(product => {
        return product.category === this.product.category && product.id !== this.product.id;
      }).slice(0, 4);
    }
  },
  methods: {
    formatCategory(category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    },
    addToCart() {
      if (this.quantity < 1) {
        this.quantity = 1;
        return;
      }

      try {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: this.quantity
        });
        this.showAddedMessage();
      } catch (error) {
        alert(error.message);
      }
    },
    showAddedMessage() {
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  },
  created() {
    if (!this.product) {
      this.notFound = true;
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
.product-details {
  padding: 30px 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 8px 15px;
  border-radius: 50px;
  display: inline-flex;
}

.breadcrumb a {
  color: #2E7D32;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.breadcrumb a:hover {
  color: #4CAF50;
}

.home-icon {
  font-size: 18px;
  margin-right: 5px;
}

.breadcrumb-divider {
  margin: 0 10px;
  color: #81C784;
}

.current-page {
  color: #555;
  font-weight: 500;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
  position: relative;
}

.product-image-wrapper {
  position: relative;
  overflow: visible;
}

.product-image {
  position: relative;
  z-index: 2;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.2);
  border: 3px solid #e8f5e9;
  transition: all 0.3s ease;
}

.product-image img:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(76, 175, 80, 0.3);
}

.image-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(129, 199, 132, 0.3) 0%, rgba(129, 199, 132, 0) 70%);
}

.deco1 {
  width: 150px;
  height: 150px;
  top: -40px;
  left: -40px;
}

.deco2 {
  width: 100px;
  height: 100px;
  bottom: -20px;
  right: -20px;
}

.deco-leaf {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  right: 40px;
  top: -20px;
  animation: leafFloat 6s infinite ease-in-out;
}

@keyframes leafFloat {
  0%, 100% {
    transform: rotate(45deg) translate(0, 0);
  }
  50% {
    transform: rotate(30deg) translate(-10px, 10px);
  }
}

.product-header {
  position: relative;
}

.product-name {
  font-size: 28px;
  margin-bottom: 15px;
  color: #2E7D32;
  position: relative;
  display: inline-block;
  font-weight: 700;
}

.product-name::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 2px;
}

.product-price {
  font-size: 24px;
  font-weight: 700;
  color: #2E7D32;
  margin-bottom: 20px;
  background-color: rgba(129, 199, 132, 0.15);
  padding: 5px 15px;
  border-radius: 50px;
  display: inline-block;
}

.special-badge {
  position: absolute;
  top: -15px;
  right: 0;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 5px 15px;
  border-radius: 20px 20px 20px 0;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  transform: rotate(5deg);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: rotate(5deg) scale(1);
  }
  50% {
    transform: rotate(5deg) scale(1.1);
  }
  100% {
    transform: rotate(5deg) scale(1);
  }
}

.product-description {
  margin-bottom: 30px;
  line-height: 1.6;
  color: #555;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 15px;
  border-radius: 12px;
  border-left: 3px solid #81C784;
}

.quantity-selector {
  margin-bottom: 30px;
}

.quantity-selector label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 3px;
  border: 2px dashed #c5e1a5;
  width: fit-content;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(76, 175, 80, 0.2);
}

.quantity-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.quantity-input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  background-color: #f9f9f9;
  font-size: 16px;
  margin: 0 5px;
  border-radius: 5px;
  font-weight: 600;
  color: #2E7D32;
}

.add-to-cart-btn {
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
}

.add-to-cart-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

.cart-icon {
  font-size: 20px;
}

.product-meta {
  border-top: 2px dashed #c5e1a5;
  padding-top: 20px;
  margin-top: 10px;
}

.product-category {
  color: #666;
  display: inline-flex;
  align-items: center;
  background-color: rgba(232, 245, 233, 0.5);
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 14px;
}

.product-category span {
  color: #2E7D32;
  font-weight: 600;
  margin-left: 5px;
}

.related-products h2 {
  font-size: 26px;
  margin-bottom: 30px;
  position: relative;
  color: #2E7D32;
  font-weight: 700;
  display: inline-block;
  padding-right: 30px;
}

.related-products h2:before {
  content: '★';
  position: absolute;
  right: 0;
  top: 0;
  color: #8BC34A;
  animation: spin 10s linear infinite;
}

.related-products h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A, rgba(139, 195, 74, 0.3));
  border-radius: 3px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 20px;
  position: relative;
}

.error-message, .loading {
  text-align: center;
  padding: 50px 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
  border: 2px dashed #c5e1a5;
  margin: 30px 0;
}

.error-message h2 {
  margin-bottom: 15px;
  color: #2E7D32;
  font-weight: 700;
  font-size: 28px;
}

.error-message p {
  margin-bottom: 25px;
  color: #555;
  font-size: 16px;
  line-height: 1.5;
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

@media (max-width: 768px) {
  .product-container {
    grid-template-columns: 1fr;
  }

  .product-image {
    margin-bottom: 20px;
  }

  .related-products h2 {
    text-align: center;
  }

  .related-products h2:after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
