<script setup>import axios from 'axios';


const products = axios.get("https://fakestoreapi.com/products");

console.log(products);

</script>

<template>
    <header>
        <Header />
    </header>
    <main>
        <h1 class="text-2xl">productlist</h1>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
