import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoriesStore = defineStore('categories', () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const categories = ref([]);

  async function getCategories() {
    const response = await axios.get(`${apiUrl}/categories`);
    categories.value = response.data;
  }

  async function createCategory(category_name){
    await axios.post(`${apiUrl}/categories`, {category_name});
  }

  return {getCategories, createCategory, categories};
}); 