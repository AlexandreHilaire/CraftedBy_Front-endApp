<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const store = useUserStore();


const logout = async () => {
    await userStore.logout();
}
</script>
<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="rounded-full">
                <ph-user-circle width="50" height="50" color="#E0B841" />
            </div>
        </div>
        <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li></li>
            <li v-if="store.isAuth">
                <RouterLink to="/dashboard">
                    <a class="justify-between">Profil</a>
                </RouterLink>
            </li>
            <li v-if="store.isAuth">
                <a>Paramètres</a>
            </li>
            <li v-if="store.isAuth">
                <a @click="logout">Déconnexion</a>
            </li>
            <li v-else>
                <RouterLink to="/login">
                    Connexion
                </RouterLink>
                <RouterLink to="/register">
                    S'inscrire
                </RouterLink>
            </li>
        </ul>
    </div>
</template>