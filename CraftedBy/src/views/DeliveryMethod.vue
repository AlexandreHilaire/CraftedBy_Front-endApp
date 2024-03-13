<script setup>

</script>

<template>

<div class="mx-auto flex place-content-center">
    <Steps />
  </div>

  
  <div class="flex place-content-center">
    <RouterLink :to="{ name: 'payment' }">
      <ButtonPrimary :label="'Poursuivre'" />
    </RouterLink>
  </div>



</template>