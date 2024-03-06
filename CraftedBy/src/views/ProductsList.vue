<script setup>
import { useProductStore } from '@/stores/product'
import axios from 'axios';
import { ref, computed, onMounted } from 'vue'
import ProductCardList from '@/components/Organisms/ProductCardList.vue';

const productStore = useProductStore();

const selectedCategory = ref('');


// * Async function for to order requests and resolve conflicts
onMounted( async () => {

    await productStore.fetchCategories();
    await productStore.fetchProducts();
    await productStore.fetchProductsByCategory(selectedCategory.value);
})

</script>

<template>


    <main class="flex flex-col place-items-center py-5">
        <h1 class="text-6xl p-5">Liste des produits</h1>
        <select v-model="selectedCategory" class="select select-bordered w-full max-w-xs" @change="productStore.fetchProductsByCategory(selectedCategory)">
            <!-- <option disabled value="">Sélectionnez une catégorie</option> -->
            <option selected value=''>Tous</option>
            <option v-for="category in productStore.categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <div class="grid md:grid-cols-3 gap-20 p-5 ">
        <template v-for="product in productStore.filteredProducts" :key="product.id">
           <ProductCardList :product="product" />
        </template>
        </div>
    </main>
</template>
