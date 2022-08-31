<template>
    <footer class="px-5 py-3 bg-blue-50">
        <div class="text-center space-y-1">
            <p class="text-sm">© Copyright <span class="font-semibold">Vesperr</span>. All Rights Reserved</p>
            <p class="text-xs">Designed by <span class="text-blue-400">Vue Tailwindcss</span></p>
        </div>
        <ul class="flex flex-wrap justify-evenly w-4/5 mx-auto text-sm pt-5 pb-2">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/">About</router-link>
            </li>
            <li>
                <router-link to="/">Privacy Policy</router-link>
            </li>
            <li>
                <router-link to="/">Terms of Use</router-link>
            </li>
        </ul>
    </footer>
</template>