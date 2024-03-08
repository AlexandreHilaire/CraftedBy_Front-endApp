<script setup>
import  { userCartStore } from '@/stores/cart';
import CartTab from '@/components/Organisms/CartTab.vue';

const cartStore = userCartStore();


</script>

<template>

<div class="overflow flex w-3/4 mx-auto">
  <table class="table ">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Nom</th>
        <th>quantité</th>
        <th>prix</th>
        <th>total</th>
      </tr>
    </thead>
    <tbody>
      <!-- rows -->
      <tr v-for="item in cartStore.cartItems" :key="item.id">
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="item.image" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {{ item.title }}
        </td>
        <td>{{ item.quantity }}</td>
        <th>
          <button class="btn btn-ghost btn-xs"> {{ (item.price * item.quantity).toFixed(2) }} €</button>
        </th>
      </tr>
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th></th>
        <th>Nom</th>
        <th>quantité</th>
        <th>prix</th>
        <th>total : {{ cartStore.totalPrice }} €</th>
      </tr>
    </tfoot>
  </table>
</div>

</template>
