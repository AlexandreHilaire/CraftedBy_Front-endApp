<script setup>
import { useUserStore } from '@/stores/user';
import { onBeforeMount, reactive, ref } from 'vue';

const userStore = useUserStore();
const user = ref();
const user_id = ref();
// * UserAddresses array
const userAddresses = reactive({});
const loadAddresses = async () => {
  user.value = await userStore.userAuth();
  user_id.value = user.value.id;
// * make an array of addresses (display problems before do this)
  userAddresses.addresses = await userStore.fetchUserData(user_id.value);
};
loadAddresses();



</script>

<template>
<div class="mx-auto flex flex-col items-center">
    <Steps />
    <p>nom user</p>
    <div class="flex flex-row w-full space-x-4 justify-center m-10">
      <div class="card w-96 bg-slate-600 text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Sélectionnez une adresse de livraison</h2>
          <div class="card-actions justify-end">
            <select class="select select-bordered w-full max-w-xs">
              <option v-for="address in userAddresses.addresses" :key="address.id">
                {{ address.address_name }},
                {{ address.address_firstname }},
                {{ address.address_lastname }},
                {{address.first_address}},
                {{address.postal_code}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="card w-96 bg-slate-600 text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Sélectionnez une adresse de facturation</h2>
          <div class="card-actions justify-end">
            <select class="select select-bordered w-full max-w-xs">
              <option v-for="address in userAddresses.addresses" :key="address.id">
                {{ address.address_name }},
                {{ address.address_firstname }},
                {{ address.address_lastname }},
                {{address.first_address}},
                {{address.postal_code}}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="flex place-content-center mt-4">
      <RouterLink :to="{ name: 'deliveryMethod' }">
        <ButtonPrimary :label="'Poursuivre'" />
      </RouterLink>
    </div>
  </div>
</template>
