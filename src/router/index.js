import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
