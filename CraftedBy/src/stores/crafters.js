import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useCraftersStore = defineStore('crafter', () => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const crafters = ref([]);
    const crafterData = ref();

    async function fetchCrafters () {
        try {
            const response = await axios.get(`${apiUrl}/crafters`);
            crafters.value = response.data;
        }
        catch (error) {
            console.log("error fetching data", error);
        }
    }

    async function fetchCrafterData (id) {
        try{
            const response = await axios.get(`${apiUrl}/crafters/${id}`);
            crafterData.value = response.data;
        }
        catch(error){
            console.log("error fetching data", error);
        }
    }

    async function createCrafter(user_id, crafter_name, location, information, story, crafting_process, material_preference) {
        try{
            await axios.post(`${apiUrl}/crafters`, {user_id, crafter_name, location, information, story, crafting_process, material_preference});
        }
        catch (error){
            console.log('erreur lors de la création du crafter', error)
        }
    }

    return {fetchCrafters, fetchCrafterData, createCrafter, crafters, crafterData};

});