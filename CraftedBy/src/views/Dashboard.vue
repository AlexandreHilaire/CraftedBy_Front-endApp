<script setup>
import { useUserStore } from '@/stores/user'
import { onBeforeMount, ref } from 'vue'
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary.vue'
import { useCraftersStore } from '@/stores/crafters'
import { useMaterialsStore } from '@/stores/materials'
import { useCategoriesStore } from '@/stores/categories'

const store = useUserStore()
const crafterStore = useCraftersStore()
const materialsStore = useMaterialsStore()
const categoriesStore = useCategoriesStore()
const user = ref()

async function deleteCrafterPages(crafterPageId) {
  if (store.userRole === 'crafter') {
    await crafterStore.deleteCrafterPage(crafterPageId)
  } else {
    // TODO Pages 404/403 et messages flottant pour prévenir les utlisisateurs
    console.log('403 Unauthorized')
  }
}

async function deleteProduct(productId) {
  if (store.userRole === 'crafter') {
    await store.deleteUserProduct(productId)
  } else {
    // TODO errors pages
    console.log('403, unauthorized')
  }
}

onBeforeMount(async () => {
  user.value = await store.userAuth()
  const userId = user.value.id
  await store.fetchUserRole(userId)
  if (store.userRole === 'crafter') {
    crafterStore.fetchCrafterPages(userId)
    store.fetchUserProducts(userId)
    materialsStore.getMaterials()
    categoriesStore.getCategories()
  }
})
</script>

<template>
  <h1>Profil</h1>
  <div class="flex flex-col items-center justify-center">
    <div class="avatar">
      <div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div>
      <h2 class="m-5 text-2xl">Vos informations</h2>
      <p>Adresse mail : {{ user.email }}</p>
      <p>Nom : {{ user.firstname }}</p>
      <p>Prénom : {{ user.lastname }}</p>
      <p>Numéro de téléphone : {{ user.phone_number }}</p>
      <p>Role : {{ store.userRole }}</p>
    </div>

    <div class="d-flex">
      <RouterLink to="/createCrafter">
        <ButtonPrimary label="Créer une page crafter" class="m-5" />
      </RouterLink>
      <RouterLink to="/editAdresses">
        <ButtonPrimary label="Éditer mes adresses" class="m-5" />
      </RouterLink>
      <RouterLink to="/IdentityParse">
        <ButtonPrimary label="Vérifier mon identité" class="m-5" />
      </RouterLink>
    </div>
    <div v-if="store.userRole === 'crafter'" class="d-flex">
      <h2 class="m-5 justify-center text-2xl">Mes pages crafter</h2>
      <div v-for="page in crafterStore.crafterPages" :key="page.id" class="m-5 flex flex-col">
        <div class="m-5">
          <p class="m-5">{{ page.crafter_name }}</p>
          <RouterLink :to="{ name: 'crafter', params: { id: page.id } }">
            <ButtonPrimary label="Voir la page" class="m-5" />
          </RouterLink>
          <ButtonPrimary @click="deleteCrafterPages(page.id)" label="Supprimer" />
        </div>
      </div>
      <h2 class="m-5 justify-center text-2xl">Mes produits</h2>
      <RouterLink to="/createProduct">
        <ButtonPrimary label="Ajouter un produit" class="m-5" />
      </RouterLink>
      <div v-for="product in store.userProducts" :key="product.id">
        <p class="m-5">{{ product.name }}</p>
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
          <ButtonPrimary label="Voir le produit" class="m-5" />
        </RouterLink>
        <ButtonPrimary @click="deleteProduct(product.id)" label="Supprimer" />
      </div>
      <h2 class="m-5 justify-center text-2xl">Catégories de produits</h2>
      <RouterLink to="/createCategories">
        <ButtonPrimary label="Créer une catégorie du produits" class="m-5" />
      </RouterLink>
      <div v-for="category in categoriesStore.categories" :key="category.id">
        <p class="m-5">{{ category.category_name }}</p>
      </div>
      <h2 class="m-5 justify-center text-2xl">Matériaux de produits</h2>
      <RouterLink to="/createMaterials">
        <ButtonPrimary label="Ajouter un matériau" class="m-5" />
      </RouterLink>
      <div v-for="material in materialsStore.materials" :key="material.id">
        <p class="m-5">{{ material.material_name }}</p>
      </div>
    </div>
  </div>
</template>
