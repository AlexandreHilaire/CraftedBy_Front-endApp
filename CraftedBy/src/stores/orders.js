import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useOrderStore = defineStore('order', () => {
    const delivery_address = ref();
    const facturation_address = ref();
    const products = ref();
    const apiUrl = import.meta.env.VITE_API_URL;

    const user_id = ref();
    const order_id = ref();

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
            const order = await axios.post(`${apiUrl}/orders`, { user_id, delivery_address, facturation_address, products });
            order_id.value = order.data.id;
        }
        catch (error) {
            console.log('erreur de creation de commande', error)
        }
    }

    async function createInvoice (order_id) {
        try {
            const response = await axios.post(`${apiUrl}/invoice`, {order_id}, {responseType: 'blob'});
            const blob = new Blob([response.data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            window.open(url, '_blank');
        }
        catch(error){
            console.log('error creating invoice', error);
        }

    }
    return { validatedAddresses, validatedCart, createOrder, createInvoice, delivery_address, facturation_address, products, user_id, order_id };
});