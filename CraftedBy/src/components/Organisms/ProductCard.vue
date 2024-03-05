<script setup>

const props = defineProps({
    product: Object
});

</script>

<template>

<div class="card card-side bg-base-100 shadow-xl">
  <figure><img :src="props.product.image"/></figure>
  <div class="card-body">
    <h2 class="card-title">{{props.product.title}}</h2>
    <p>{{props.product.description}}</p>
    <div class="card-actions justify-end">
      <ButtonPrimary />
    </div>
  </div>
</div>

</template>