<script setup>
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';
import { useUserStore } from '@/stores/user';
import { ref, onMounted, reactive } from 'vue';


const userStore = useUserStore();

const user = ref();
const user_id = ref();

const userAddresses = reactive({});

const loadAddresses = async () => {
  user.value = await userStore.userAuth();
  user_id.value = user.value.id;
  // * make an array of addresses (display problems before do this)
  userAddresses.value = await userStore.fetchUserAdresses(user_id.value);
  console.log(userAddresses.value);
};

onMounted(async () => {
  await loadAddresses();
});

</script>
<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1>Modifier mes adresses</h1>
    <RouterLink to="/createAdress">
      <ButtonPrimary label="Créer une adresse"/>
    </RouterLink>
    <div v-for="address in userAddresses.value" :key="address.id" class="d-flex flex-col m-5 space-y-5">
      <p>Noms de l'adresse <br />{{ address.address_name }}</p>
      <p>Nom du destinataire <br />{{ address.address_firstname }}</p>
      <p>Adresse <br />{{ address.first_address }}</p>
      <p>Code postal <br />{{ address.postal_code }}</p>
    </div>
  </div>
</template>