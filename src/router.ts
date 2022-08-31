import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from './views/index.vue'
import NotFound from './404.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;