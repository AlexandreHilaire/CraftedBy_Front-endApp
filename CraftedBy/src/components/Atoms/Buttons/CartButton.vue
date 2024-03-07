<script setup>
import { userCartStore } from '@/stores/cart';

const cartStore = userCartStore();
</script>

<template>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <ph-shopping-cart width="50" height="50" color="#E0B841" />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    
                    <span class="badge badge-sm indicator-item">{{ cartStore.cartItems.length }}</span>
                </div>
            </div>
            <div
                tabindex="0"
                class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
                <div class="card-body overflow-y-auto max-h-80 space-y-2">
                    <span class="font-bold text-lg">{{ cartStore.cartItems.length }} Articles dans le panier</span>
                    <li v-for="item in cartStore.cartItems" :key="item.id" class="flex flex-wrap space-y-2">
                    <p class="font-semibold underline">{{item.title}}</p>
                    <div class="flex justify-center items-center space-x-4">
                    <img :src="item.image" :alt="item.title" class = "w-20 h-20 object-cover">
                    <p class="font-semibold">{{item.price}} €</p>
                    </div>
                    </li>
                    <span class="text-info">{{cartStore.totalPrice}} € </span>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-block">Accéder au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>