import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsList.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/Product.vue'),
      props: true
    },
    {
      path: '/cart',
      name: 'purchaseFunnel',
      component: () => import('../views/PurchaseFunnel.vue'),
    },
    {
      path: '/deliveryAddresses',
      name: 'deliveryAddresses',
      component: () => import('../views/DeliveryAddresses.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
