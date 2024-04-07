import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import PanierComponent from '../components/PanierComponent.vue'
import ArticleComponent from '../components/ArticleComponent.vue'

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
    },
    {
        path: '/article',
        name: 'article',
        component: ArticleComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
