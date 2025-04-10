<template>
  <div class="product-wrapper">
    <div class="product-card">
      <div class="product-badge" v-if="product.price < 500">Special!</div>
      <button @click.stop="toggleWishlist" class="wishlist-btn" :class="{ 'active': isInWishlist }">
        <span class="material-icons">{{ isInWishlist ? 'favorite' : 'favorite_border' }}</span>
      </button>
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">Rs. {{ product.price.toLocaleString() }}</p>
        </div>
      </router-link>
      <button @click="addToCart" class="btn add-to-cart-btn">
        <span class="material-icons cart-icon">shopping_cart</span>
        Add to Cart
      </button>
    </div>
    
    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">{{ messageIcon }}</span>
        <p>{{ notificationMessage }}</p>
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

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMessage: false,
      notificationMessage: '',
      messageIcon: 'check_circle',
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['isInWishlist']),
    isInWishlist() {
      return this.$store.getters.isInWishlist(this.product.id);
    }
  },
  methods: {
    toggleWishlist() {
      if (this.isInWishlist) {
        this.$store.dispatch('removeFromWishlist', this.product.id);
        this.showCustomMessage('Removed from wishlist');
      } else {
        this.$store.dispatch('addToWishlist', this.product);
        this.showCustomMessage('Added to wishlist');
        this.$emit('wishlistAdded');
      }
    },
    showCustomMessage(message) {
      this.notificationMessage = message;
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    },
    addToCart() {
      try {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: 1
        });
        this.$emit('added');
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>

<style scoped>
.product-wrapper {
  position: relative;
  height: 100%;
}

.product-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.15);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #e8f5e9;
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.wishlist-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.wishlist-btn.active {
  color: #f44336;
}

.wishlist-btn .material-icons {
  font-size: 20px;
}

.product-card:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow: 0 12px 25px rgba(76, 175, 80, 0.25);
  border-color: #a5d6a7;
}

.product-link {
  text-decoration: none;
  color: inherit;
  flex: 1;
}

.product-image {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f8e9;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.08);
}

.product-info {
  padding: 18px 15px;
  background: linear-gradient(to bottom, rgba(232, 245, 233, 0.2), rgba(232, 245, 233, 0.6));
  border-bottom: 2px dashed #c5e1a5;
}

.product-name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #2E7D32;
  position: relative;
  display: inline-block;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: #43A047;
  display: inline-block;
  background-color: rgba(165, 214, 167, 0.3);
  padding: 4px 10px;
  border-radius: 20px;
}

.add-to-cart-btn {
  width: 100%;
  border-radius: 0 0 14px 14px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 12px 0;
}

.cart-icon {
  font-size: 20px;
}

.product-badge {
  position: absolute;
  top: 10px;
  right: -30px;
  background: #FFEB3B;
  color: #388E3C;
  transform: rotate(45deg);
  padding: 5px 30px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 2;
}

.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.notification-content {
  display: flex;
  align-items: center;
  background-color: #388E3C;
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease forwards;
  position: relative;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  margin-right: 10px;
}

.notification-bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.b1 {
  width: 20px;
  height: 20px;
  top: 20%;
  left: 10%;
  animation: float 3s ease-in-out infinite;
}

.b2 {
  width: 15px;
  height: 15px;
  bottom: 20%;
  right: 20%;
  animation: float 4s ease-in-out infinite 1s;
}

.b3 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: 10%;
  animation: float 3.5s ease-in-out infinite 0.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
