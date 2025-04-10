import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlist: [],
    products: [
      {
        id: 1,
        name: 'Disney Toy Story 4 Wind-Up Toy - Random Character',
        price: 2990,
        image: 'https://m.media-amazon.com/images/I/61Zaa2ZH6ZL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Perfect for Toy Story fans. Features moving arms and walking function with popular characters.',
        category: 'Toy Story'
      },
      {
        id: 2,
        name: 'Disney Toy Story 4 Die-Cast Collection - Random Character',
        price: 2990,
        image: 'https://m.media-amazon.com/images/I/71d1PCram6L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'High-quality die-cast figurines for collectors with movable head, knees, and arms. Perfect for display.',
        category: 'Toy Story'
      },
      {
        id: 3,
        name: 'Disney Strawberry Bear Plush Toy - Scented Edition 38CM',
        price: 2990,
        image: 'https://ext.same-assets.com/2965724184/4251015551.jpeg',
        description: 'Scented strawberry bear plush toy for sensory play and cuddles.',
        category: 'Toy Story'
      },
      {
        id: 4,
        name: 'Disney Toy Story 100-Piece Boxed Puzzle',
        price: 2990,
        image: 'https://m.media-amazon.com/images/I/81QcX0ObbKL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Disney Toy Story 100-piece puzzle suitable for children aged 5 and above.',
        category: 'Toy Story'
      },
      {
        id: 5,
        name: 'LeSen Robot Toy Story Edition',
        price: 3375,
        image: 'https://m.media-amazon.com/images/I/81InbTsFGbL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Smart robot controllable through companion app with Toy Story themes.',
        category: 'Toy Story'
      },
      {
        id: 6,
        name: 'Disney Strawberry Bear Plush Classic Edition 50CM',
        price: 3990,
        image: 'https://ext.same-assets.com/974841265/1209364044.jpeg',
        description: 'Classic edition strawberry bear plush toy in large 50cm size.',
        category: 'Toy Story'
      },
      {
        id: 7,
        name: 'Toy Story Buzz Lightyear Spaceship Set',
        price: 4990,
        image: 'https://m.media-amazon.com/images/I/71rL5zB1UZL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Spaceship set including Buzz Lightyear action figure with authentic movie details.',
        category: 'Toy Story'
      },
      {
        id: 8,
        name: 'Toy Story Woody Cowboy Set',
        price: 4590,
        image: 'https://ext.same-assets.com/1570092308/2410553395.jpeg',
        description: 'Woody cowboy action figure with accessories from the beloved movie.',
        category: 'Toy Story'
      },
      {
        id: 9,
        name: 'Toy Story Alien Plush Toy',
        price: 1290,
        image: 'https://m.media-amazon.com/images/I/51wVGuha3FL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Adorable three-eyed alien plush toy from the classic movie.',
        category: 'Toy Story'
      },
      {
        id: 10,
        name: 'Toy Story Slinky Dog Plush',
        price: 1590,
        image: 'https://www.toysrus.com.hk/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-master-catalog-toysrus/default/dw0dcb6bc3/2/3/c/4/23c42bfdb8c13f5181daff536eecf6e414c8a630_165217_i1.jpg?sw=900&sh=900&q=75',
        description: 'Slinky Dog plush toy suitable for children aged 3 and above.',
        category: 'Toy Story'
      },
      {
        id: 11,
        name: 'Toy Story Bo Peep Shepherd Set',
        price: 3990,
        image: 'https://m.media-amazon.com/images/I/711K03aVaNL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Bo Peep shepherd figure with accessories from the movie.',
        category: 'Toy Story'
      },
      {
        id: 12,
        name: 'Toy Story Rex Plush Toy',
        price: 2590,
        image: 'https://m.media-amazon.com/images/I/71flfRxZ1mL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Adorable Rex dinosaur plush toy for cuddles and play.',
        category: 'Toy Story'
      },
      {
        id: 13,
        name: 'Toy Story Hamm Piggy Bank',
        price: 1890,
        image: 'https://m.media-amazon.com/images/I/41SFpp0Q9xL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Hamm piggy bank figure from Toy Story for saving and play.',
        category: 'Toy Story'
      },
      {
        id: 14,
        name: 'Toy Story Character Storage Box',
        price: 2990,
        image: 'https://img.cloudimg.in/uploads/shops/25837/products/f6/f65fbd0911ac8cb99a096a5bcee935b6.jpg',
        description: 'Character-shaped storage box, practical and fun.',
        category: 'Toy Story'
      },
      {
        id: 15,
        name: 'Toy Story Building Block Set',
        price: 3990,
        image: 'https://m.media-amazon.com/images/I/71d1PCram6L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Building block set for constructing Toy Story scenes.',
        category: 'Toy Story'
      },
      {
        id: 16,
        name: 'Toy Story Mini Character Set - Pack of 10',
        price: 1990,
        image: 'https://m.media-amazon.com/images/I/51lKAYKwQiL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Mini character figures 10-pack, perfect for collectors.',
        category: 'Toy Story'
      },
      {
        id: 17,
        name: 'Toy Story Woody Walking Action Figure',
        price: 3590,
        image: 'https://m.media-amazon.com/images/I/71TLS3tkr3L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Woody action figure with electronic walking function.',
        category: 'Toy Story'
      },
      {
        id: 18,
        name: 'Toy Story Buzz Lightyear Talking Light-Up Figure',
        price: 4390,
        image: 'https://m.media-amazon.com/images/I/61-uKikc4-L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Light and sound Buzz Lightyear action figure with multiple sound effects.',
        category: 'Toy Story'
      },
      {
        id: 19,
        name: 'Toy Story Board Game',
        price: 1990,
        image: 'https://m.media-amazon.com/images/I/91Qyk8dLk6L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Toy Story themed board game for family fun.',
        category: 'Toy Story'
      },
      {
        id: 20,
        name: 'Toy Story Sticker Book',
        price: 690,
        image: 'https://img.alicdn.com/imgextra/i3/2206705589443/O1CN01G0CR1Z2JcwzBdnJo8_!!2206705589443.jpg',
        description: 'Collector edition sticker book with over a hundred stickers.',
        category: 'Toy Story'
      },
      {
        id: 21,
        name: 'Toy Story 200-Piece Puzzle',
        price: 1590,
        image: 'https://gw.alicdn.com/imgextra/i3/525898961/O1CN01i0wImq2G4Bz6Iwv9p_!!525898961.jpg_Q75.jpg_.webp',
        description: '200-piece puzzle with medium difficulty level.',
        category: 'Toy Story'
      },
      {
        id: 22,
        name: 'Toy Story School Backpack',
        price: 2290,
        image: 'https://gw.alicdn.com/imgextra/O1CN01a9Ytjd25ABRUzCf17_!!6000000007485-2-yinhe.png_.webp',
        description: 'Children school backpack with Toy Story characters design.',
        category: 'Toy Story'
      },
      {
        id: 23,
        name: 'Toy Story Children Umbrella',
        price: 990,
        image: 'https://gw.alicdn.com/imgextra/i2/67994278/O1CN01Q9fnZW1hTNEkH34xA_!!0-item_pic.jpg_300x300Q75.jpg_.webp',
        description: 'Children umbrella with cartoon Toy Story characters.',
        category: 'Toy Story'
      },
      {
        id: 24,
        name: 'Toy Story Plush Shawl',
        price: 1490,
        image: 'https://gw.alicdn.com/imgextra/i4/3210627061/O1CN01rZ0nxE221zJSzA02n_!!3210627061.jpg_Q75.jpg_.webp',
        description: 'Plush Shawl, warm and comfortable',
        category: 'Toy Story'
      },
      {
        id: 25,
        name: 'Toy Story Stationery Set',
        price: 1190,
        image: 'https://gw.alicdn.com/imgextra/i4/44485139/O1CN01tqIo3I1npiLHa4NUC_!!44485139.jpg_Q75.jpg_.webp',
        description: 'Stationery set including pencil case, pencils, etc.',
        category: 'Toy Story'
      },
      {
        id: 26,
        name: 'Toy Story Toy Story Childrens Water Bottle',
        price: 890,
        image: 'https://gw.alicdn.com/imgextra/i4/4066234693/O1CN01bE354h1kXRgp0NqmT_!!2-item_pic.png_.webp',
        description: 'Childrens water bottle, healthy material',
        category: 'Toy Story'
      },
      {
        id: 27,
        name: 'Toy Story Toy Story Childrens Tableware Set',
        price: 1590,
        image: 'https://gw.alicdn.com/imgextra/i3/2579209816/O1CN0185AewR2MNmUlXAIU7_!!2579209816.jpg_Q75.jpg_.webp',
        description: 'Childrens tableware set, safe and environmentally friendly',
        category: 'Toy Story'
      },
      {
        id: 28,
        name: 'Toy Story Toy Story Childrens Backpack',
        price: 1790,
        image: 'https://m.media-amazon.com/images/I/91x+9JpRhVL._AC_UY580_.jpg',
        description: 'Lightweight backpack, suitable for travel',
        category: 'Toy Story'
      },
      {
        id: 29,
        name: 'Toy Story Buzz Lightyear Projection Watch',
        price: 1290,
        image: 'https://m.media-amazon.com/images/I/81bHbB-taJL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Projection watch, display time',
        category: 'Toy Story'
      },
      {
        id: 30,
        name: 'Toy Story Toy Story Pajama Set',
        price: 1990,
        image: 'https://i.ebayimg.com/thumbs/images/g/QScAAOSwaIFnoPL~/s-l1200.jpg',
        description: 'Childrens pajamas, comfortable fabric',
        category: 'Toy Story'
      },
      {
        id: 31,
        name: 'Toy Story Toy Story Baseball Cap',
        price: 790,
        image: 'https://gw.alicdn.com/imgextra/i1/2210831850106/O1CN01rL4Ju41CeawC56eFH_!!2-item_pic.png_.webp',
        description: 'Childrens Baseball Cap, Sun Protection',
        category: 'Toy Story'
      },
      {
        id: 32,
        name: 'Toy Story Toy Story Childrens Socks 3 Pairs',
        price: 590,
        image: 'https://m.media-amazon.com/images/I/81pcLQhGXtL._AC_SX679_.jpg',
        description: 'Childrens Socks, Comfortable and Breathable',
        category: 'Toy Story'
      },
      {
        id: 33,
        name: 'Toy Story Toy Story Childrens T-shirt',
        price: 990,
        image: 'https://gw.alicdn.com/imgextra/i2/2206841533317/O1CN01mf5uOv1aNEg2FNPfL_!!2-item_pic.png_.webp',
        description: 'Childrens T-shirt, pure cotton fabric',
        category: 'Toy Story'
      },
      {
        id: 34,
        name: 'Toy Story Toy Story mobile phone case',
        price: 790,
        image: 'https://gw.alicdn.com/imgextra/i3/3369688614/O1CN01YjFpef2DVGZEL8lIB_!!3369688614.jpg_Q75.jpg_.webp',
        description: 'Mobile phone protective case, multiple models available',
        category: 'Toy Story'
      },
      {
        id: 35,
        name: 'Toy Story Toy Story keychain',
        price: 490,
        image: 'https://media.karousell.com/media/photos/products/2022/12/21/711__toy_story___1671637975_e771d4a8_progressive',
        description: 'Exquisite keychain, multiple models available',
        category: 'Toy Story'
      }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_WISHLIST(state, product) {
      const existingItem = state.wishlist.find(item => item.id === product.id);
      if (!existingItem) {
        state.wishlist.push(product);
      }
    },
    REMOVE_FROM_WISHLIST(state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId);
    },
    ADD_TO_CART(state, { product, quantity }) {
      const existingItem = state.cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({
          ...product,
          quantity
        });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    addToWishlist({ commit }, product) {
      commit('ADD_TO_WISHLIST', product);
    },
    removeFromWishlist({ commit }, productId) {
      commit('REMOVE_FROM_WISHLIST', productId);
    },
    addToCart({ commit, state }, { product, quantity }) {
      // Check if adding this product would exceed Rs. 50,000
      const currentTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      const newItemTotal = product.price * quantity;
      const potentialTotal = currentTotal + newItemTotal;

      if (potentialTotal > 50000) {
        throw new Error("Cannot add to cart. Total would exceed Rs. 50,000");
      }

      commit('ADD_TO_CART', { product, quantity });
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateQuantity({ commit, state }, { productId, quantity }) {
      // Check if updating quantity would exceed Rs. 50,000
      const item = state.cart.find(item => item.id === productId);

      if (item) {
        const currentTotal = state.cart.reduce((total, cartItem) => {
          if (cartItem.id === productId) {
            return total;
          }
          return total + (cartItem.price * cartItem.quantity);
        }, 0);

        const newItemTotal = item.price * quantity;
        const potentialTotal = currentTotal + newItemTotal;

        if (potentialTotal > 50000) {
          throw new Error("Cannot update quantity. Total would exceed Rs. 50,000");
        }

        commit('UPDATE_QUANTITY', { productId, quantity });
      }
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  },
  getters: {
    wishlist: state => state.wishlist,
    isInWishlist: state => productId => {
      return state.wishlist.some(item => item.id === productId);
    },
    products: state => state.products,
    cart: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  }
})
