import { createRouter, createWebHistory } from 'vue-router';

// Router
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/HomePage.vue')
    },
    {
        path: '/month/:id',
        name: 'MonthStats',
        component: () => import('./views/MonthStats.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./views/NotFound.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'router-link-active'
})