<script setup>
import axios from 'axios'
import { ref } from 'vue'

const user = ref()
axios
  .get('https://fakestoreapi.com/users/1')
  .then((response) => {
    console.log(response.data)
    user.value = response.data
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
<div class="mx-auto flex flex-col items-center">
    <Steps />
    <p>{{ user.username }}</p>
    <div class="flex flex-row w-full space-x-4 justify-center m-10">
      <div class="card w-96 bg-slate-600 text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Selectionnez une adresse de livraison</h2>
          <div class="card-actions justify-end">
            <select class="select select-bordered w-full max-w-xs">
              <option v-for="address in user.address" :key="address" value="address">
                {{ address }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="card w-96 bg-slate-600 text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Selectionnez une adresse de facturation</h2>
          <div class="card-actions justify-end">
            <select class="select select-bordered w-full max-w-xs">
              <option v-for="address in user.address" :key="address" value="address">
                {{ address }}
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
