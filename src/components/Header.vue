<script setup lang="ts">
import { open } from "../modules/composable";
import Navbar from "./Navbar.vue";
</script>
<template>
    <header :class="open ? 'shadow-none bg-blue-50' : 'bg-white'" class="px-5 py-3 fixed top-0 w-full shadow-md z-10">
        <div class="flex items-center font-title justify-between">
            <h1 class="text-2xl lg:text-3xl font-bold">Vesperr</h1>
            <div @click="open = !open" class="space-y-1 md:hidden">
                <span class="bg-gray-800 rounded w-5 h-[2px] block"></span>
                <span class="bg-gray-800 rounded w-5 h-[2px] block"></span>
                <span class="bg-gray-800 rounded w-5 h-[2px] block"></span>
            </div>
            <Transition name="bar">
                <navbar/>
            </Transition>
            <div class="hidden md:block bg-blue-700 text-white font-body text-sm px-2 py-1 rounded-lg cursor-pointer">
                Get Started</div>
        </div>
    </header>
</template>

<!-- <style scoped>
.bar-enter-from,
 .bar-leave-to {
    @apply -translate-y-full
}

.bar-enter-to,
 .bar-leave {
    @apply translate-y-0
}

.bar-enter-active {
    @apply transition-all duration-700 ease-in-out
}

.bar-leave-active {
    @apply transition-all duration-100 ease-in-out
}
</style> -->
