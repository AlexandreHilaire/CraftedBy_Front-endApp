import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const userCartStore = defineStore('cart', () => {

    const cartItems = ref(JSON.parse(localStorage.getItem('CART')) || []);

    const totalItemsQuantity = computed(() => {
        let total = 0;
        for (let i = 0; i < cartItems.value.length; i++) {
            total += cartItems.value[i].quantity;
        }
        return total;
    });

    const addProductToCart = (product) => {
        const productAlreadyinCart = cartItems.value.findIndex(item => item.id === product.id);

        if (productAlreadyinCart !== -1) {
            cartItems.value[productAlreadyinCart].quantity += 1;
        }
        else {
            cartItems.value.push({ ...product, quantity: 1 });
        };
        localStorage.setItem('CART', JSON.stringify(cartItems.value));
    }

    const removeOneProductQuantityFormCart = (productId) => {
        const productIndex = cartItems.value.findIndex(item => item.id === productId);

        if (productIndex !== -1 && cartItems.value[productIndex].quantity > 1) {
            cartItems.value[productIndex].quantity--;
            localStorage.setItem('CART', JSON.stringify(cartItems.value));
        }
    };

    const removeProductFromCart = (productId) => {
        cartItems.value = cartItems.value.filter((item) => item.id !== productId);
        localStorage.setItem('CART', JSON.stringify(cartItems.value));
    };

    const totalPrice = computed(() => {
        return (cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);
      });

    return {
        cartItems,
        totalPrice,
        totalItemsQuantity,
        addProductToCart,
        removeProductFromCart,
        removeOneProductQuantityFormCart
    };
});