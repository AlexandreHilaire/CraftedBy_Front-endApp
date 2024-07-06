import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DeliveryMethod from '@/views/DeliveryMethod.vue';
import DeliveryAddresses from '../views/DeliveryAddresses.vue';
import PurchaseFunnel from '@/views/PurchaseFunnel.vue';
import Product from '../views/Product.vue';
import ProductsList from '../views/ProductsList.vue';
import PaymentView from '@/views/PaymentView.vue';
import CraftersListView from '@/views/CraftersListView.vue';
import CrafterView from '@/views/CrafterView.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import CreateCrafterView from '@/views/CreateCrafterView.vue';
import EditAdresses from '@/views/EditAdresses.vue';
import CreateAdress from '@/views/CreateAdress.vue';
import IdentityParse from '@/views/IdentityParse.vue';
import Stripe from '@/views/Stripe.vue';
import EditCrafter from '@/views/EditCrafter.vue';
import EditProduct from '@/views/EditProduct.vue';
import CreateProduct from '@/views/CreateProduct.vue';
import CreateCategories from '@/views/CreateCategories.vue';
import CreateMaterials from '@/views/CreateMaterials.vue';

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
      name: 'product',
      component: Product,
    },
    {
      path: '/createProduct',
      name: 'createProduct',
      component: CreateProduct,
    },
    {
      path: '/editProduct',
      name: 'editProduct',
      component: EditProduct,
      props: route => ({productId: route.params.product_id}),
    },
    {
      path: '/createCategories',
      name: 'createCategories',
      component: CreateCategories,
    },
    {
      path: '/createMaterials',
      name: 'createMaterials',
      component: CreateMaterials,
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
      path: '/crafters',
      name: 'crafters',
      component: CraftersListView,
    },
    {
      path: '/crafter/:id',
      name: 'crafter',
      component : CrafterView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/createCrafter',
      name: 'createCrafter',
      component:CreateCrafterView,
    },
    {
      path: '/editCrafter',
      name: 'editCrafter',
      component: EditCrafter,
      props: route => ({crafterData: route.params.crafterData}),
    },
    {
      path: '/editAdresses',
      name: 'editAdresses',
      component: EditAdresses,
    },
    {
      path: '/createAdress',
      name: 'createAdress',
      component: CreateAdress,
    },
    {
      path: '/identityParse',
      name: 'identityParse',
      component: IdentityParse,
    },
    {
      path: '/Stripe',
      name: 'stripe',
      component: Stripe,
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
