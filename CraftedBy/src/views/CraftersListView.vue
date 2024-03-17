<script setup>
import CraftersListCard from '@/components/Organisms/CraftersListCard.vue';

let crafters = ['crafter1', 'carter2', 'crafter3', 'crafter4'];

</script>

<template>
    <h1 class="text-2xl flex justify-center">Voici nos artisans</h1>
    <div v-for="crafter in crafters" :key="crafter" class="flex flex-col items-center m-20">
    <CraftersListCard />
    </div>
</template>