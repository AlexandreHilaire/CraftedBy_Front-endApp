import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
    const url = import.meta.env.VITE_URL;

    async function login(email, password) {
        try {
            await axios.get(`${url}/sanctum/csrf-cookie`);
            await axios.post(`${url}/login`, {email, password} );
        }
        catch (error){
            console.log('erreur d\'authentification',error);
        }
    }

    return {login};

});