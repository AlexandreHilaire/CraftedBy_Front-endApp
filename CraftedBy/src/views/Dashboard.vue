<script setup>import { useUserStore } from '@/stores/user';
import { onBeforeMount, ref } from 'vue';
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';


const store = useUserStore();
const user = ref();

onBeforeMount(async () => {
    user.value = await store.userAuth();
});


</script>

<template>
    <h1>Profil</h1>
    <div class="flex justify-center items-center flex-col">
        <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div>
            <h2 class="m-5 text-2xl">Vos informations</h2>
            <p> Adresse mail : {{user.email}} </p>
            <p> Nom : {{user.firstname}} </p>
            <p>Prénom : {{user.lastname}}</p>
            <p>Numéro de téléphone : {{user.phone_number}} </p>

        </div>

        <div class="d-flex">
            <RouterLink to="/createCrafter">
                <ButtonPrimary label="Créer une page crafter" class="m-5" />
            </RouterLink>
            <RouterLink to="/editAdresses">
                <ButtonPrimary label="Éditer mes adresses"  class="m-5"/>
            </RouterLink>
            <RouterLink to="/IdentityParse">
                <ButtonPrimary label="Vérifier mon identité"  class="m-5"/>
            </RouterLink>
        </div>
    </div>
</template>