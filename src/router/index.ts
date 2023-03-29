import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AutorisationView from '../views/AutorisationView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'default_layout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: { name: 'orders' },
    children: [
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/OrdersView.vue')
      },
      {
        path: 'create-order',
        name: 'create-order',
        component: () => import('@/views/CreateOrderView.vue')
      },
      {
        path: '/:catchAll(.*)',
        name: 'not_found',
        redirect: { name: 'orders' },
      }
    ]
  },
  {
    path: '/autorisation',
    name: 'autorisation',
    component: AutorisationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
