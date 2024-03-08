<script setup>
import { userCartStore } from '@/stores/cart';

const cartStore = userCartStore();

function removeProduct(id){
   cartStore.removeProductFromCart(id);
}
function addProductToCart(item) {
   cartStore.addProductToCart(item);
}
function removeOneQuantityProductFromCart(itemId) {
   cartStore.removeOneProductQuantityFormCart(itemId);
}
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
                    
                    <span class="badge badge-sm indicator-item">{{ cartStore.totalItemsQuantity }}</span>
                </div>
            </div>
            <div
                tabindex="0"
                class="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow"
            >
                <div class="card-body overflow-y-auto max-h-80 space-y-2">
                    <span class="font-bold text-lg text-center">{{ cartStore.totalItemsQuantity }} Articles dans le panier</span>
                    <li v-for="item in cartStore.cartItems" :key="item.id" class="flex flex-wrap space-y-2">
                        <p class="font-semibold underline w-full">{{item.title}}</p>
                        <div class="flex flex-wrap justify-center items-center space-x-4 w-full">
                            <img :src="item.image" :alt="item.title" class="w-20 h-20 object-cover">
                            <div class="flex flex-col items-center space-y-2">
                                <div class="flex space-x-2">
                                    <button @click="addProductToCart(item)">
                                        <PhPlusCircle width="25" height="25" color="#E0B841"/>
                                    </button>
                                        <p class="font-semibold">Quantité : {{ item.quantity }}</p>
                                    <button>
                                        <PhMinusCircle @click="removeOneQuantityProductFromCart(item.id)" width="25" height="25" color="#E0B841"/>
                                    </button>
                                </div>
                                <p class="font-semibold">{{ (item.price * item.quantity).toFixed(2) }} €</p>
                            </div>
                            <button>
                                <PhTrash width="25" height="25" color="#E0B841" @click="removeProduct(item.id)" />
                            </button>
                        </div>
                    </li>
                    <span class="text-info w-full text-right">Prix total TTC : {{ cartStore.totalPrice }} € </span>
                </div>
                <div class="sticky bottom-0">
                    <div class="card-actions">
                        <RouterLink :to="{name: 'purchaseFunnel' }">
                        <button class="btn btn-primary btn-block">Accéder au panier
                        </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>