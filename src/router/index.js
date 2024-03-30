import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import PanierComponent from '../components/PanierComponent.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/panier',
        name: 'panier',
        component: PanierComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
