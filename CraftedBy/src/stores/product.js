import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const products = ref();
  async function fetchProducts() {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      products.value = response.data;
    } catch (error) {
      console.log('error fetching data', error);
    }
  }
  const categories = ref();
  async function fetchCategories() {
    try {
      const response = await axios.get(`${apiUrl}/products/categories`);
      categories.value = response.data;
    } catch (error) {
      console.log('error fetching data', error);
    }
  }


  fetchProducts();
  fetchCategories();

  return { fetchProducts, fetchCategories, products, categories };
});