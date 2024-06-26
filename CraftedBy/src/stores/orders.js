import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useOrderStore = defineStore('order', () => {
    const delivery_address = ref();
    const facturation_address = ref();
    const products = ref();
    const apiUrl = import.meta.env.VITE_API_URL;

    const user_id = ref();

    console.log("id", user_id.value)

    const validatedCart = (cartItemsValidated) => {

        const productsData = cartItemsValidated.map(item => ({
            product_name: item.name,
            product_id: item.id,
            quantity: item.quantity,
            unit_price: item.unit_price
        }));
        products.value = productsData;
    }

    const validatedAddresses = (selectedDeliveryAddressByUser, selectedBillingAddressByUser) => {
        delivery_address.value = selectedDeliveryAddressByUser;
        facturation_address.value = selectedBillingAddressByUser;
    }
    async function createOrder(user_id, delivery_address, facturation_address, products) {
        try {
            await axios.post(`${apiUrl}/orders`, { user_id, delivery_address, facturation_address, products })
        }
        catch (error) {
            console.log('erreur de creation de commande', error)
        }
    }
    return { validatedAddresses, validatedCart, createOrder, delivery_address, facturation_address, products, user_id };
});