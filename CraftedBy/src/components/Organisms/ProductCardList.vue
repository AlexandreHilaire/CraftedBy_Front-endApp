<script setup>

const props = defineProps({
    product: Object
})

</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="bg-white p-2">
            <!-- * :src and not {{ props.product.image }} because binding -->
            <img :src="props.product.image" alt="productImage" class="h-64 object-contain" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ props.product.name }}</h2>
            <p>{{ props.product.description }}</p>
            <p> Couleur : {{ props.product.color }}</p>
            <div class="card-actions">
                <RouterLink :to="{ name: 'product', params: { id: props.product.id } }">
                    <ButtonPrimary :label="'Je veux'" />
                </RouterLink>
            </div>
            <p class="font-semibold">{{ props.product.unit_price }} €</p>
        </div>
    </div>
</template>