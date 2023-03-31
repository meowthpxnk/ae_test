import { useUserData } from '@/store/user_data';
import middlewarePipeline from '@/router/middlewarePipeline';
import requireAuth from '@/router/middleware/requireAuth';
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'default_layout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: { name: 'orders' },
    meta: {
      middleware: [requireAuth],
    },
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
    component: () => import('@/views/AutorisationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const userDataStore = useUserData();

    if (!to.meta.middleware) {
      return next();
    }
    const middleware = to.meta.middleware as any;

    const context = {
      to,
      from,
      next,
      userDataStore,
    };

    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    });
  }
);

export default router
