import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/dash',
      name: 'dashb',
      component: () => import('../views/DashView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/noso',
      name: 'nosotros',
      component: () => import('../views/NosotrosView.vue'),
    },
  ],
})

export default router
