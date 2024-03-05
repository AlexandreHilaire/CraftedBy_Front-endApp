<script setup>import axios from 'axios';
import { ref } from 'vue'

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
    <main>
        <h1 class="text-2xl">productlist</h1>
        <li v-for="product in products" :key="product.id">
            {{product.title}} <br>
            {{product.price}}<br>
            {{product.description}}<br><br>
        </li>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
