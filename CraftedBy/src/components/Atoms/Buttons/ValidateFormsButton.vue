<script setup>

const props = defineProps({
    label: {
        type: String,
        default: 'button',
    }
})
</script>

<template>

<button type="submit" class="btn btn-active btn-primary"> {{ props.label }} </button>

</template>