<template>
  <div class="product-card">
    <div class="product-badge" v-if="product.price < 500">Special!</div>
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
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
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
</style>
