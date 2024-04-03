<script setup>
import  { userCartStore } from '@/stores/cart';
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';
import Steps from '@/components/Organisms/Steps.vue';
import { useOrderStore } from '@/stores/orders';

const cartStore = userCartStore();
const orderStore = useOrderStore();

function removeProduct(id){
  cartStore.removeProductFromCart(id);
}
function addProductToCart(item) {
  cartStore.addProductToCart(item);
}
function removeOneQuantityProductFromCart(itemId) {
  cartStore.removeOneProductQuantityFormCart(itemId);
}

function validatedCart(){
  orderStore.validatedCart(cartStore.cartItems);
}

</script>

<template>
<div class="flex mx-auto place-content-center">
    <Steps />
</div>
<div class="overflow flex w-3/4 mx-auto">
  <table class="table">
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
    <tbody class="overflow-y-auto">
      <!-- rows -->
      <tr v-for="item in cartStore.cartItems" :key="item.id">
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="item.images" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
            <button @click="addProductToCart(item)" class="align-middle">
                <PhPlusCircle width="25" height="25" color="#E0B841"/>
            </button>
                {{ item.quantity }}
            <button class="align-middle">
                <PhMinusCircle @click="removeOneQuantityProductFromCart(item.id)" width="25" height="25" color="#E0B841"/>
            </button>
        </td>
        <th>
          <button class="btn btn-ghost btn-xs align-middle"> {{ (item.unit_price * item.quantity).toFixed(2) }} €</button>
          <button class="align-middle">
            <PhTrash width="25" height="25" color="#E0B841" @click="removeProduct(item.id)" />
          </button>
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
        <th> total : {{ cartStore.totalPrice }} € </th>
      </tr>
    </tfoot>
  </table>
  <div class = "flex justify-end mt-4 items-end">
    <RouterLink :to="{name: 'deliveryAddresses' }">
      <ButtonPrimary :label="'Poursuivre'" @click="validatedCart"/>
    </RouterLink>
  </div>
</div>


</template>
