<script setup>
import axios from 'axios';
import { ref } from 'vue'

import ProductCard from '@/components/Organisms/ProductCard.vue';

const props = defineProps(['id']);

</script>

<template>
    <main>
        <ProductCard :id = 'props.id' />
    </main>
</template>