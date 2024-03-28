import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {

    const url = import.meta.env.VITE_URL;
    const apiUrl = import.meta.env.VITE_API_URL;

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
            console.log('erreur de déconnexion', error);
        }
    }
    const userAuth = async () => {
        try{
            const response = await axios.get(`${apiUrl}/user`);
            const user = response.data;
            console.log(user);
        }
        catch (error){
            console.log("error fetching data", error);
        }
    }
    async function register (email, password, firstname, lastname, birthdate, phone_number, role, password_confirmation) {
        try{
            await axios.post(`${url}/register`, {email, password, firstname, lastname, birthdate, phone_number, role, password_confirmation});
        }
        catch(error){
            console.log("erreur lors de l'enregistrement", error);
        }
    }
    return {login, logout, userAuth, register};

});