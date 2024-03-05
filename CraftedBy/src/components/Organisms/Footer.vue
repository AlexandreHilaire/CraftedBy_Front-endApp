<template>
    <div class="flex flex-wrap md:flex justify-between">
        <div class="flex flex-col justify-items-start">
            <Contact />
        </div>
        <div class="flex flex-col">
            <h4 class="text-2xl">Plan du site</h4>
            <h4 class="text-2xl">FAQ</h4>
            <h4 class="text-2xl">CGV</h4>
        </div>

        <h4>Mentions légales</h4>

        <div class="grid grid-cols-2 gap-2 justify-items-end">
            <SocialNetworks class="grid grid-cols-2 gap-2" />
        </div>
    </div>
</template>