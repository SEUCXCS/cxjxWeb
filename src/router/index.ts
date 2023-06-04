import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import test from '../views/test.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: HomeView
        },
        {
            path: "/square",
            name: "square",
            component: () => import('@/views/square.vue')
        },
        {
            path: "/knowledgebase/:id*",
            name: "knowledgebase",
            component: () => import('@/views/KnowledgeBaseView.vue')
        },
        {
            path:"/news",
            name:"news",
            component: () => import('@/views/NewsHomeView.vue')
        },
        {
            path: "/news/:id",
            name: "new",
            component: () => import('@/views/NewsView.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import('@/views/404View.vue')
        }

    ]
})

router.afterEach((to, from) => {
    const hash = to.hash
    if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }
})

export default router
