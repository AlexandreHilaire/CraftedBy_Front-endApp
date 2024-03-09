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
  <div class="mx-auto flex place-content-center">
    <Steps />
  </div>
  <p>{{ user.username }}</p>
  <div class="flex justify-center space-x-80">
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
  <div class="flex place-content-center">
    <ButtonPrimary :label="'Valider'"/>
  </div>
</template>
