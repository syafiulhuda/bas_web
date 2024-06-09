// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: { title: 'Login' }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/Transaction.vue'),
      meta: { title: 'Transaction' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Mengatur judul halaman
  if (to.meta.title) {
    document.title = `CBvZ - ${to.meta.title}`
  }
  next()
})

export default router
