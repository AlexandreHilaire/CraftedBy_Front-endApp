<script setup>
import { userCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import { useUserStore } from '@/stores/user';
import {  storeToRefs } from 'pinia';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();
const product_id = ref(route.params.id);
const cartStore = userCartStore();
const productStore = useProductStore();
const user = ref();

productStore.getProductData(product_id.value);

const {productData} = storeToRefs(productStore)

function addProductToCart() {
  cartStore.addProductToCart(productData.value);
}

onBeforeMount(async () => {
  user.value = await userStore.userAuth()
  const userId = user.value.id
  await userStore.fetchUserRole(userId)
});

</script>

<template>
  <div v-if="productData" class="card card-side bg-base-100 shadow-xl flex place-items-center flex-wrap md:flex-nowrap">
    <figure>
      <img :src="productData.images[0]" class="w-full object-contain" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ productData.name }}</h2>
      <p>{{ productData.description }}</p>
      <p class="font-semibold justify-end">{{ productData.unit_price }} €</p>
      <div class="card-actions justify-end">
        <ButtonPrimary @click="addProductToCart" :label="'Acheter'" />
        <div v-if="userStore.userRole === 'crafter'">
          <RouterLink :to="{name:'editProduct', params: {ProductId: product_id}}">
              <ButtonPrimary label="Editer le produit"/>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>