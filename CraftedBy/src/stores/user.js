import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    
    const user = localStorage.getItem('USER');
let isAuth;

if (user) {
    const userData = JSON.parse(user);
    isAuth = ref(userData.isAuth);
} else {
    isAuth = ref(false);
}

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
            return user;
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
    const userAdresses = ref();
    async function fetchUserAdresses(id){
        try {
            const response = await axios.get(`${apiUrl}/addresses/search/${id}`);
            userAdresses.value = response.data
            return userAdresses;
        }
        catch (error) {
            console.log('error fetching data', error);
        }
    }

    const userRole = ref('');
    async function fetchUserRole(id){
        try {
            const response = await axios.get(`${apiUrl}/users/role/${id}`);
            userRole.value = response.data;
        }
        catch (error){
            console.log('error fetching user role', error);
        }
    }

    return {login, logout, userAuth, register, fetchUserAdresses, fetchUserRole, userRole, isAuth};

});