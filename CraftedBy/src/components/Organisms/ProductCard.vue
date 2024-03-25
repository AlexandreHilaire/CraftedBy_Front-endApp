<script setup>
import { userCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';

const cartStore = userCartStore();
const productStore = useProductStore;

const props = defineProps({
  id: String
});

const productData = productStore.getProductData(props.id);

function addProductToCart() {
  cartStore.addProductToCart(props.product);
}

</script>

<template>
  <div v-if="productData" class="card card-side bg-base-100 shadow-xl flex place-items-center w-1/2 mx-auto flex-wrap md:flex-nowrap">
    <figure>
      <img :src="productData.image" />
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