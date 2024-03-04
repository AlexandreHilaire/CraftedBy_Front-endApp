<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Organisms/Header.vue';
import Footer from './components/Organisms/Footer.vue';

</script>

<template>
<div>
  <Header />

  <RouterView />

  </div>
  <Footer />
</template>

<style scoped>

</style>
