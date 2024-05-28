<script setup>
import { ref, onBeforeMount } from 'vue';
import ValidateFormsButton from '../Atoms/Buttons/ValidateFormsButton.vue';
import { useRoute } from 'vue-router';
import { useCraftersStore } from '@/stores/crafters';
import { useUserStore } from '@/stores/user';

const crafterStore = useCraftersStore();
const userStore = useUserStore();
const user = ref();

onBeforeMount(async () => {
    user.value = await userStore.userAuth();
});

const route = useRoute();

// crafter form
const crafter_name = ref('');
const location = ref('');
const information = ref('');
const story = ref('');
const crafting_process = ref('');
const material_preference = ref('');

const submitCreateCrafter = async () => {
    const user_id = user.value.id;
    await crafterStore.createCrafter(user_id,crafter_name.value, location.value, information.value, story.value, crafting_process.value, material_preference.value);
}

// Adress form
const searchAdress= ref('');

const submitForm = async () => {
    if (route.name === "createCrafter"){
        await submitCreateCrafter();
    }
    else {
        return;
    }
}
</script>
<template>
        <form @submit.prevent='submitForm' class="flex flex-col gap-2">
            <div v-if="route.name === 'createCrafter'" class="flex flex-col">
                <label class="input input-bordered flex items-center gap-2 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" class="grow" placeholder="Nom d'artisant" v-model="crafter_name"/>
                </label>
                <label class="input input-bordered flex items-center gap-2 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" class="grow" placeholder="Emplacement" v-model="location"/>
                </label>
                <textarea class="textarea textarea-bordered m-2" placeholder="Présentation" v-model="information"></textarea>
                <textarea class="textarea textarea-bordered m-2" placeholder="Histoire" v-model="story"></textarea>
                <textarea class="textarea textarea-bordered m-2" placeholder="mon savoir faire" v-model="crafting_process"></textarea>
                <textarea class="textarea textarea-bordered m-2" placeholder="Ce que j'aime le plus travailler" v-model="material_preference"></textarea>
            </div>
            <div v-if="route.name === 'createAdress'">
                <textarea class="textarea textarea-bordered" placeholder="recherchez votre adresse" v-model="searchAdress"></textarea>
            </div>
            <ValidateFormsButton label="Valider" />
        </form>
</template>