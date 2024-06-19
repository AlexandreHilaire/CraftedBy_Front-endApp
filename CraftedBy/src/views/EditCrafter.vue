<script setup>
const props = defineProps({
  crafterData: Object,
});
</script>
<template>
  <GenericForms :crafterData="props.crafterData" />
</template>