<template>
  <div class="wishlist">
    <div class="container">
      <div class="wishlist-header">
        <h1>
          <span class="material-icons heart-icon">favorite</span>
          My Wishlist
        </h1>
        <p v-if="wishlist.length > 0" class="wishlist-count">{{ wishlist.length }} item{{ wishlist.length > 1 ? 's' : '' }}</p>
      </div>

      <div v-if="wishlist.length === 0" class="empty-wishlist">
        <div class="empty-illustration">
          <span class="material-icons empty-icon">favorite_border</span>
          <div class="empty-bubbles">
            <div class="bubble b1"></div>
            <div class="bubble b2"></div>
            <div class="bubble b3"></div>
          </div>
        </div>
        <h2>Your wishlist is empty</h2>
        <p>Add your favorite items to wishlist and they'll show up here!</p>
        <router-link to="/products" class="btn explore-btn">
          Explore Products
        </router-link>
      </div>

      <div v-else class="wishlist-items">
        <div class="wishlist-grid">
          <div
            v-for="item in wishlist"
            :key="item.id"
            class="wishlist-item"
          >
            <div class="wishlist-card">
              <div class="wishlist-actions">
                <button @click="removeFromWishlist(item.id)" class="remove-btn">
                  <span class="material-icons">close</span>
                </button>
              </div>
              <router-link :to="`/product/${item.id}`" class="item-link">
                <div class="item-image">
                  <img :src="item.image" :alt="item.name">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p class="item-price">Rs. {{ item.price.toLocaleString() }}</p>
                </div>
              </router-link>
              <button @click="addToCart(item)" class="btn add-to-cart-btn">
                <span class="material-icons">shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showMessage" class="notification">
      <div class="notification-content" :class="{ 'error-notification': messageIcon === 'error' }">
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
  name: 'WishlistPage',
  data() {
    return {
      showMessage: false,
      notificationMessage: '',
      messageIcon: 'check_circle',
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['wishlist'])
  },
  methods: {
    removeFromWishlist(productId) {
      this.$store.dispatch('removeFromWishlist', productId);
      this.showNotification('Item removed from wishlist');
    },
    addToCart(product) {
      try {
        this.$store.dispatch('addToCart', {
          product: product,
          quantity: 1
        });
        this.showNotification('Item added to cart successfully!');
      } catch (error) {
        this.showNotification(error.message, 'error');
      }
    },
    showNotification(message, type = 'success') {
      this.notificationMessage = message;
      this.messageIcon = type === 'error' ? 'error' : 'check_circle';
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);
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
.wishlist {
  padding: 30px 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.wishlist-header {
  margin-bottom: 35px;
  text-align: center;
  position: relative;
}

.wishlist-header h1 {
  color: #388E3C;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.heart-icon {
  color: #f44336;
  font-size: 34px;
}

.wishlist-count {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.empty-wishlist {
  text-align: center;
  padding: 50px 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.1);
}

.empty-illustration {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 25px;
}

.empty-icon {
  font-size: 80px;
  color: #e0e0e0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.empty-bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  background-color: rgba(165, 214, 167, 0.5);
  border-radius: 50%;
}

.b1 {
  width: 20px;
  height: 20px;
  top: 20%;
  left: 0;
  animation: float 3s ease-in-out infinite;
}

.b2 {
  width: 15px;
  height: 15px;
  bottom: 20%;
  right: 10%;
  animation: float 4s ease-in-out infinite 1s;
}

.b3 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: 0;
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

.empty-wishlist h2 {
  color: #388E3C;
  margin-bottom: 15px;
}

.empty-wishlist p {
  color: #666;
  margin-bottom: 25px;
}

.explore-btn {
  padding: 12px 30px;
}

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.wishlist-card {
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

.wishlist-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(76, 175, 80, 0.25);
  border-color: #a5d6a7;
}

.wishlist-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
}

.remove-btn {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background-color: #f44336;
  color: white;
}

.remove-btn .material-icons {
  font-size: 18px;
}

.item-link {
  text-decoration: none;
  color: inherit;
  flex: 1;
}

.item-image {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f8e9;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
}

.wishlist-card:hover .item-image img {
  transform: scale(1.08);
}

.item-info {
  padding: 18px 15px;
  background: linear-gradient(to bottom, rgba(232, 245, 233, 0.2), rgba(232, 245, 233, 0.6));
  border-bottom: 2px dashed #c5e1a5;
}

.item-info h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #2E7D32;
}

.item-price {
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

.error-notification {
  background-color: #f44336;
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

.notification .bubble {
  background-color: rgba(255, 255, 255, 0.1);
}

.notification .b1 {
  width: 20px;
  height: 20px;
  top: 20%;
  left: 10%;
}

.notification .b2 {
  width: 15px;
  height: 15px;
  bottom: 20%;
  right: 20%;
}

.notification .b3 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: 10%;
}

@media (max-width: 768px) {
  .wishlist-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 15px;
  }
}
</style>
