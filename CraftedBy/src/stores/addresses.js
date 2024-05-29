import { defineStore } from 'pinia';
import axios from 'axios';

export const useAddressesStore = defineStore('addresses', () => {

  const apiUrl = import.meta.env.VITE_API_URL;

  async function createAddress(user_id, address_name, address_type, address_firstname, address_lastname, first_address, second_address, postal_code) {
    try {
      await axios.post(`${apiUrl}/addresses`, { user_id, address_name, address_type, address_firstname, address_lastname, first_address, second_address, postal_code });
    }
    catch (error) {
      console.log("erreur lors de la création de l'adresse", error)
    }
  }
  return { createAddress };
});