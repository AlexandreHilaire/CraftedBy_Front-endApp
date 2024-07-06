<script setup>

const props = defineProps({
  productData: Object,
});

</script>

<template>
  <GenericForms :productData = props.productData />
</template>