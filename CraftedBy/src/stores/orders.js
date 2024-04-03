import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {

    const selectedDeliveryAddress = ref();
    const selectedBillingAddress = ref();

    const validatedAddresses = (selectedDeliveryAddressByUser, selectedBillingAddressByUser) => {
        selectedDeliveryAddress.value = selectedDeliveryAddressByUser;
        selectedBillingAddress.value = selectedBillingAddressByUser;
    }
    return {validatedAddresses, selectedDeliveryAddress, selectedBillingAddress};
});