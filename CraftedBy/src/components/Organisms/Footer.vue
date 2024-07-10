<template>
    <footer>
        <div class="flex flex-wrap md:flex justify-between">
            <div class="flex flex-col justify-items-start">
                <Contact />
            </div>
            <div class="flex flex-col">
                <h4 class="md:text-2xl sm:text-lg">Plan du site</h4>
                <h4 class="md:text-2xl sm:text-lg">FAQ</h4>
                <h4 class="md:text-2xl sm:text-lg">CGV</h4>
            </div>

            <h4>Mentions légales</h4>

            <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2 justify-items-end">
                <SocialNetworks class="grid grid-cols-2 gap-2" />
            </div>
        </div>
    </footer>
</template>