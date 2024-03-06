<script setup>import axios from 'axios';
import { ref, computed } from 'vue'
import ProductCardList from '@/components/Organisms/ProductCardList.vue';


const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);
const products = ref([]);

// * for select button
const selectedCategory = ref('');
// * Axios request get all data products
const getData = async () => {
    try {
        const response = await axios(`${apiUrl}/products`);
        products.value = response.data;
    }
        catch (error) {
        console.log('error fetching data', error);
    }
};
const ProductsCategories = ref([])

const getCategoriesData = async () => {
    try {
        const response = await axios(`${apiUrl}/products/categories`);
        ProductsCategories.value = response.data;
    }
    catch (error){
        console.log('error fetching data', error);
    }
};

// * Test select input, then apply filter
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }

  return products.value.filter(product => product.category === selectedCategory.value);
});

getCategoriesData();
getData();

</script>

<template>


    <main class="flex flex-col place-items-center py-5">
        <h1 class="text-6xl p-5">Liste des produits</h1>
        <select v-model="selectedCategory" class="select select-bordered w-full max-w-xs">
            <option disabled value="">Sélectionnez une catégorie</option>
            <option value="">Tous</option>
            <option v-for="category in ProductsCategories" :key="category" :value="category">{{ category }}</option>
        </select>
        <div class="grid md:grid-cols-3 gap-20 p-5 ">
        <span v-for="product in filteredProducts" :key="product.id">
           <ProductCardList :product="product" />
        </span>
        </div>
    </main>
</template>
