import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: ()=>import('../views/test.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ()=>import('../views/Articles.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
