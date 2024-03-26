<script setup>
import { userCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import {  storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product_id = ref(route.params.id);
const cartStore = userCartStore();
const productStore = useProductStore();

productStore.getProductData(product_id.value);

const {productData} = storeToRefs(productStore)
console.log("product data", productData.value)

function addProductToCart() {
  cartStore.addProductToCart(productData);
}

</script>

<template>
  <div v-if="productData" class="card card-side bg-base-100 shadow-xl flex place-items-center w-1/2 mx-auto flex-wrap md:flex-nowrap">
    <figure>
      <img :src="productData.images[0]" />
    </figure>
    <div class="card-body">
       <h2 class="card-title">{{ productData.name }}</h2>
      <p>{{ productData.description }}</p>
      <p class="font-semibold justify-end">{{ productData.unit_price }} €</p>
      <div class="card-actions justify-end">
        <ButtonPrimary @click="addProductToCart" :label="'Acheter'" />
       </div>
    </div>
  </div>
</template>