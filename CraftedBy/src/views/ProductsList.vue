<script setup>import axios from 'axios';
import { ref } from 'vue'
import ProductCardList from '@/components/Organisms/ProductCardList.vue';

const products = ref([])

const getData = async () => {
    try {
        const response = await axios('https://fakestoreapi.com/products');
        products.value = response.data;
    }
        catch (error) {
        console.log('error fetching data', error);
    }
};

getData();

</script>

<template>
    <header>
        <Header />
    </header>
    <main class="flex flex-col place-items-center py-5">
        <h1 class="text-6xl p-5">Liste des produits</h1>
        <div class="grid md:grid-cols-3 gap-20 ">
        <span v-for="product in products" :key="product.id">
           <ProductCardList :product="product" />
        </span>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
