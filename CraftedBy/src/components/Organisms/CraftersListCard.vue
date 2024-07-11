<script setup>
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimary.vue';

const props = defineProps({
    crafter: Object
})

</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl flex place-items-center flex-wrap md:flex-nowrap">
    <figure>
      <img src="/crafter.svg" alt="crafter" class="w-full object-contain" />
    </figure>
    <div class="card-body">
      <h2 class="card-title md:text-5xl sm:text-2xl">{{props.crafter.crafter_name}}</h2>
      <p>{{props.crafter.information}}</p>
      <div class="card-actions justify-end">
        <RouterLink :to="{ name: 'crafter', params: { id: props.crafter.id } }">
          <ButtonPrimary label="Visiter" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
