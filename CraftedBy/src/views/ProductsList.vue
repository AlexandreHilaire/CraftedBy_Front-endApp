<script setup>
import { useProductStore } from '@/stores/product'
import { ref, onMounted, watch } from 'vue'
import ProductCardList from '@/components/Organisms/ProductCardList.vue';

const productStore = useProductStore();

const selectedCategory = ref('');

const fetchProductsByCategory = async (category) => {
    await productStore.fetchProductsByCategory(category.category_name);
};

// * Async function for to order requests and resolve conflicts
onMounted( async () => {

    await productStore.fetchCategories();
    await productStore.fetchProducts();
    
});

watch(selectedCategory, (newValue, oldValue) => {
    if (newValue !== oldValue){
        fetchProductsByCategory(newValue);
    }
});

</script>

<template>


    <main class="flex flex-col place-items-center py-5">
        <h1 class="text-6xl p-5">Liste des produits</h1>
        <select v-model="selectedCategory" class="select select-bordered w-full max-w-xs" @change="productStore.fetchProductsByCategory(selectedCategory)">
            <option selected value=''>Tous</option>
            <option v-for="category in productStore.categories" :key="category" :value="category">{{ category.category_name }}</option>
        </select>
        <div class="grid md:grid-cols-3 gap-20 p-5 ">
        <template v-if="selectedCategory === '' ">
            <template v-for="product in productStore.products" :key="product.name">
                <ProductCardList :product="product" />
            </template>
        </template>
        <template v-else >
            <template v-for="product in productStore.filteredProducts" :key="product.name">
                <ProductCardList :product="product" />
           </template>
        </template>
        </div>
    </main>
</template>
