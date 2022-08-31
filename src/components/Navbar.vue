<script setup lang="ts">
import { open } from "../modules/composable";
</script>
<template>
    <nav :class="open ? 'block bg-blue-50' : 'hidden'"
        class="shadow-black md:bg-inherit md:block absolute md:sticky left-0 right-0 top-14 font-body rounded-xl px-5 md:w-3/5 lg:w-2/4 space-y-3 text-sm py-2 pb-5 md:pb-2">
        <ul class="space-y-6 md:space-y-0 md:flex justify-between">
            <li @click="open = false"><a @click="open = !open" href="/#home">Home</a></li>
            <li @click="open = false"><a href="/#about">About</a></li>
            <li @click="open = false"><a href="/#feature">Feature</a></li>
            <li @click="open = false"><a href="/#services">Service</a></li>
            <li @click="open = false"><a href="/#pricing">Pricing</a></li>
            <li @click="open = false"><a href="/#contact">Contact</a></li>
        </ul>
    </nav>
</template>