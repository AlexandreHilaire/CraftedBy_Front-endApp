<script setup>
import { useUserStore } from '@/stores/user';
const auth = true;

const userStore = useUserStore();

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
            <li v-if="auth">
                <a class="justify-between">Profil</a>
            </li>
            <li v-if="auth">
                <a>Paramètres</a>
            </li>
            <li v-if="auth">
                <a @click="logout">Déconnexion</a>
            </li>
            <li v-else>
                <RouterLink to="/login">
                    Connexion
                </RouterLink>
            </li>
        </ul>
    </div>
</template>