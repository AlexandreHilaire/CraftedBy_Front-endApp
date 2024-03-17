<script setup>
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimary.vue';
</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl w-2/4">
    <figure>
      <img src="/crafter.svg" alt="crafter" class="w-[250px] h-[350px]" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">La boutique de l'artisan</h2>
      <p>La description de l'artisan</p>
      <div class="card-actions justify-end">
        <RouterLink to="/crafter">
          <ButtonPrimary label="Visiter" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
