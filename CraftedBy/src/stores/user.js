import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {

    const url = import.meta.env.VITE_URL;

    async function login(email, password) {
        try {
            await axios.post(`${url}/login`, {email, password} );
        }
        catch (error){
            console.log('erreur d\'authentification',error);
        }
    }
    async function logout (){
        try {
            await axios.post(`${url}/logout`);
            console.log("déconnecté")
        }
        catch (error){
            console.log('erreur de déconnexion', error)
        }
    }
    return {login, logout};

});