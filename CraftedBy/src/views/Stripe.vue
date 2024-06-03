<script setup>
import ValidateFormsButton from '@/components/Atoms/Buttons/ValidateFormsButton.vue';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const stripeKey = import.meta.env.VITE_PUBLIC_STRIPE;
const token = ref(null);
const stripe = ref(null);
const cardElement = ref(null);

onMounted(async () => {

  try {
    const response = await axios.post(`${apiUrl}/payment/initiate`, {
      amount: 150,
      currency: 'EUR'
    });

    console.log(response);
    token.value = response.data.token;
    stripe.value = await loadStripe(stripeKey);
    console.log('cle', stripeKey);
    console.log('elements', stripe.value);
    const options = {
      clientSecret: response.data.client_secret,
    };
    console.log('clients', options);
    console.log('response', response.data);

    const elements = stripe.value.elements(options);
    cardElement.value = elements.create('payment', options);
    cardElement.value.mount('#cardElement');
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
  } else {
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
    <ValidateFormsButton label="Payer avec Stripe" @click="submitPayment" />
  </div>
</template>