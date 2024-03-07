import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const userCartStore = defineStore('cart', () => {

    const cartItems = ref(JSON.parse(localStorage.getItem('CART')) || [] );
    
    const addProductToCart = (product) => {
        cartItems.value.push({ ...product });
        window.localStorage.setItem('CART', JSON.stringify(cartItems.value));
      };
    const removeProductFromCart = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    localStorage.setItem('CART', JSON.stringify(cartItems.value));
    };

    const totalPrice = computed(() => {
        return cartItems.value.reduce((total, item) => total + item.price, 0);
      });

    return { cartItems, addProductToCart, removeProductFromCart, totalPrice };
});