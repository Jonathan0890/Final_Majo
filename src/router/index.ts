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
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },{
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },{
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue'),
    },{
      path: '/transaction-categories',
      name: 'transaction-categories',
      component: () => import('../views/TransactionCategoriesView.vue'),
    },{
      path: '/register-transaction',
      name: 'register-transaction',
      component: () => import('../views/TransactionRegisterView.vue'),
    },{
      path: '/summary',
      name: 'summary',
      component: () => import('../views/SummaryView.vue'),
    },{
      path: '/savings-goals',
      name: 'savings-gols',
      component: () => import('../views/SavingsGoalsView.vue'),
    },{
      path: '/reminders',
      name: 'reminders',
      component: () => import('../views/RemindersView.vue'),
    },
    {
      path: '/pruebas',
      name: 'pruebas',
      component: () => import('../views/MUsuarios.vue'),
    }
  ],
})

export default router
