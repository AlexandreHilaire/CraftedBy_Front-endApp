<script setup>
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue';
import { useCraftersStore } from '@/stores/crafters';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

const crafterStore = useCraftersStore();

const route = useRoute()
const crafterId = ref(route.params.id);
crafterStore.fetchCrafterData(crafterId.value);

let products = ['1', '2', '3', '4', '5'] ;

</script>

<template>
  <div class="m-5 flex justify-center">
    <RouterLink :to="{name:'editCrafter', params: {crafterData: crafterStore.crafterData}}">
      <ButtonPrimary label="Editer la page"/>
    </RouterLink>
    <h1 class="m-5 flex justify-center text-2xl">{{crafterStore.crafterData.crafter_name}}</h1>
  </div>

  <div class="m-5 flex justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/crafter.svg" alt="crafter_profile_pic" />
      </figure>
      <div class="card-body">
        <h2 class="card-title justify-center text-xl">Intro :</h2>
        <p>
          {{crafterStore.crafterData.information}}
        </p>
        <div class="card-actions justify-center">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1"><PhMapPinLine /></div>
            <div
              tabindex="0"
              class="card dropdown-content card-compact z-[1] w-64 bg-primary p-2 text-primary-content shadow"
            >
              <div class="card-body">
                <h3 class="card-title">Emplacement</h3>
                <p>{{crafterStore.crafterData.location}}</p>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1"><PhScroll /></div>
            <div
              tabindex="0"
              class="card dropdown-content card-compact z-[1] w-64 bg-primary p-2 text-primary-content shadow"
            >
              <div class="card-body">
                <h3 class="card-title">Mon histoire</h3>
                <p>{{crafterStore.crafterData.story}}</p>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1"><PhHammer /></div>
            <div
              tabindex="0"
              class="card dropdown-content card-compact z-[1] w-64 bg-primary p-2 text-primary-content shadow"
            >
              <div class="card-body">
                <h3 class="card-title">Mon savoir faire</h3>
                <p>{{crafterStore.crafterData.crafting_process}}</p>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1"><PhFire /></div>
            <div
              tabindex="0"
              class="card dropdown-content card-compact z-[1] w-64 bg-primary p-2 text-primary-content shadow"
            >
              <div class="card-body">
                <h3 class="card-title">Ce que j'aime le plus</h3>
                <p>{{crafterStore.crafterData.material_preference}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 class="flex justify-center text-xl m-5">Mes productions</h2>
<div class="flex justify-center m-5" v-for="product in products" :key='product'>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="/product.svg"
        alt="product"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Product</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <div class="card-actions">
        <ButtonPrimary label="Acheter"/>
      </div>
    </div>
  </div>
</div>
</template>
