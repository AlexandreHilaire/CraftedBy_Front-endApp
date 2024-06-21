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
      const response = await axios.get(`${apiUrl}/categories`);
      categories.value = response.data;
    } catch (error) {
      console.log('error fetching data', error);
    }
  }
  const filteredProducts = ref();
  async function fetchProductsByCategory(category) {
    try {
      const response = await axios.get(`${apiUrl}/products/search/${category}`);
      filteredProducts.value = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits par catégorie :', error);
    }
  }
  const productData = ref();
  async function getProductData(id) {
    try {
      const response = await axios(`${apiUrl}/products/${id}`);
      productData.value = response.data;
    }
    catch (error) {
      console.log('error fetching data', error);
    }
  }

  async function createProduct(user_id, name, pmodel_name, unit_price, description, color, customizable, categories_names, materials_names, is_active = 0, status = 0 ) {
      try {
        axios.post(`${apiUrl}/products`, {user_id, name, pmodel_name, unit_price, description, color, customizable, categories_names, materials_names, is_active, status});
      }
      catch(error){
        console.log('erreur lors de la création du produit', error);
      }
  }

  return { fetchProducts, fetchCategories, fetchProductsByCategory, getProductData,createProduct, products, categories, filteredProducts, productData };
});