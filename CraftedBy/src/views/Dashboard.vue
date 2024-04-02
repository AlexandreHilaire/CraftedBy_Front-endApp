<script setup>import { useUserStore } from '@/stores/user';
import { onBeforeMount, ref } from 'vue';


const store = useUserStore();
const user = ref();

onBeforeMount(async () => {
    user.value = await store.userAuth();
});


</script>

<template>
    <h1>Profil</h1>
    <div class="flex justify-center">
        
    </div>
</template>