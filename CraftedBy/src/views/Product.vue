<script setup>
import axios from 'axios';
import { ref } from 'vue'
import ProductCard from '@/components/Organisms/ProductCard.vue';

const props = defineProps(['id']);
const product = ref(null)

const getProductData = async () => {
    try {
        const response = await axios(`https://fakestoreapi.com/products/${props.id}`);
        product.value = response.data;
        console.log("produit", product.value);
    }
    catch (error) {
        console.log('error fetching data', error);
    }
};

getProductData();
</script>

<template>
    <main>
        <ProductCard :product = 'product' />
    </main>
</template>