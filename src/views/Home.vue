<template>
  <div class="home">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-columns">
            <div class="hero-left">
              <div class="hero-title-container">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkVCM0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVja3ktc3Rhci1sZWZ0Ij48cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiPjwvcG9seWdvbj48L3N2Zz4=" class="lucky-star-left" alt="" />
                <h1>PLY GO</h1>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkVCM0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVja3ktc3Rhci1yaWdodCI+PHBvbHlnb24gcG9pbnRzPSIxMiAyIDE1LjA5IDguMjYgMjIgOS4yNyAxNyAxNC4xNCAxOC4xOCAyMS4wMiAxMiAxNy43NyA1LjgyIDIxLjAyIDcgMTQuMTQgMiA5LjI3IDguOTEgOC4yNiAxMiAyIj48L3BvbHlnb24+PC9zdmc+" class="lucky-star-right" alt="" />
              </div>
              <p class="hero-tagline">Discover authentic Pakistani snacks delivered to your doorstep.</p>
              <div class="toy-story-intro">
                <div class="intro-badge">Featured Collection</div>
                <h2>Toy Story Collection</h2>
                <p>Relive your childhood memories! Discover our new Toy Story collection featuring Woody, Buzz Lightyear, and all your favorite characters. Perfect for kids to play with and for adult collectors to treasure.</p>
              </div>
              <div class="hero-cta">
                <router-link to="/products" class="btn btn-primary">Shop Now <span class="material-icons">local_mall</span></router-link>
              </div>
            </div>
            <div class="hero-right">
              <div class="toy-story-image">
                <img src="https://hips.hearstapps.com/hmg-prod/images/0909522962435.jpg" alt="Toy Story Characters" class="toy-image"/>
                <div class="image-decoration">
                  <div class="deco-stars star1">✦</div>
                  <div class="deco-stars star2">✦</div>
                  <div class="deco-stars star3">✦</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-shapes">
            <div class="hero-shape circle1"></div>
            <div class="hero-shape circle2"></div>
            <div class="hero-shape circle3"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-section">
      <div class="container">
        <div class="section-header">
          <div class="title-decoration">
            <div class="deco-line"></div>
            <h2>About PLY PLY</h2>
            <div class="deco-line"></div>
          </div>
          <p class="about-description">We're a premium online store specializing in high-quality products that bring joy to your everyday life. From delicious snacks to collectible toys, we curate only the best for our customers.</p>
          
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">
                <span class="material-icons">verified</span>
              </div>
              <h3>Premium Quality</h3>
              <p>All our products are carefully selected to ensure the highest quality standards</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <span class="material-icons">local_shipping</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>We offer fast and reliable shipping with real-time tracking information</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <span class="material-icons">support_agent</span>
              </div>
              <h3>Customer Support</h3>
              <p>Our friendly support team is available to assist you with any questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="featured" class="featured-products">
      <div class="container">
        <div class="section-header">
          <div class="title-decoration">
            <div class="deco-line"></div>
            <h2>Featured Products</h2>
            <div class="deco-line"></div>
          </div>
          <p class="featured-subtitle">Check out our most popular items loved by customers</p>
          
          <div class="products-grid featured-grid featured-row">
            <div
              v-for="product in featuredProducts.slice(0, 4)"
              :key="product.id"
              class="product-item"
            >
              <ProductCard :product="product" @added="showAddedMessage" />
            </div>
          </div>
          
          <div class="toy-story-feature">
            <div class="toy-story-feature-content">
              <div class="toy-story-feature-text">
                <div class="feature-badge">Special Collection</div>
                <h3>Toy Story Collection</h3>
                <p>Relive your childhood memories with our exclusive Toy Story collection! Featuring Woody, Buzz Lightyear, and all your favorite characters from the beloved movie series. Perfect for kids to play with and for adult collectors to treasure.</p>
                <router-link to="/products" class="feature-btn">
                  <span>Explore Collection</span>
                  <span class="material-icons">toys</span>
                </router-link>
              </div>
              <div class="toy-story-feature-image">
                <img src="https://www.originalfilmart.com/cdn/shop/products/toy_story_4_2019_teaser_original_film_art_5000x.jpg?v=1583488503" alt="Toy Story Characters" />
                <div class="image-decoration">
                  <div class="deco-stars star1">✦</div>
                  <div class="deco-stars star2">✦</div>
                  <div class="deco-stars star3">✦</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="view-all-container">
            <router-link to="/products" class="view-all-btn">
              <span>View All Products</span>
              <span class="material-icons">arrow_forward</span>
            </router-link>
          </div>
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
  name: 'HomePage',
  components: {
    ProductCard
  },
  data() {
    return {
      showMessage: false,
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['products']),
    featuredProducts() {
      // Get 6 products as featured products
      // You can customize this logic to select specific products as featured
      return this.products.slice(0, 6);
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
.hero-section {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 80px 0 60px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  border-bottom: 3px dashed #c5e1a5;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-columns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.hero-left {
  flex: 1;
  text-align: left;
}

.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-title-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin: 0 15px;
  text-shadow: 3px 3px 0 #388E3C;
  transform: rotate(-2deg);
  display: inline-block;
  letter-spacing: 2px;
}

.lucky-star-left, .lucky-star-right {
  animation: twinkle 3s infinite alternate;
}

.lucky-star-left {
  transform: rotate(-15deg);
}

.lucky-star-right {
  transform: rotate(15deg);
}

@keyframes twinkle {
  0% {
    opacity: 0.5;
    transform: scale(0.8) rotate(-15deg);
  }
  100% {
    opacity: 1;
    transform: scale(1.1) rotate(-15deg);
  }
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
}

.circle1 {
  width: 150px;
  height: 150px;
  top: -30px;
  left: 10%;
  animation: float 8s infinite ease-in-out;
}

.circle2 {
  width: 80px;
  height: 80px;
  bottom: 20px;
  right: 15%;
  animation: float 6s infinite ease-in-out reverse;
}

.circle3 {
  width: 120px;
  height: 120px;
  top: 50%;
  left: 20%;
  animation: float 7s infinite ease-in-out 1s;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.hero-tagline {
  font-size: 1.3rem;
  margin-bottom: 15px;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
  font-weight: 500;
}

.hero-left p {
  margin-bottom: 20px;
  line-height: 1.6;
  z-index: 2;
  position: relative;
}

.hero-cta {
  margin-top: 30px;
  margin-bottom: 20px;
  position: relative;
  z-index: 20;
  display: block;
}

.hero-cta .btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #FFEB3B, #FFC107);
  color: #2E7D32;
  border-radius: 50px;
  text-decoration: none !important;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  pointer-events: auto;
  cursor: pointer;
  border: 2px solid #FFC107;
}

.btn-primary {
  position: relative;
}

.hero-cta .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #FFC107, #FFEB3B);
  color: #2E7D32;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;
}

.deco-line {
  height: 2px;
  width: 50px;
  background: linear-gradient(90deg, transparent, #4CAF50, transparent);
  margin: 0 15px;
}

.section-header h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  position: relative;
  color: #2E7D32;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.05);
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  z-index: 2;
  position: relative;
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
  margin-top: 20px;
}

.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
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

.notification-content {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.4);
  position: relative;
  overflow: hidden;
  border: 2px dashed rgba(255, 255, 255, 0.5);
}

.success-icon {
  margin-right: 10px;
  color: #FFEB3B;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
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
  .hero-content h1 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
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

.toy-story-intro {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  position: relative;
  backdrop-filter: blur(5px);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.intro-badge {
  position: absolute;
  top: -15px;
  left: 20px;
  background-color: #FFEB3B;
  color: #2E7D32;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
}

.toy-story-intro h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  color: #FFEB3B;
}

.toy-story-image {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 5px solid white;
  transform: rotate(2deg);
}

.toy-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.toy-story-image:hover .toy-image {
  transform: scale(1.05);
}

.image-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.deco-stars {
  position: absolute;
  font-size: 2rem;
  color: #FFEB3B;
  text-shadow: 0 0 10px rgba(255, 235, 59, 0.7);
  animation: twinkle-stars 3s infinite alternate;
}

.star1 {
  top: 10%;
  left: 10%;
  animation-delay: 0.5s;
}

.star2 {
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

.star3 {
  bottom: 15%;
  left: 20%;
  animation-delay: 1.5s;
}

@keyframes twinkle-stars {
  0% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@media (max-width: 900px) {
  .hero-columns {
    flex-direction: column;
  }
  
  .hero-left {
    text-align: center;
  }
  
  .hero-title-container {
    justify-content: center;
  }
  
  .toy-story-image {
    height: 300px;
    margin-top: 30px;
  }
  
  .hero-section {
    min-height: auto;
    padding: 60px 0;
  }
}

.about-section {
  padding: 60px 0;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a5d6a7' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.about-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.feature-item {
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.1);
  transition: all 0.3s ease;
  border-bottom: 3px solid #4CAF50;
}

.feature-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(76, 175, 80, 0.2);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon .material-icons {
  font-size: 30px;
  color: white;
}

.feature-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2E7D32;
}

.feature-item p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.featured-products {
  padding: 60px 0;
  background-color: #fff;
}

.featured-subtitle {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.1rem;
  color: #666;
}

.featured-grid {
  margin-bottom: 40px;
}

.featured-row {
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.toy-story-feature {
  margin: 50px 0;
  padding: 30px;
  background-color: rgba(76, 175, 80, 0.05);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.toy-story-feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234caf50' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.toy-story-feature-content {
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.toy-story-feature-text {
  flex: 1;
  padding-right: 20px;
  position: relative;
}

.feature-badge {
  display: inline-block;
  background-color: #FFEB3B;
  color: #2E7D32;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
}

.toy-story-feature-text h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #2E7D32;
}

.toy-story-feature-text p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
}

.feature-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
}

.feature-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

.toy-story-feature-image {
  flex: 1;
  position: relative;
  max-width: 450px;
}

.toy-story-feature-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 5px solid white;
  transform: rotate(2deg);
  transition: all 0.3s ease;
}

.toy-story-feature-image:hover img {
  transform: rotate(0deg) scale(1.02);
}

.view-all-container {
  text-align: center;
  margin-top: 30px;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 25px;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  color: white;
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  gap: 10px;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
}

.view-all-btn .material-icons {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.view-all-btn:hover .material-icons {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .featured-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-description {
    font-size: 1.1rem;
    padding: 0 15px;
  }
  
  .toy-story-feature-content {
    flex-direction: column;
  }
  
  .toy-story-feature-text {
    padding-right: 0;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .toy-story-feature-image {
    max-width: 100%;
  }
}
</style>
