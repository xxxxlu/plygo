<template>
  <div class="products-page">
    <div class="container">
      <div class="page-header">
        <h1>Our Products</h1>
        <p>Browse our complete collection of high-quality products</p>
      </div>
      
      <div class="products-filters">
        <div class="category-filter">
          <button
            @click="activeCategory = ''"
            :class="['filter-btn', { active: activeCategory === '' }]"
          >
            All Products
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="['filter-btn', { active: activeCategory === category }]"
          >
            {{ formatCategory(category) }}
          </button>
        </div>
      </div>
      
      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-item"
        >
          <ProductCard :product="product" @added="showAddedMessage" />
        </div>
      </div>
    </div>
    
    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">check_circle</span>
        <p>Item added to cart successfully!</p>
        <div class="notification-sparkles">
          <span class="sparkle sparkle1">✨</span>
          <span class="sparkle sparkle2">✨</span>
          <span class="sparkle sparkle3">✨</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductCard
  },
  data() {
    return {
      activeCategory: '',
      showMessage: false,
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['products']),
    filteredProducts() {
      if (!this.activeCategory) {
        return this.products;
      }
      return this.products.filter(product => product.category === this.activeCategory);
    },
    categories() {
      const categories = new Set();
      this.products.forEach(product => {
        categories.add(product.category);
      });
      return Array.from(categories).sort();
    }
  },
  methods: {
    formatCategory(category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
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
  beforeDestroy() {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}
</script>

<style scoped>
.products-page {
  padding: 40px 0 60px;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.page-header h1 {
  font-size: 2.5rem;
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
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.products-filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.filter-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: 2px dashed #c5e1a5;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  color: #388E3C;
}

.filter-btn.active {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  border: 2px solid #4CAF50;
  transform: scale(1.05);
  box-shadow: 0 3px 8px rgba(76, 175, 80, 0.3);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

.notification-content {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.success-icon {
  margin-right: 10px;
  font-size: 24px;
}

.notification-sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.sparkle {
  position: absolute;
  font-size: 18px;
  animation: sparkleAnim 2s infinite;
}

.sparkle1 {
  top: -10px;
  left: 10%;
  animation-delay: 0.2s;
}

.sparkle2 {
  top: 50%;
  right: -10px;
  animation-delay: 0.5s;
}

.sparkle3 {
  bottom: -10px;
  left: 30%;
  animation-delay: 0.8s;
}

@keyframes sparkleAnim {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1rem;
  }
}
</style>
