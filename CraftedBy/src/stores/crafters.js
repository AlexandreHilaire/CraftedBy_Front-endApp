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

    return {fetchCrafters, fetchCrafterData, crafters, crafterData};

});