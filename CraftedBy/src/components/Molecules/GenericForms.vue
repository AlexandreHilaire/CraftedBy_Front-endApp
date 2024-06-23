<script setup>
import { ref, onBeforeMount } from 'vue';
import ValidateFormsButton from '../Atoms/Buttons/ValidateFormsButton.vue';
import { useRoute } from 'vue-router';
import { useCraftersStore } from '@/stores/crafters';
import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { useAddressesStore } from '@/stores/addresses';
import { useUploadsStore } from '@/stores/uploads';
import { defineProps } from 'vue';
import { useProductStore } from '@/stores/product';
import { useCategoriesStore } from '@/stores/categories';

const crafterStore = useCraftersStore();
const userStore = useUserStore();
const addressStore = useAddressesStore();
const uploadStore = useUploadsStore();
const productStore = useProductStore();
const categoriesStore = useCategoriesStore();
const user = ref();

const props = defineProps({
    crafterId: String,
    productId: String
});

onBeforeMount(async () => {
    user.value = await userStore.userAuth();
    if (route.name === 'editCrafter') {
        await crafterStore.fetchCrafterData(props.crafterId);
        crafter_name.value = crafterStore.crafterData.crafter_name;
        location.value = crafterStore.crafterData.location;
        information.value = crafterStore.crafterData.information;
        story.value = crafterStore.crafterData.story;
        crafting_process.value = crafterStore.crafterData.crafting_process;
        material_preference.value = crafterStore.crafterData.material_preference;
    }
    else if (route.name === 'editProduct'){
        await productStore.getProductData(props.productId);

    }
});

const route = useRoute();

// crafter form
const crafter_name = ref('');
const location = ref('');
const information = ref('');
const story = ref('');
const crafting_process = ref('');
const material_preference = ref('');

const submitCreateCrafter = async () => {
    const user_id = user.value.id;
    await crafterStore.createCrafter(user_id, crafter_name.value, location.value, information.value, story.value, crafting_process.value, material_preference.value);
}

const submitEditCrafter = async () => {
    const userId = user.value.id;
    await crafterStore.editCrafter(crafterStore.crafterData.id, userId, crafter_name.value, location.value, information.value, story.value, crafting_process.value, material_preference.value);
}

// End Crafter form

// Adress form
const queryAdress = ref('');
const results = ref([]);

const searchAdress = async () => {
    try {
        const response = await axios.post('http://localhost:8000/searchAdress', { query: queryAdress.value });
        results.value = response.data.features;
    }
    catch (error) {
        console.error('error fetching data');
    }
};

const addressName = ref('');
const customerFirstName = ref('');
const customerLastName = ref('');
const AdressType = ref();
const numberAndStreet = ref('');
const numberAndStreet2 = ref(numberAndStreet);
const postalCode = ref('');

function setAddressesInputsValue(address) {
    numberAndStreet.value = address.name;
    postalCode.value = address.postcode;
}

const submitCreateAddress = async () => {
    const user_id = user.value.id;
    await addressStore.createAddress(user_id, addressName.value, AdressType.value, customerFirstName.value, customerLastName.value, numberAndStreet.value, numberAndStreet2.value, postalCode.value);
}
// End Adress form

// Product forms

const productName = ref('');
const pmodelName = ref('');
const unitPrice = ref();
const description = ref('');
// const status = ref(); // TODO mettre dans la requète à 0 par défaut à valider par l'admin
const color = ref('');
const customizable = ref();
// const isActive=ref(); // TODO mettre dans la requète à 0 par défaut à valider par l'admin
const categoriesNames = ref(['test']);
const materialsNames = ref(['test']);

const submitCreateProduct = async () => {
    const userId = user.value.id;
    await productStore.createProduct(userId, productName.value, pmodelName.value, unitPrice.value, description.value, color.value, customizable.value, categoriesNames.value, materialsNames.value);
}

// end Product forms

// Categories form

const categoryName = ref();

const submitCreateCategory = async () => {
    await categoriesStore.createCategory(categoryName.value);
}

// end Categories form

// Mindee

const fileToUpload = ref(null);

// * Take the file
const fileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        fileToUpload.value = selectedFile;
    }
}

const submitIDCard = async () => {
    const file = fileToUpload.value;
    await uploadStore.MindeeCheck(file);
}

// * End Mindee

const submitForm = async () => {

    switch (route.name) {
        case 'createCrafter':
            await submitCreateCrafter();
            break;
        case 'editCrafter':
            await submitEditCrafter();
            break;
        case 'createAdress':
            await submitCreateAddress();
            break;
        case 'identityParse':
            await submitIDCard();
            break;
        case 'createProduct':
            await submitCreateProduct();
            break;
        case 'createCategories':
            await submitCreateCategory();
            break;
        default:
            break;
    };
}
</script>
<template>
    <form @submit.prevent='submitForm' class="flex flex-col justify-center items-center gap-2">
        <!-- * Crafters -->
        <div v-if="route.name === 'createCrafter' || route.name==='editCrafter'" class="flex flex-col">
            <label class="input input-bordered flex items-center gap-2 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Nom d'artisant" v-model="crafter_name" />
            </label>
            <label class="input input-bordered flex items-center gap-2 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Emplacement" v-model="location" />
            </label>
            <textarea class="textarea textarea-bordered m-2" placeholder="Présentation"
                v-model="information"></textarea>
            <textarea class="textarea textarea-bordered m-2" placeholder="Histoire" v-model="story"></textarea>
            <textarea class="textarea textarea-bordered m-2" placeholder="mon savoir faire"
                v-model="crafting_process"></textarea>
            <textarea class="textarea textarea-bordered m-2" placeholder="Ce que j'aime le plus travailler"
                v-model="material_preference"></textarea>
        </div>
        <!-- * end crafters -->
        <!-- * Adress -->
        <div v-if="route.name === 'createAdress'" class="flex flex-col justify-center items-center gap-5">
            <textarea class="textarea textarea-bordered" placeholder="recherchez votre adresse" v-model="queryAdress"
                @keyup="searchAdress"></textarea>
            <div v-if="results != ''" class="dropdown dropdown-open">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li v-for="(line, index) in results" :key=index>
                        <a @click="setAddressesInputsValue(line.properties)">{{ line.properties.label }}</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-5">
                <input type="text" placeholder="Nom de l'adresse"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="addressName" />
                <input type="text" placeholder="nom du destinataire"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="customerFirstName" />
                <input type="text" placeholder="prénom du destinataire"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="customerLastName" />
                <input type="text" placeholder="type d'adresse"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="AdressType" />
                <input type="text" placeholder="Numéro et nom de voie"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="numberAndStreet" />
                <input type="text" placeholder="Code postal" class="input input-bordered input-primary w-full max-w-xs"
                    v-model="postalCode" />
            </div>
        </div>
        <!-- * end Adress -->
        <!-- * products -->
        <div v-if="route.name === 'createProduct' || route.name === 'editProduct'">
            <div class="flex flex-col gap-5">
                Nom du produit
                <input type="text" placeholder="Nom du produit"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="productName" />
                Modèle du produit
                <input type="text" placeholder="Modèle"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="pmodelName" />
                Couleur du produit
                <input type="text" placeholder="Couleur"
                class="input input-bordered input-primary w-full max-w-xs" v-model="color" />
                Personalisable (0 = non, 1 = oui)
                <input type="number"
                class="input input-bordered input-primary w-full max-w-xs" v-model="customizable" />
                Prix unitaire
                <input type="number"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="unitPrice" /> €
                Description du produit
                <input type="text" placeholder="Description du produit"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="description" />
                <!-- Catégorie du produit
                <input type="text" placeholder="Catégorie du produit"
                    class="input input-bordered input-primary w-full max-w-xs" v-model="categoriesNames" />
                Materiaux du produit
                <input type="text" placeholder="materiaux du produit" class="input input-bordered input-primary w-full max-w-xs"
                    v-model="materialsNames" /> -->
            </div>
        </div>
        <!-- * end Products -->
        <!-- * Categories -->
        <div v-if="route.name === 'createCategories'">
            Nom de Catégorie
            <input type="text" placeholder="Nom de catégorie" v-model="categoryName">
        </div>
        <!-- * end Categories -->
        <!-- * ID Card -->
        <div v-if="route.name ==='identityParse'" class="flex flex-col justify-center items-center gap-5">
            <h3>Uploadez une image votre carte nationale d'identité (formats supportés : JPG, PNG, WEBP, TIFF, HEIC)</h3>
            <input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" @change="fileUpload" />
        </div>
        <!-- * End ID Card -->
        <ValidateFormsButton label="Valider" />
    </form>
</template>