<script setup>
import { useProductStore } from '@/stores/product'
import axios from 'axios';
import { ref, computed } from 'vue'
import ProductCardList from '@/components/Organisms/ProductCardList.vue';

const productStore = useProductStore();

</script>

<template>


    <main class="flex flex-col place-items-center py-5">
        <h1 class="text-6xl p-5">Liste des produits</h1>
        <select v-model="selectedCategory" class="select select-bordered w-full max-w-xs">
            <option disabled value="">Sélectionnez une catégorie</option>
            <option value="">Tous</option>
            <option v-for="category in productStore.categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <div class="grid md:grid-cols-3 gap-20 p-5 ">
        <span v-for="product in productStore.products" :key="product.id">
           <ProductCardList :product="product" />
        </span>
        </div>
    </main>
</template>
