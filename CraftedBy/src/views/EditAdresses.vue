<script setup>
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

onMounted ( async () => {
  await loadAddresses();
});

</script>
<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1>Modifier mes adresses</h1>
    <div v-for="adresse in userAddresses" :key="adresse.id">
    <p>{{ adresse.adress_name }}</p>
    <p>{{ adresse.address_firstname }}</p>
    <p>{{ adresse.first_address }}</p>
    <p>{{ adresse.postal_code }}</p>
    </div>
    <p>Nom adresse</p>
    <p>first adresse</p>
    <p>postal code</p>
  </div>
</template>