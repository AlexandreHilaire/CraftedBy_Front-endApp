<script setup>
import { useCraftersStore } from '@/stores/crafters';
import CraftersListCard from '@/components/Organisms/CraftersListCard.vue';
import { onBeforeMount } from 'vue';

const craftersStore = useCraftersStore();

onBeforeMount( async () => {
    await craftersStore.fetchCrafters();
});

</script>

<template>
    <h1 class="text-2xl flex justify-center">Voici nos artisans</h1>
    <div v-for="crafter in craftersStore.crafters" :key="crafter" class="flex flex-col items-center m-20">
    <CraftersListCard :crafter="crafter"/>
    </div>
</template>