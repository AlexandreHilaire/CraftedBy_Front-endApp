<script setup>
import { userCartStore } from '@/stores/cart';

const cartStore = userCartStore();

const props = defineProps({
  product: Object
});

function addProductToCart(product) {
  cartStore.addProductToCart(product);
}

</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl flex place-items-center w-1/2 mx-auto flex-wrap md:flex-nowrap">
    <figure>
      <img :src="props.product.image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.product.title }}</h2>
      <p>{{ props.product.description }}</p>
      <p class="font-semibold justify-end">{{ props.product.price }} €</p>
      <div class="card-actions justify-end">
        <ButtonPrimary @click="addProductToCart(props.product)" :label="'Acheter'" />
      </div>
    </div>
  </div>
</template>