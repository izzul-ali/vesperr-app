<script setup lang="ts">
import Header from "../components/Header.vue";
import { features } from "../../data/features.json"
import Footer from "../components/Footer.vue";
import { open } from "../modules/composable";

</script>
<template>
    <main id="home">
        <Header />

        <div :class="open ? 'blur-sm' : ''">
            <!-- Hero -->
            <section class="h-[80%] font-body mt-20 lg:flex items-center">
                <div
                    class="md:order-1 px-5 mx-auto flex justify-center mt-10 animate-bounce-slow transition-all duration-1000">
                    <img src="../assets/images/hero-img.png" alt="hero image" class="w-4/5 sm:w-3/5 lg:w-4/5">
                </div>
                <div class="mt-10 px-5 lg:pl-10">
                    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold font-title">Grow your business with
                        Vesperr
                    </h1>
                    <p class="text-lg mt-2 font-normal text-gray-500">We are team of talented designers making websites
                        with
                        Vuejs and Tailwindcss.
                    </p>
                    <div
                        class="text-lg border border-blue-600 hover:bg-blue-600 hover:text-white w-fit px-4 rounded-xl text-blue-600 py-1 mt-10">
                        <h1>Get Started</h1>
                    </div>
                </div>
            </section>

            <!-- Client -->
            <section class="flex flex-wrap my-28 bg-blue-50 py-10 gap-10 justify-center px-3 sm:justify-evenly">
                <img src="../assets/images/clients/client-1.png" class="w-16" alt="client-1">
                <img src="../assets/images/clients/client-2.png" class="w-16" alt="client-2">
                <img src="../assets/images/clients/client-3.png" class="w-16" alt="client-3">
                <img src="../assets/images/clients/client-4.png" class="w-16" alt="client-4">
                <img src="../assets/images/clients/client-5.png" class="w-16" alt="client-5">
                <img src="../assets/images/clients/client-6.png" class="w-16" alt="client-6">

                <span id="about"></span>
            </section>

            <!-- About Us -->
            <section class="px-5 lg:px-10">
                <div class="mb-8 flex items-center justify-center gap-x-5">
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                    <h1 class="text-xl lg:text-2xl font-bold">ABOUT US</h1>
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                </div>
                <div class="text-base lg:text-[1.1rem] lg:flex md:gap-2">
                    <div class="lg:basis-2/4">
                        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="list-disc list-outside px-5 lg:space-y-5">
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        </ul>
                    </div>
                    <br>
                    <div class="lg:basis-2/4">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div
                            class="text-lg border border-blue-600 hover:bg-blue-600 hover:text-white w-fit px-4 rounded-xl text-blue-600 py-1 mt-8">
                            <h1>Learn More</h1>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Client Experience -->
            <section class="px-5 my-28 lg:flex lg:items-center">

                <!-- Second Hero image -->
                <div class="basis-2/4 px-5 mb-10 flex justify-center">
                    <img src="../assets/images/counts-img.svg" class="w-[80%] h-auto lg:w-[80%] sm:w-3/5" alt="counts">
                </div>

                <div class="basis-2/4 flex flex-col gap-8 lg:flex-row lg:flex-wrap">
                    <div class="flex justify-center items-center gap-x-4">
                        <div class="smile w-10 h-10 bg-cover bg-center"></div>
                        <div class="flex-1 text-sm">
                            <p class="font-bold text-xl">65</p>
                            <p class="text-gray-600"><strong>Happy Clients </strong>consequuntur voluptas nostrum
                                aliquid
                                ipsam architecto ut.</p>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-x-4">
                        <div class="clock w-10 h-10 bg-cover bg-center"></div>
                        <div class="flex-1 text-sm">
                            <p class="font-bold text-xl">18</p>
                            <p class="text-gray-600"><strong>Years of experience </strong>aut commodi quaerat modi
                                aliquam
                                nam ducimus aut
                                voluptate non vel</p>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-x-4">
                        <div class="note w-10 h-10 bg-cover bg-center"></div>
                        <div class="flex-1 text-sm">
                            <p class="font-bold text-xl">85</p>
                            <p class="text-gray-600"><strong>Projects </strong>adipisci atque cum quia aspernatur totam
                                laudantium et quia dere
                                tan</p>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-x-4">
                        <div class="medal w-10 h-10 bg-cover bg-center"></div>
                        <div class="flex-1 text-sm">
                            <p class="font-bold text-xl">15</p>
                            <p class="text-gray-600"><strong>Awards </strong>rerum asperiores dolor alias quo
                                reprehenderit
                                eum et nemo pad der
                            </p>
                        </div>
                    </div>
                </div>
                <span id="services"></span>
            </section>

            <!-- Services -->
            <section class="px-5">
                <div class="flex items-center justify-center gap-x-5">
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                    <h1 class="text-xl lg:text-2xl font-bold">SERVICES</h1>
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                </div>
                <p class="text-base my-5 text-center text-gray-700">Magnam dolores commodi suscipit eius consequatur ex
                    aliquid fug</p>

                <!-- Card -->
                <div class="flex flex-col gap-5 sm:flex-row sm:flex-wrap items-center justify-center">
                    <div
                        class="p-5 space-y-3 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
                        <div class="smile w-10 h-10 bg-cover bg-center"></div>
                        <h3 class="font-semibold text-base">Lorem Ipsum</h3>
                        <p class="text-sm">oluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </div>
                    <div
                        class="p-5 space-y-3 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
                        <div class="clock w-10 h-10 bg-cover bg-center"></div>
                        <h3 class="font-semibold text-base">Sed ut perspiciatis</h3>
                        <p class="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        </p>
                    </div>
                    <div
                        class="p-5 space-y-3 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
                        <div class="note w-10 h-10 bg-cover bg-center"></div>
                        <h3 class="font-semibold text-base">Magni Dolores</h3>
                        <p class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        </p>
                    </div>
                    <div
                        class="p-5 space-y-3 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
                        <div class="medal w-10 h-10 bg-cover bg-center"></div>
                        <h3 class="font-semibold text-base">Nemo Enim</h3>
                        <p class="text-sm">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        </p>
                    </div>
                </div>
                <span id="feature"></span>
            </section>

            <!-- Features -->
            <section class="my-28">
                <div class="flex items-center justify-center gap-x-5">
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                    <h1 class="text-xl lg:text-2xl font-bold">FEATURES</h1>
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                </div>
                <p class="text-base my-5 text-center text-gray-700">Necessitatibus eius consequatur ex aliquid fuga eum
                    quidem</p>

                <!-- List Features -->
                <div class="flex mt-10 flex-col flex-wrap justify-center sm:items-center bg-blue-50 gap-5 sm:flex-row">
                    <div v-for="(feature, index) in features" :key="index"
                        class="flex px-5 items-center gap-5 py-4 sm:rounded">
                        <div :class="feature.tag" class="w-8 h-8 bg-cover bg-center"></div>
                        <p class="text-lg font-semibold">{{ feature.title }}</p>
                    </div>

                </div>
                <span id="pricing"></span>
            </section>

            <!-- Pricing -->
            <section class="px-5">
                <div class="flex items-center justify-center gap-x-5">
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                    <h1 class="text-xl lg:text-2xl font-bold">PRICING</h1>
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                </div>
                <p class="text-base my-5 text-center text-gray-700">Sit sint consectetur velit nemo qui impedit suscipit
                    alias ea</p>

                <!-- Card -->
                <div class="flex flex-col gap-5 sm:flex-row">
                    <div
                        class="basis-1/3 shadow-md  text-center space-y-7 border py-5 rounded-md hover:bg-blue-50 transition duration-500">
                        <h1 class="font-semibold text-lg">Free</h1>
                        <p class="text-gray-500 text-base"><span class="text-4xl text-blue-500">$0</span>/month</p>
                        <div class="leading-10 font-light text-sm">
                            <p>Aida dere</p>
                            <p>Nec feugiat nisl</p>
                            <div class="text-gray-400">
                                <del>Nulla at volutpat dola <br> Pharetra massa <br>
                                    Massa ultricies mi</del>
                            </div>
                        </div>
                        <div>
                            <button
                                class="px-7 py-1 rounded-2xl border text-base font-semibold border-blue-500 hover:bg-blue-600 hover:text-white">Try
                                Now</button>
                        </div>
                    </div>
                    <div
                        class="basis-1/3 shadow-md  text-center space-y-7 border border-blue-600 py-5 rounded-md hover:bg-blue-50 transition duration-500">
                        <h1 class="font-semibold text-lg">Business</h1>
                        <p class="text-gray-500 text-base"><span class="text-4xl text-blue-500">$19</span>/month</p>
                        <div class="leading-10 font-light text-sm">
                            <p>Aida dere</p>
                            <p>Nec feugiat nisl</p>
                            <p>Nulla at volutpat dola</p>
                            <div class="text-gray-400">
                                <del>Pharetra massa <br>
                                    Massa ultricies mi</del>
                            </div>
                        </div>
                        <div>
                            <button
                                class="px-7 py-1 rounded-2xl border text-base font-semibold border-blue-500 hover:bg-blue-600 hover:text-white">Buy
                                Now</button>
                        </div>
                    </div>
                    <div
                        class="basis-1/3 shadow-md  text-center space-y-7 border py-5 rounded-md hover:bg-blue-50 transition duration-500">
                        <h1 class="font-semibold text-lg">Developer</h1>
                        <p class="text-gray-500 text-base"><span class="text-4xl text-blue-500">$49</span>/month</p>
                        <div class="leading-10 font-light text-sm">
                            <p>Aida dere</p>
                            <p>Nec feugiat nisl</p>
                            <p>Nulla at volutpat dola</p>
                            <p>Pharetra massa</p>
                            <p>Massa ultricies mi</p>
                        </div>
                        <div>
                            <button
                                class="px-7 py-1 rounded-2xl border text-base font-semibold border-blue-500 hover:bg-blue-600 hover:text-white">Buy
                                Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonial -->
            <section class="my-28 px-5">
                <div class="no-scrollbar flex rounded-md w-full overflow-x-scroll gap-3">
                    <div class="shadow-md rounded-lg border p-5 w-4/5 md:w-3/5 lg:w-1/4 flex-none">
                        <div class="mb-5">
                            <img src="../assets/images/person/person-1.jpg" class="w-20 rounded-xl mb-3" alt="person1">
                            <h2 class="font-bold">Matt Brandon</h2>
                            <p class="text-sm text-gray-500">Designer</p>
                        </div>
                        <q>
                            <span class="text-base italic text"> Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Magnam quidem saepe voluptatem ut sequi hic voluptate quos ullam tempora aliquam </span>
                        </q>
                    </div>
                    <div class="shadow-md rounded-lg border p-5 w-4/5 md:w-3/5 lg:w-1/4 flex-none">
                        <div class="mb-5">
                            <img src="../assets/images/person/person-2.jpg" class="w-20 rounded-xl mb-3" alt="person1">
                            <h2 class="font-bold">Matt Brandon</h2>
                            <p class="text-sm text-gray-500">Designer</p>
                        </div>
                        <q>
                            <span class="text-base italic text"> Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Magnam quidem saepe voluptatem ut sequi hic voluptate quos ullam tempora aliquam </span>
                        </q>
                    </div>
                    <div class="shadow-md rounded-lg border p-5 w-4/5 md:w-3/5 lg:w-1/4 flex-none">
                        <div class="mb-5">
                            <img src="../assets/images/person/person-3.jpg" class="w-20 rounded-xl mb-3" alt="person1">
                            <h2 class="font-bold">Matt Brandon</h2>
                            <p class="text-sm text-gray-500">Designer</p>
                        </div>
                        <q>
                            <span class="text-base italic text"> Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Magnam quidem saepe voluptatem ut sequi hic voluptate quos ullam tempora aliquam </span>
                        </q>
                    </div>
                    <div class="shadow-md rounded-lg border p-5 w-4/5 md:w-3/5 lg:w-1/4 flex-none">
                        <div class="mb-5">
                            <img src="../assets/images/person/person-4.jpg" class="w-20 rounded-xl mb-3" alt="person1">
                            <h2 class="font-bold">Matt Brandon</h2>
                            <p class="text-sm text-gray-500">Designer</p>
                        </div>
                        <q>
                            <span class="text-base italic text"> Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Magnam quidem saepe voluptatem ut sequi hic voluptate quos ullam tempora aliquam </span>
                        </q>
                    </div>
                </div>
                <span id="contact"></span>
            </section>

            <!-- Contact Us -->
            <section class="mb-28 px-5">
                <div class="flex items-center justify-center gap-x-5">
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                    <h1 class="text-xl lg:text-2xl font-bold">CONTACT US</h1>
                    <span class="w-16 h-[1px] bg-blue-800 inline-block"></span>
                </div>

                <div class="lg:flex justify-center gap-10 lg:mt-10">
                    <div class="my-10 lg:my-0 space-y-1">
                        <h1 class="text-xl font-semibold">Vesperr</h1>
                        <p class="text-sm mb-10 text-gray-500">Cras fermentum odio eu feugiat. Justo eget magna
                            fermentum
                            iaculis eu non diam
                            phasellus. Scelerisque
                            felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>

                        <!-- Sosial Media -->
                        <ul class="flex py-2 gap-5">
                            <li>
                                <router-link to="/"><img src="../assets/images/logo/twitter.png" class="w-7 h-7" alt="">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/"><img src="../assets/images/logo/instagram.png" class="w-7 h-7"
                                        alt="">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/"><img src="../assets/images/logo/facebook.png" class="w-7 h-7"
                                        alt="">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/"><img src="../assets/images/logo/linkedin.png" class="w-7 h-7"
                                        alt="">
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Form -->
                    <form @submit.prevent class="space-y-5">
                        <input type="text"
                            class="w-full border border-slate-300 px-3 focus:border-blue-500 py-2 focus:outline-none"
                            placeholder="Name">
                        <input type="email"
                            class="w-full border border-slate-300 px-3 focus:border-blue-500 py-2 focus:outline-none"
                            placeholder="Email">
                        <input type="text"
                            class="w-full border border-slate-300 px-3 focus:border-blue-500 py-2 focus:outline-none"
                            placeholder="Suject">
                        <textarea name="message" cols="30" rows="5" placeholder="Message"
                            class="w-full border border-slate-300 p-3"></textarea>
                        <div>
                            <button
                                class="px-7 py-1 rounded-2xl border text-base font-semibold border-blue-500 bg-blue-500 hover:bg-blue-600 text-gray-50">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    </main>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.smile {
    @apply bg-[url('../assets/images/emoji/smile.png')]
}

.clock {
    @apply bg-[url('../assets/images/emoji/clock.png')]
}

.medal {
    @apply bg-[url('../assets/images/emoji/medal.png')]
}

.note {
    @apply bg-[url('../assets/images/emoji/notes.png')]
}

.database {
    @apply bg-[url('../assets/images/feature/database.png')]
}

.tower {
    @apply bg-[url('../assets/images/feature/signal-tower.png')]
}

.router {
    @apply bg-[url('../assets/images/feature/wifi-router.png')]
}

.iot {
    @apply bg-[url('../assets/images/feature/internet-of-things.png')]
}

.writer {
    @apply bg-[url('../assets/images/feature/writer.png')]
}
</style>