import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/red',
    component: () => import('@/views/red-light.vue')
  },
  {
    path: '/yellow',
    component: () => import('@/views/yellow-light.vue')
  },
  {
    path: '/green',
    component: () => import('@/views/green-light.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/red'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
