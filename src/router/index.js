import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/Lists.vue')
  },
  {
    path: '/ajout',
    name: 'Ajout',
    component: () => import('../views/Ajout.vue')
  },
  {
    path: '/creation',
    name:'Creation',
    component: () => import('../views/Creation.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
