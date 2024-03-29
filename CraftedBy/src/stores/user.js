import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const isAuth = ref(JSON.parse(localStorage.getItem('USER')));
    const url = import.meta.env.VITE_URL;
    const apiUrl = import.meta.env.VITE_API_URL;

    async function login(email, password) {
        try {
            await axios.post(`${url}/login`, {email, password} );
            isAuth.value = true;
            localStorage.setItem('USER', JSON.stringify({isAuth : true}));             
        }
        catch (error){
            console.log('erreur d\'authentification',error);
        }
    }
    async function logout (){
        try {
            await axios.post(`${url}/logout`);
            console.log("déconnecté");
            isAuth.value = false;
            localStorage.setItem('USER', JSON.stringify({isAuth : false})); 
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
    
    return {login, logout, userAuth, register, isAuth};

});