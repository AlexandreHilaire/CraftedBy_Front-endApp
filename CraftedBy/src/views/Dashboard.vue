<script setup>import { useUserStore } from '@/stores/user';
import { onBeforeMount, ref } from 'vue';
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';
import { useCraftersStore } from '@/stores/crafters';

const store = useUserStore();
const crafterStore = useCraftersStore();
const user = ref();

async function deleteCrafterPages(crafterPageId){
    if(store.userRole === 'crafter') {
        await crafterStore.deleteCrafterPage(crafterPageId);
    }
    else {
        // TODO Pages 404/403 et messages flottant pour prévenir les utlisisateurs
        console.log('403 Unauthorized'); 
    }
}

onBeforeMount(async () => {
    user.value = await store.userAuth();
    const userId = user.value.id;
    await store.fetchUserRole(userId);
    if (store.userRole === 'crafter'){
        crafterStore.fetchCrafterPages(userId);
    }
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
            <p>Role : {{ store.userRole }}</p>

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
        <div v-if="store.userRole === 'crafter'" class="d-flex">
            <h2 class="m-5 text-2xl justify-center">Mes pages crafter</h2>
            <div v-for="page in crafterStore.crafterPages" :key="page.id" class="m-5 flex flex-col">
                <div class ="m-5">
                    <p class="m-5">{{ page.crafter_name }}</p>
                    <RouterLink :to="{ name: 'crafter', params: { id: page.id } }">
                        <ButtonPrimary label="Voir la page" class="m-5"/>
                    </RouterLink>
                    <ButtonPrimary @click="deleteCrafterPages(page.id)" label="Supprimer"/>
                </div>
            </div>
        </div>
    </div>
</template>