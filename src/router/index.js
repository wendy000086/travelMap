import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'home',
        component:() => import('@/page/home')
    },
    {
        path: '/travel',
        name:'travel',
        component:() => import('@/page/travel')
    },
    {
        path: '/travelDetail',
        name:'travelDetail',
        component:() => import('@/page/travelDetail')
    },
    {
        path: '/food',
        name:'food',
        component:() => import('@/page/food')
    },
    {
        path: '/act',
        name:'act',
        component:() => import('@/page/act')
    },
    {
        path: '/more',
        name:'more',
        component:() => import('@/page/more')
    }
]

const router = new VueRouter({
    routes,
})

export default router