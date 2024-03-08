<script setup>
import axios from 'axios';
import { ref } from 'vue';

const user = ref();
axios.get('https://fakestoreapi.com/users/1')
  .then(response => {
    console.log(response.data);
    user.value = response.data;
  })
  .catch(error => {
    console.error(error);
  });

</script>

<template>

<div class="flex mx-auto place-content-center">
    <Steps />
</div>
    <p>{{ user.username }}</p>
</template>