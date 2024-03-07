import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const userCartStore = defineStore('cart', () => {

    const cartItems = ref(JSON.parse(localStorage.getItem('CART')) || [] );
    
    const totalItemsQuantity = ref ();

    const addProductToCart = (product) => {
        const productAlreadyinCart = cartItems.value.findIndex(item => item.id === product.id);

        if (productAlreadyinCart !== -1){
            cartItems.value[productAlreadyinCart].quantity += 1;
        }
        else {
        cartItems.value.push({ ...product, quantity: 1 });
        };
        totalItemsQuantity.value += 1;
        localStorage.setItem('CART', JSON.stringify(cartItems.value));
    }
    const removeProductFromCart = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    localStorage.setItem('CART', JSON.stringify(cartItems.value));
    };

    const totalPrice = computed(() => {
        // * round total price with 2 decimals
        return Math.round((cartItems.value.reduce((total, item) => total + item.price, 0) *100)) /100;
      });

    return { cartItems, addProductToCart, removeProductFromCart, totalPrice };
});