import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 开启历史模式

  routes: [
    {
      path: '/Login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home', // 路由重定向
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Layout/Home/index.vue')
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import('@/views/Layout/Category/index.vue'),
        },
        {
          path: '/subCategory/:id',
          name: 'subCategory',
          component: () => import('@/views/Layout/Category/components/SubCategory.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)', //匹配所有路径
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
