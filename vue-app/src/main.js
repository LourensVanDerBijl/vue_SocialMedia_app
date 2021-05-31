import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../src/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../src/views/Login.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () =>
            import ( /* webpackChunkName: "settings" */ '../src/views/Setings.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router