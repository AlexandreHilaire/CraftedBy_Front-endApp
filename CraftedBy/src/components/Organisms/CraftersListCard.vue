<script setup>
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimary.vue';

const props = defineProps({
    crafter: Object
})

</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl w-2/4">
    <figure>
      <img src="/crafter.svg" alt="crafter" class="w-[250px] h-[350px]" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{props.crafter.crafter_name}}</h2>
      <p>{{props.crafter.information}}</p>
      <div class="card-actions justify-end">
        <RouterLink :to="{ name: 'crafter', params: { id: props.crafter.id } }">
          <ButtonPrimary label="Visiter" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
