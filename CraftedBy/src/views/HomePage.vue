<script setup>

import TheWelcome from '../components/TheWelcome.vue'
import CraftedBy from '@/components/Atoms/Logos/CraftedBy.vue';
import CartIcon from '@/components/Atoms/Buttons/CartIcon.vue';


</script>

<template>
  <main>
    <TheWelcome />
    <ButtonPrimary />
    <ButtonWarning />
    <ButtonDefault/>
    <CraftedBy />
    <CartIcon />
  </main>
</template>
