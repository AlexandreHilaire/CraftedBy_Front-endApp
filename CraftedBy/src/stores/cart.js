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

        // * Because if false findIndex return -1
        if (productAlreadyinCart !== -1) {
            cartItems.value[productAlreadyinCart].quantity += 1;
        }
        else {
            cartItems.value.push({ ...product, quantity: 1 });
        };
        // * stock key/value 'CART' / cartItems.value in Json to stock it in the localStorage
        localStorage.setItem('CART', JSON.stringify(cartItems.value));
    }

    const removeOneProductQuantityFormCart = (productId) => {
        // * findIndex returns the index of the first element in the cartItems.value array whose ID is equal to productId. 
        const productIndex = cartItems.value.findIndex(item => item.id === productId);

        if (productIndex !== -1 && cartItems.value[productIndex].quantity > 1) {
            cartItems.value[productIndex].quantity--;
            localStorage.setItem('CART', JSON.stringify(cartItems.value));
        }
    };

    const removeProductFromCart = (productId) => {
        // * filters() returns a new array with all elements whose ID is not equal to productId. 
        cartItems.value = cartItems.value.filter((item) => item.id !== productId);
        localStorage.setItem('CART', JSON.stringify(cartItems.value));
    };

    const totalPrice = computed(() => {
        // * reduce() : reduce the array on each elements, resulting in a single value.
        return (cartItems.value.reduce((total, item) => total + (item.unit_price * item.quantity), 0)).toFixed(2);
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