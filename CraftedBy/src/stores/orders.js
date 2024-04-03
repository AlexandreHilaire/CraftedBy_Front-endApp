import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {

    const selectedDeliveryAddress = ref();
    const selectedBillingAddress = ref();
    const cartItems = ref();

    const validatedCart = (cartItemsValidated) => {
        cartItems.value = cartItemsValidated;
    }
    const validatedAddresses = (selectedDeliveryAddressByUser, selectedBillingAddressByUser) => {
        selectedDeliveryAddress.value = selectedDeliveryAddressByUser;
        selectedBillingAddress.value = selectedBillingAddressByUser;
    }
    return {validatedAddresses, validatedCart, selectedDeliveryAddress, selectedBillingAddress, cartItems};
});