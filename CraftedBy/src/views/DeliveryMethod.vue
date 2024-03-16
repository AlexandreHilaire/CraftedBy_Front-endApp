<script setup>
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue'
import { ref } from 'vue'
let pickupRelayList = ['relais1', 'relais2', 'relais3']
let deliveryMethodChoice = ref(null)
</script>

<template>
  <div class="mx-auto flex place-content-center">
    <Steps />
  </div>

  <div class="m-5 mx-auto flex justify-center">
    <select class="select select-warning w-full max-w-xs" v-model="deliveryMethodChoice">
      <option disabled selected>Sélectionnez un mode de livraison</option>
      <option value="home">Domicile</option>
      <option value="pickRelay">Relais Colis</option>
    </select>
  </div>

  <div v-if="deliveryMethodChoice == 'home'" class="m-5 flex flex-col items-center justify-center">
    <p>Votre Adresse de livraison est :</p>
    <p>Lalala rue du test avant backend</p>
    <p>département des enfers</p>
    <p>FRANCE</p>
  </div>

  <div v-if="deliveryMethodChoice == 'pickRelay'" class="m-5 flex flex-col items-center justify-center">
    <ul>
      <li v-for="pickupRelay in pickupRelayList" :key="pickupRelay" class="flex flex-col">
        {{ pickupRelay }}

        <ButtonPrimary label="Choisir" />
      </li>
    </ul>
  </div>

  <div class="flex place-content-center">
    <RouterLink :to="{ name: 'payment' }">
      <ButtonPrimary :label="'Poursuivre'" />
    </RouterLink>
  </div>
</template>
