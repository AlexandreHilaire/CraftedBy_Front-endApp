<script setup>
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';
import { userCartStore } from '@/stores/cart';
import { useOrderStore } from '@/stores/orders';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import {useRouter} from 'vue-router';

const apiUrl = import.meta.env.VITE_API_URL;
const stripeKey = import.meta.env.VITE_PUBLIC_STRIPE;
const token = ref(null);
const stripe = ref(null);
const cardElement = ref(null);
const orderStore = useOrderStore();
const cartStore = userCartStore();
const router = useRouter();

onMounted(async () => {

  try {
    const response = await axios.post(`${apiUrl}/payment/initiate`, {
      order_id: orderStore.order_id,
      currency: 'EUR'
    });
    token.value = response.data.token;
    stripe.value = await loadStripe(stripeKey);
    const options = {
      clientSecret: response.data.client_secret,
    };
    cardElement.value = stripe.value.elements(options);
    const paymentElement = cardElement.value.create('payment');
    paymentElement.mount('#cardElement');
  }
  catch (error) {
    console.log('error initiate payment', error);
  }
});

const submitPayment = async (e) => {
  e.preventDefault();

  const { error } = await stripe.value.confirmPayment({
    elements: cardElement.value,
    redirect: "if_required"
  });

  if (error === undefined) {
    axios.post(`${apiUrl}/payment/complete`, {
    token: token.value,
    });
    console.log("CART",cartStore.totalPrice);
    cartStore.clearCart();
    router.push({name:'home'});
  }
  else {
    axios.post(`${apiUrl}/payment/failure`, {
      token: token.value,
      code: error.code,
      description: error.message,
    });
  };
};
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h1>Stripe</h1>
    <div id="cardElement">

    </div>
    <ButtonPrimary label="Payer avec Stripe" @click="submitPayment" />
  </div>
</template>