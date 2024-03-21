<script setup>
let contents = ['1', '2']
</script>

<template>
  <div class="m-5 flex flex-col items-center justify-center">
    <h1 class="m-5 text-8xl">Bienvenue</h1>
    <p class="max-w-3xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum nulla ut luctus
      placerat. Ut vel mattis purus. Sed porta odio ut dictum feugiat. Phasellus leo risus,
      tristique nec varius non, iaculis ut ante. Sed ornare non massa at volutpat. Nunc vel
      convallis urna.
    </p>
  </div>

  <div class="m-5 flex flex-col items-center justify-center">
    <h2 class="relative right-24 text-7xl">Le geste</h2>
    <div class="relative flex min-h-96 min-w-full justify-center bg-[#E0B841] bg-opacity-40">
      <h2 class="absolute left-2/4 text-7xl">des artisans</h2>
      <div
        v-for="content in contents"
        :key="content"
        class="card m-10 mt-20 w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src="/product.svg" alt="productImage" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Titre produit</h2>
          <p>Produit description</p>
          <div class="card-actions">
            <ButtonPrimary :label="'Je veux'" />
          </div>
          <p class="font-semibold">666 €</p>
        </div>
      </div>
    </div>
  </div>

  <div class="m-5 flex flex-col items-center justify-center">
    <h2 class="relative right-24 text-7xl">Produits</h2>
    <div class="relative flex min-h-96 min-w-full justify-center bg-blue-700 bg-opacity-40">
      <h2 class="absolute left-2/4 text-7xl">Phares</h2>
      <div
        v-for="content in contents"
        :key="content"
        class="card m-10 mt-20 w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src="/product.svg" alt="productImage" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Titre produit</h2>
          <p>Produit description</p>
          <div class="card-actions">
            <ButtonPrimary :label="'Je veux'" />
          </div>
          <p class="font-semibold">666 €</p>
        </div>
      </div>
    </div>
  </div>

  <div class="m-5 flex flex-col items-center justify-center">
    <h2 class="relative right-52 text-7xl">Artisans</h2>
    <div
      class="relative flex min-h-96 min-w-full justify-center bg-red-700 bg-opacity-40 text-center">
      <h2 class="absolute right-1/2 text-7xl">Du</h2>
      <h2 class="absolute top-16 start-1/2 text-7xl">Mois</h2>
      <div
        v-for="content in contents"
        :key="content"
        class="card m-10 mt-40 w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/crafter.svg" alt="crafterImage" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Nom boutique</h2>
          <p>Boutique description</p>
          <div class="card-actions">
            <ButtonPrimary :label="'visiter'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
