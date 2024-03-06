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
  const filteredProducts = ref();
  async function fetchProductsByCategory(category) {
    console.log(category, products)
    if (!category) {
      return filteredProducts.value = products.value;
    }
    console.log(filteredProducts)
    try {
      const response = await axios.get(`${apiUrl}/products/category/${category}`);
      filteredProducts.value = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits par catégorie :', error);
    }
  }

  return { fetchProducts, fetchCategories, fetchProductsByCategory, products, categories, filteredProducts };
});