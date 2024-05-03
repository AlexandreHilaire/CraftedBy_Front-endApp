<script setup>
import CreditCardButton from '@/components/Atoms/Buttons/CreditCardButton.vue'
import PaypalButton from '@/components/Atoms/Buttons/PaypalButton.vue'
import StripeButton from '@/components/Atoms/Buttons/StripeButton.vue'
import { useOrderStore } from '@/stores/orders';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const userStore = useUserStore();
const orderStore = useOrderStore();
const user = ref();
const user_id = ref()

const fetchUserId = async () => {
  user.value = await userStore.userAuth();
  user_id.value = user.value.id;
  console.log(user_id.value)
}
  fetchUserId();

const createOrder = async () => {
  orderStore.createOrder(user_id.value, orderStore.delivery_address, orderStore.facturation_address, orderStore.products)
}

</script>

<template>
  <div class="mx-auto flex place-content-center">
    <Steps />
  </div>
  <div class="m-5 flex place-content-center">
    <h2 class="m-5 text-xl">Choisissez votre moyen de paiement</h2>
  </div>
  <div class="m-5 mx-auto flex flex-row place-content-center">
    <div class="m-5 flex flex-col">
      <h3 class="text-lg font-semibold">Carte bancaire</h3>
      <CreditCardButton />
    </div>
    <div class="m-5 flex flex-col">
      <h3 class="text-lg font-semibold">Stripe</h3>
      <StripeButton />
    </div>
    <div class="m-5 flex flex-col">
      <h3 class="text-lg font-semibold">Paypal</h3>
      <PaypalButton />
    </div>
  </div>
  <div class="flex place-content-center">
    <ButtonPrimary :label="'Acheter'" @click="createOrder" />
  </div>
</template>
