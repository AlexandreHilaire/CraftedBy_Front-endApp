<script setup>
import { useUserStore } from '@/stores/user';
import ValidateFormsButton from '../Atoms/Buttons/ValidateFormsButton.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();

const email = ref('');
const password = ref('');
const firstname= ref('');
const lastname= ref('');
const birthdate= ref('');
const phone_number = ref('');
const role = ref('');
const password_confirmation= ref('')

const submitLogin = async () => {
  await userStore.login(email.value, password.value);
  await userStore.userAuth();
};
const submitRegister = async () => {
  await userStore.register(email.value, password.value, firstname.value, lastname.value, birthdate.value, phone_number.value, role.value, password_confirmation.value);
  await useUserStore.login(email.value, password.value);
  await userStore.userAuth();
}

const submitForm = async () => {
  if (route.name === 'register'){
    await submitRegister();
  }
  else {
    await submitLogin();
  }
}
</script>

<template>
  <div class = "flex flex-col justify-center items-center max-w-1/2 p-5">
    <form @submit.prevent='submitForm'>
      <label class="input input-bordered flex items-center gap-2 m-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
      <input type="text" class="grow" placeholder="Email" v-model="email" />
      </label>
      <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" class="grow" placeholder="first name" v-model="firstname"/>
      </label>
      <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" class="grow" placeholder="last name" v-model="lastname"/>
      </label>
            <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" class="grow" placeholder="birthdate" v-model="birthdate"/>
      </label>
            <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" class="grow" placeholder="phone number" v-model="phone_number"/>
      </label>
            <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" class="grow" placeholder="role" v-model="role"/>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
        <input type="password" class="grow" v-model="password" />
      </label>
      <label v-if="route.name === 'register'" class="input input-bordered flex items-center gap-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
        <input type="confirm password" class="grow" v-model="password_confirmation" />
      </label>
      <ValidateFormsButton label="Valider" />
    </form>
  </div>
</template>