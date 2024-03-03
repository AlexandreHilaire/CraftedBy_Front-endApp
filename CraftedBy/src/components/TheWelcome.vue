<script setup>
import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
</script>

<template>

<h1 class="text-6xl">Bienvenue</h1>
<button class="btn btn-error">button</button>
<button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
<PhHorse />
<PhHeart :size="32" color="hotpink" weight="fill"/>
<PhCube/>
</template>
