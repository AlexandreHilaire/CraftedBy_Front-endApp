import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DeliveryMethod from '@/views/DeliveryMethod.vue'
import DeliveryAddresses from '../views/DeliveryAddresses.vue'
import PurchaseFunnel from '@/views/PurchaseFunnel.vue'
import Product from '../views/Product.vue'
import ProductsList from '../views/ProductsList.vue'
import PaymentView from '@/views/PaymentView.vue'

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
      component: ProductsList
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
      props: true
    },
    {
      path: '/cart',
      name: 'purchaseFunnel',
      component: PurchaseFunnel,
    },
    {
      path: '/deliveryAddresses',
      name: 'deliveryAddresses',
      component: DeliveryAddresses,
    },
    {
      path: '/deliveryMethod',
      name: 'deliveryMethod',
      component: DeliveryMethod,
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
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
