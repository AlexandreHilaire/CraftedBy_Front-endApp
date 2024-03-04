<script setup>

import TheWelcome from '../components/TheWelcome.vue'
import CraftedBy from '@/components/Atoms/Logos/CraftedBy.vue';
import CartButton from '@/components/Atoms/Buttons/CartButton.vue';
import UserButton from '@/components/Atoms/Buttons/UserButton.vue';



</script>

<template>
  <main>
    <TheWelcome />
    <ButtonPrimary />
    <ButtonWarning />
    <ButtonDefault/>
    <CraftedBy />
    <CartButton />
    <UserButton />
  </main>
</template>
