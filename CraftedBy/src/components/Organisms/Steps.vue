<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const getStepClass = (name) => {
  if (route.name === name) {
    return 'step step-primary';
  }
  else{
    return 'step';
  }
};
</script>

<template>
  <ul class="steps">
    <li :class="getStepClass('purchaseFunnel')">Cart</li>
    <li :class="getStepClass('deliveryAddresses')">Delivery informations </li>
    <li :class="getStepClass('deliveryMethod')">Delivery method</li>
    <li :class="getStepClass('payment')">Payment</li>
  </ul>
</template>