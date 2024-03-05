<script setup>

const props = defineProps({
    product: Object
})

</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <!-- * :src and not {{ props.product.image }} because binding -->
            <img :src="props.product.image" alt="productImage" class="h-50 w-50" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ props.product.title }}</h2>
            <p>{{ props.product.description }}</p>
            <div class="card-actions">
                <ButtonPrimary />
            </div>
            <p class="font-semibold">{{ props.product.price }} €</p>
        </div>
    </div>
</template>